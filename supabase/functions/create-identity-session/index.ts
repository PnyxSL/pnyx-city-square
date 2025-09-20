import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import Stripe from 'npm:stripe@12.12.0';
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// 1) Carga de variables
const STRIPE_SECRET_KEY = Deno.env.get('STRIPE_SECRET_KEY')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
if (!STRIPE_SECRET_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('Faltan variables de entorno');
}

// 2) Init Stripe + Supabase
const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

serve(async (req) => {
  try {
    // 3) Lee user_id del body
    const { user_id } = await req.json();
    if (!user_id) {
      return new Response('user_id missing', { status: 400 });
    }

    // 4) Inserta registro preliminar
    const { error: insErr } = await supabase
      .from('stripe_identity_sessions')
      .insert({ user_id });
    if (insErr) throw insErr;

    // 5) Crea la sesión de Identity en Stripe
    const session = await stripe.identity.verificationSessions.create({
      type: 'document',
      metadata: { user_id },
      options: {
        document: {
          require_matching_selfie: true
        }
      },
    });

    // 6) Guarda el stripe_session_id
    const { error: updErr } = await supabase
      .from('stripe_identity_sessions')
      .update({ stripe_session_id: session.id })
      .eq('user_id', user_id);
    if (updErr) throw updErr;

    // 7) Devuelve al cliente la URL
    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    console.error('Error create-identity-session:', err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
});