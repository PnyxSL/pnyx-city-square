// supabase/functions/delete-user/index.ts
import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: cors });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers: { ...cors, "Content-Type": "application/json" } });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return new Response(JSON.stringify({ error: "Missing env vars" }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
    }

    // 1) Validar quién llama y obtener su userId del JWT
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
    });
    const { data: { user }, error: userErr } = await userClient.auth.getUser();
    if (userErr || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...cors, "Content-Type": "application/json" } });
    }
    const user_id = user.id;

    // 2) Borrado de datos (opcional: si NO tienes FKs con CASCADE, borra aquí tus tablas hijas en orden)
    // Usamos PostgREST con Service Role para ignorar RLS
    const adminHeaders = {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation'
    };

    // Ejemplo: si tienes cascada, basta con borrar el perfil.
    const delProfileRes = await fetch(`${supabaseUrl}/rest/v1/profiles?id=eq.${user_id}`, {
      method: 'DELETE',
      headers: adminHeaders,
    });
    if (!delProfileRes.ok) {
      const msg = await delProfileRes.text();
      return new Response(JSON.stringify({ error: `Error deleting profile: ${msg}` }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
    }

    // 3) (Opcional) Limpieza de Storage si guardas ficheros por usuario:
    // const buckets = ["avatars","uploads"];
    // for (const b of buckets) {
    //   await fetch(`${supabaseUrl}/storage/v1/object/${b}/users/${user_id}`, {
    //     method: "DELETE",
    //     headers: adminHeaders,
    //   });
    // }

    // 4) Borrar usuario en Auth Admin
    const delAuthRes = await fetch(`${supabaseUrl}/auth/v1/admin/users/${user_id}`, {
      method: 'DELETE',
      headers: adminHeaders,
    });
    if (!delAuthRes.ok) {
      const msg = await delAuthRes.text();
      return new Response(JSON.stringify({ error: `Error deleting auth user: ${msg}` }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { ...cors, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e?.message ?? "Unknown error" }), { status: 500, headers: { ...cors, "Content-Type": "application/json" } });
  }
});