import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Users, Package, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const BuyerDashboard = () => {
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

    if (profile?.role !== 'buyer') {
      toast.error("Access denied: Buyer dashboard only");
      navigate('/');
      return;
    }

    setUser(profile);
    setLoading(false);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 bg-muted/30">
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Welcome, {user?.full_name}!</h1>
            <p className="text-xl opacity-90">Buyer Dashboard</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <ShoppingCart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Post Buying Request</h3>
                <p className="text-muted-foreground">Create new purchase orders</p>
              </Card>
              <Card className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Match Farmers</h3>
                <p className="text-muted-foreground">Find matching suppliers</p>
              </Card>
              <Card className="p-6">
                <Package className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Order Tracking</h3>
                <p className="text-muted-foreground">Track your orders</p>
              </Card>
              <Card className="p-6">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Payment</h3>
                <p className="text-muted-foreground">Manage transactions</p>
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

export default BuyerDashboard;
