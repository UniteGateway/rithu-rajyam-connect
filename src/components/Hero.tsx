import { Button } from "@/components/ui/button";
import { Mic, MessageCircle, Download } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Empowering Farmers with AI, Finance & Sustainable Projects
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">
            RYTHU RAJYAM – A Digital Ecosystem for Every Farmer
          </p>
          <p className="text-lg mb-8 text-shadow">
            Powered by <strong>Rithu Rajyam Trust</strong> - A non-profit initiative to unite and empower farmers, FPOs, and rural entrepreneurs
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" className="font-semibold">
              Register as Farmer
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              Join via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              <Mic className="mr-2 h-5 w-5" />
              AI Voice Assistant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
