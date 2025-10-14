import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Signin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        // Fetch user profile to determine role
        const { data: profile } = await supabase
          .from('users')
          .select('role')
          .eq('auth_user_id', data.user.id)
          .single();

        toast.success("Signed in successfully!");

        // Redirect based on role
        if (profile?.role === 'farmer') {
          navigate('/dashboard/farmer');
        } else if (profile?.role === 'buyer') {
          navigate('/dashboard/buyer');
        } else if (profile?.role === 'importer') {
          navigate('/dashboard/importer');
        } else {
          navigate('/');
        }
      }
    } catch (error: any) {
      console.error('Signin error:', error);
      toast.error(error.message || "Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
              <p className="text-xl text-muted-foreground">Sign in to access your dashboard</p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-primary hover:underline font-semibold">
                      Sign Up
                    </a>
                  </p>
                  <a href="#" className="text-sm text-primary hover:underline block">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signin;
