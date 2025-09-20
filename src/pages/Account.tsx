import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Building2, User, Mail, LogOut, Trash2, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User as SupabaseUser, Session } from '@supabase/supabase-js';

const Account = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        if (!session?.user) {
          navigate('/auth');
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      
      if (!session?.user) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account."
      });
      navigate('/');
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;

    setIsDeleting(true);
    
    try {
      const { error: invokeError } = await supabase.functions.invoke('delete-user');

      if (invokeError) {
        throw new Error(invokeError.message || "Failed to delete account.");
      }

      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        console.error('signOut error after delete', signOutError);
      }

      toast({
        title: "Account deleted",
        description: "Your account has been permanently removed."
      });

      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete account.",
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-subtle-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-civic-gradient rounded-xl mx-auto mb-4 flex items-center justify-center animate-pulse">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <p className="text-muted-foreground">Loading your account...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-subtle-gradient p-4">
      <div className="container max-w-2xl mx-auto py-8">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-civic-gradient rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Account Management</h1>
          <p className="text-muted-foreground mt-2">Manage your Pnyx account settings</p>
        </div>

        {/* Account Information */}
        <Card className="shadow-card border-border/50 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Account Information
            </CardTitle>
            <CardDescription>
              Your account details and basic information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{user.email}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Account Created</Label>
                <span className="text-foreground">
                  {new Date(user.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            {user.user_metadata?.full_name && (
              <div className="space-y-2">
                <Label>Full Name</Label>
                <span className="text-foreground">{user.user_metadata.full_name}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Sign Out */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <LogOut className="w-5 h-5" />
                Sign Out
              </CardTitle>
              <CardDescription>
                Sign out of your account safely
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleSignOut} 
                variant="civic-outline" 
                className="w-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </CardContent>
          </Card>

          {/* Delete Account */}
          <Card className="shadow-card border-destructive/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <Trash2 className="w-5 h-5" />
                Delete Account
              </CardTitle>
              <CardDescription>
                Permanently delete your account and all data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    disabled={isDeleting}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    {isDeleting ? "Processing..." : "Delete Account"}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete account?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. All of your personal information and activity will be permanently removed.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      onClick={handleDeleteAccount}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Yes, delete"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </div>

        {/* Support Information */}
        <Card className="shadow-card border-border/50 mt-6">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>
              Contact our support team for assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you need help with your account or have questions about Pnyx, 
              our support team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="civic-outline" className="flex-1">
                Contact Support
              </Button>
              <Button variant="ghost" className="flex-1">
                View Help Center
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;
