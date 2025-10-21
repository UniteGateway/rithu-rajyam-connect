import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Download, Mic, LayoutDashboard } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Thank You for Joining!
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            Your registration with Rythu Rajyam is complete.
          </p>
          <p className="text-lg text-muted-foreground">
            Our advisors or AI system will reach you soon. 🌾
          </p>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-foreground mb-4">What's Next?</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Button size="lg" onClick={() => navigate("/dashboard/farmer")} className="h-auto py-4">
              <LayoutDashboard className="mr-2 h-5 w-5" />
              <div>
                <div className="font-semibold">Farmer Dashboard</div>
                <div className="text-xs opacity-90">Access your profile</div>
              </div>
            </Button>

            <Button size="lg" variant="secondary" onClick={() => navigate("/advisors")} className="h-auto py-4">
              <Mic className="mr-2 h-5 w-5" />
              <div>
                <div className="font-semibold">AI Voice Advisor</div>
                <div className="text-xs opacity-90">Get instant help</div>
              </div>
            </Button>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground mb-4">Download our mobile app</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Android App
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download iOS App
              </Button>
            </div>
          </div>

          <div className="pt-6">
            <Button variant="link" onClick={() => navigate("/")}>
              Return to Home
            </Button>
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          Need help? Contact us at{" "}
          <a href="tel:1800xxxxxxx" className="text-primary hover:underline">
            1800-xxx-xxxx
          </a>
          {" "}or{" "}
          <a href="mailto:support@rythurajyam.org" className="text-primary hover:underline">
            support@rythurajyam.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
