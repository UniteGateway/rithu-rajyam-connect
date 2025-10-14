import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    role: "",
    state: "",
    district: "",
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }

    setLoading(true);

    try {
      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: formData.fullName,
            role: formData.role,
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Insert user profile
        const { error: profileError } = await supabase
          .from('users')
          .insert({
            auth_user_id: authData.user.id,
            full_name: formData.fullName,
            mobile: formData.mobile,
            email: formData.email,
            role: formData.role,
            state: formData.state,
            district: formData.district
          });

        if (profileError) throw profileError;

        toast.success("Account created successfully! Please check your email to verify your account.");
        
        setTimeout(() => {
          if (formData.role === 'farmer') {
            navigate('/dashboard/farmer');
          } else if (formData.role === 'buyer') {
            navigate('/dashboard/buyer');
          } else if (formData.role === 'importer') {
            navigate('/dashboard/importer');
          } else {
            navigate('/');
          }
        }, 2000);
      }
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Join Rythu Rajyam Network</h1>
              <p className="text-xl text-muted-foreground">Create your account and access a world of opportunities</p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    placeholder="Create a strong password"
                    minLength={6}
                  />
                </div>

                <div>
                  <Label htmlFor="role">I am a... *</Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farmer">Farmer</SelectItem>
                      <SelectItem value="buyer">Buyer</SelectItem>
                      <SelectItem value="importer">Importer/Exporter</SelectItem>
                      <SelectItem value="fpo">FPO Representative</SelectItem>
                      <SelectItem value="csr">CSR Partner</SelectItem>
                      <SelectItem value="bank">Banking Partner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      placeholder="Your state"
                    />
                  </div>

                  <div>
                    <Label htmlFor="district">District</Label>
                    <Input
                      id="district"
                      value={formData.district}
                      onChange={(e) => setFormData({...formData, district: e.target.value})}
                      placeholder="Your district"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => setFormData({...formData, acceptTerms: checked as boolean})}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                    I accept the Terms & Conditions and Privacy Policy
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <a href="/signin" className="text-primary hover:underline font-semibold">
                    Sign In
                  </a>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
