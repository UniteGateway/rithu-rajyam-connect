import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, PhoneCall } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const LANGUAGES = ["Telugu", "Hindi", "English", "Tamil", "Kannada"];
const FARMER_TYPES = ["Small", "Medium", "Large", "Tenant", "FPO Member"];

const RegisterFarmer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    full_name: "",
    mobile: "",
    email: "",
    state: "",
    district: "",
    village: "",
    farmer_type: "",
    acres: "",
    crop: "",
    language: "English",
    communication_methods: [] as string[],
    terms_accepted: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCommunicationChange = (method: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      communication_methods: checked
        ? [...prev.communication_methods, method]
        : prev.communication_methods.filter(m => m !== method)
    }));
  };

  const handleSendOtp = async () => {
    if (!formData.mobile && !formData.email) {
      toast({
        title: "Error",
        description: "Please provide mobile number or email",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: formData.mobile || undefined,
        email: formData.email || undefined,
        options: {
          data: formData,
        }
      });

      if (error) throw error;

      setOtpSent(true);
      setShowOtpDialog(true);
      toast({
        title: "OTP Sent",
        description: `Verification code sent to ${formData.mobile || formData.email}`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setVerifyingOtp(true);
    try {
      const verifyParams = formData.mobile 
        ? { phone: formData.mobile, token: otp, type: 'sms' as const }
        : { email: formData.email!, token: otp, type: 'email' as const };

      const { error: verifyError } = await supabase.auth.verifyOtp(verifyParams);

      if (verifyError) throw verifyError;

      // Get the session to get auth_user_id
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) throw new Error("No session found");

      // Insert farmer data
      const { error: insertError } = await supabase
        .from('farmers' as any)
        .insert({
          auth_user_id: session.user.id,
          full_name: formData.full_name,
          mobile: formData.mobile,
          email: formData.email || null,
          state: formData.state,
          district: formData.district,
          village: formData.village,
          farmer_type: formData.farmer_type,
          acres: formData.acres ? parseFloat(formData.acres) : null,
          crop: formData.crop || null,
          language: formData.language,
          communication_methods: formData.communication_methods,
          terms_accepted: formData.terms_accepted,
          verified: true,
        } as any);

      if (insertError) throw insertError;

      toast({
        title: "Success!",
        description: "Registration successful! Welcome to Rythu Rajyam.",
      });

      navigate('/thank-you');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.mobile || !formData.state || 
        !formData.district || !formData.village || !formData.farmer_type || 
        !formData.terms_accepted) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    handleSendOtp();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative h-64 bg-gradient-hero">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Join Rythu Rajyam
            </h1>
            <p className="text-xl text-shadow">Empowering Farmers Together 🌾</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="full_name" className="text-base">Full Name *</Label>
                <Input
                  id="full_name"
                  value={formData.full_name}
                  onChange={(e) => handleInputChange('full_name', e.target.value)}
                  className="mt-2 h-12 text-base"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="mobile" className="text-base">Mobile Number *</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="h-12 text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-base">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="language" className="text-base">Language Preference *</Label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map(lang => (
                      <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Location Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="state" className="text-base">State *</Label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {INDIAN_STATES.map(state => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="district" className="text-base">District *</Label>
                <Input
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="mt-2 h-12 text-base"
                  required
                />
              </div>

              <div>
                <Label htmlFor="village" className="text-base">Village *</Label>
                <Input
                  id="village"
                  value={formData.village}
                  onChange={(e) => handleInputChange('village', e.target.value)}
                  className="mt-2 h-12 text-base"
                  required
                />
              </div>
            </div>
          </div>

          {/* Farm Information */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Farm Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="farmer_type" className="text-base">Type of Farmer *</Label>
                <Select value={formData.farmer_type} onValueChange={(value) => handleInputChange('farmer_type', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {FARMER_TYPES.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="acres" className="text-base">Number of Acres (Optional)</Label>
                <Input
                  id="acres"
                  type="number"
                  step="0.01"
                  value={formData.acres}
                  onChange={(e) => handleInputChange('acres', e.target.value)}
                  className="mt-2 h-12 text-base"
                />
              </div>

              <div>
                <Label htmlFor="crop" className="text-base">Main Crop Grown (Optional)</Label>
                <Input
                  id="crop"
                  value={formData.crop}
                  onChange={(e) => handleInputChange('crop', e.target.value)}
                  className="mt-2 h-12 text-base"
                />
              </div>
            </div>
          </div>

          {/* Communication Preferences */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Communication Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="phone"
                  checked={formData.communication_methods.includes('phone')}
                  onCheckedChange={(checked) => handleCommunicationChange('phone', checked as boolean)}
                />
                <Label htmlFor="phone" className="text-base cursor-pointer">📞 Phone Call</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whatsapp"
                  checked={formData.communication_methods.includes('whatsapp')}
                  onCheckedChange={(checked) => handleCommunicationChange('whatsapp', checked as boolean)}
                />
                <Label htmlFor="whatsapp" className="text-base cursor-pointer">💬 WhatsApp</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="email-comm"
                  checked={formData.communication_methods.includes('email')}
                  onCheckedChange={(checked) => handleCommunicationChange('email', checked as boolean)}
                />
                <Label htmlFor="email-comm" className="text-base cursor-pointer">✉️ Email</Label>
              </div>
            </div>
          </div>

          {/* Terms & Submit */}
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox
                id="terms"
                checked={formData.terms_accepted}
                onCheckedChange={(checked) => handleInputChange('terms_accepted', checked)}
              />
              <Label htmlFor="terms" className="text-base cursor-pointer">
                I accept the Terms & Conditions and Privacy Policy *
              </Label>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Button type="submit" size="lg" className="flex-1" disabled={loading}>
                {loading ? "Sending OTP..." : "Register Now"}
              </Button>
            </div>
          </div>

          {/* Alternative Registration */}
          <div className="bg-accent/50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Not comfortable filling forms?</h3>
            <p className="mb-4 text-muted-foreground">Call us and we'll register you!</p>
            <p className="text-2xl font-bold mb-4 text-foreground">📞 Toll-Free: 1800-xxx-xxxx</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="tel:1800xxxxxxx">
                  <PhoneCall className="mr-2" />
                  Call to Register Now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/919999999999?text=Hello%20Rithu%20Rajyam,%20I'd%20like%20to%20register%20as%20a%20farmer" target="_blank" rel="noopener noreferrer">
                  💬 Register via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </form>
      </div>

      {/* OTP Dialog */}
      <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify OTP</DialogTitle>
            <DialogDescription>
              Enter the verification code sent to {formData.mobile || formData.email}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="h-12 text-center text-2xl tracking-widest"
              maxLength={6}
            />
            <Button 
              onClick={handleVerifyOtp} 
              className="w-full" 
              disabled={verifyingOtp || otp.length < 6}
            >
              {verifyingOtp ? "Verifying..." : "Verify OTP"}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSendOtp} 
              className="w-full"
              disabled={loading}
            >
              Resend OTP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterFarmer;
