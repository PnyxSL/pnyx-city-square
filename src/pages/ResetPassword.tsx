import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

// This page is the destination of the password recovery email link.
// Supabase sends a type=recovery access token in the URL (#access_token=... or query params depending on config)
// When present, we allow the user to set a new password.

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    // When the user visits with a recovery link, supabase-js should handle exchanging the token
    // and creating a session automatically if the URL contains the fragment. We can then verify session.
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setHasSession(true);
      }
      setTokenChecked(true);
    };
    checkSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please ensure both passwords match.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      toast({
        title: "Error updating password",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Password updated",
        description: "Your password has been updated. You can now access your account.",
      });
      navigate('/account');
    }
    setIsSubmitting(false);
  };

  if (!tokenChecked) {
    return (
      <div className="min-h-screen bg-subtle-gradient flex items-center justify-center">
        <p className="text-muted-foreground">Validating recovery link...</p>
      </div>
    );
  }

  if (!hasSession) {
    return (
      <div className="min-h-screen bg-subtle-gradient flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-card border-border/50">
          <CardHeader>
            <CardTitle>Invalid or expired link</CardTitle>
            <CardDescription>Please request a new password reset link.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/auth')} className="w-full" variant="civic">Back to Auth</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-subtle-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-card border-border/50">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-civic-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Lock className="w-6 h-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription>Create a new password for your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            </div>
            <Button type="submit" variant="civic" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Updating...' : 'Update Password'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
