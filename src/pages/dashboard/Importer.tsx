import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Globe, FileText, Ship, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ImporterDashboard = () => {
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

    if (profile?.role !== 'importer') {
      toast.error("Access denied: Importer dashboard only");
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
            <p className="text-xl opacity-90">Importer/Exporter Dashboard</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Connect FPOs</h3>
                <p className="text-muted-foreground">Find producer organizations</p>
              </Card>
              <Card className="p-6">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Traceability</h3>
                <p className="text-muted-foreground">Track product origins</p>
              </Card>
              <Card className="p-6">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Export Docs</h3>
                <p className="text-muted-foreground">Manage documentation</p>
              </Card>
              <Card className="p-6">
                <Ship className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Shipping</h3>
                <p className="text-muted-foreground">Track shipments</p>
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

export default ImporterDashboard;
