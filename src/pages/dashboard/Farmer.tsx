import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Cloud, TrendingUp, FileText, Snowflake, GraduationCap, Wallet, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const FarmerDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user: authUser } } = await supabase.auth.getUser();
    
    if (!authUser) {
      navigate('/signin');
      return;
    }

    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('auth_user_id', authUser.id)
      .single();

    if (profile?.role !== 'farmer') {
      toast.error("Access denied: Farmer dashboard only");
      navigate('/');
      return;
    }

    setUser(profile);
    setLoading(false);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const dashboardCards = [
    { icon: Sprout, title: "My Farms", description: "Manage your farm details and crops", link: "#" },
    { icon: Cloud, title: "Crop Advisory", description: "AI-powered crop recommendations", link: "#" },
    { icon: TrendingUp, title: "Market Rates", description: "Live market prices", link: "/projects" },
    { icon: FileText, title: "My DPRs", description: "Downloaded project reports", link: "/projects" },
    { icon: Snowflake, title: "Cold Storage", description: "Book cold storage slots", link: "/services/cold-storage" },
    { icon: GraduationCap, title: "Training", description: "Upcoming workshops", link: "/services/training" },
    { icon: Wallet, title: "Wallet", description: "Transactions & payments", link: "#" },
    { icon: MessageCircle, title: "Messages", description: "WhatsApp sync messages", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-muted/30">
        {/* Welcome Banner */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Welcome, {user?.full_name}!</h1>
            <p className="text-xl opacity-90">Farmer Dashboard • {user?.district}, {user?.state}</p>
          </div>
        </section>

        {/* Dashboard Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardCards.map((card, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => card.link !== '#' && navigate(card.link)}>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <card.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Today's Weather</h3>
                <p className="text-muted-foreground">Partly cloudy, 28°C</p>
                <p className="text-sm text-muted-foreground mt-2">Rain expected tomorrow</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Latest Advisory</h3>
                <p className="text-muted-foreground">Pest alert for cotton crops</p>
                <Button variant="link" className="p-0 h-auto mt-2">Read More</Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">New Scheme</h3>
                <p className="text-muted-foreground">PM-KUSUM Solar Subsidy</p>
                <Button variant="link" className="p-0 h-auto mt-2">Apply Now</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default FarmerDashboard;
