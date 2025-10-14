import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Repeat, Globe, TrendingUp } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Farmer Community Network</h1>
            <p className="text-xl md:text-2xl">
              Connect, collaborate, and grow together
            </p>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">10,000+</div>
                <div className="text-muted-foreground">Registered Farmers</div>
              </Card>
              <Card className="p-6 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-muted-foreground">FPOs Connected</div>
              </Card>
              <Card className="p-6 text-center">
                <Repeat className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">2,500+</div>
                <div className="text-muted-foreground">Barter Exchanges</div>
              </Card>
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">₹50Cr+</div>
                <div className="text-muted-foreground">Trade Volume</div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Forum */}
              <Card id="forum" className="p-8">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Farmer Forum</h2>
                <p className="text-muted-foreground mb-6">
                  Join district-wise and crop-specific groups. Share experiences, ask questions, and learn from fellow farmers.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">Telangana Rice Farmers</span>
                    <Badge>850 members</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">Cotton Growers Network</span>
                    <Badge>620 members</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">Organic Farming Circle</span>
                    <Badge>1200 members</Badge>
                  </div>
                </div>
                <Button className="w-full">Join Forums</Button>
              </Card>

              {/* Barter Exchange */}
              <Card id="barter" className="p-8">
                <Repeat className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Barter Exchange</h2>
                <p className="text-muted-foreground mb-6">
                  Trade seeds, produce, and equipment directly with other farmers. No money, just mutual benefit.
                </p>
                <div className="space-y-3 mb-6">
                  <Card className="p-4 bg-accent/10">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">Offer</Badge>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="font-medium">50 kg organic rice seeds</p>
                    <p className="text-sm text-muted-foreground">Looking for: Fertilizer or vegetables</p>
                  </Card>
                  <Card className="p-4 bg-secondary/10">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">Need</Badge>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <p className="font-medium">Tractor for 2 days</p>
                    <p className="text-sm text-muted-foreground">Can offer: Labor or dairy products</p>
                  </Card>
                </div>
                <Button className="w-full">Browse Exchange Board</Button>
              </Card>

              {/* FPO Network */}
              <Card id="fpo" className="p-8 md:col-span-2">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">FPO & Export Network</h2>
                <p className="text-muted-foreground mb-6">
                  Connect with Farmer Producer Organizations for better market access, bulk procurement, and export opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="p-4 text-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <h3 className="font-bold mb-2">Market Linkage</h3>
                    <p className="text-sm text-muted-foreground">Direct B2B connections with buyers</p>
                  </Card>
                  <Card className="p-4 text-center bg-gradient-to-br from-secondary/10 to-primary/10">
                    <h3 className="font-bold mb-2">Export Support</h3>
                    <p className="text-sm text-muted-foreground">International market opportunities</p>
                  </Card>
                  <Card className="p-4 text-center bg-gradient-to-br from-accent/10 to-secondary/10">
                    <h3 className="font-bold mb-2">Collective Bargaining</h3>
                    <p className="text-sm text-muted-foreground">Better prices through unity</p>
                  </Card>
                </div>
                <div className="flex gap-4">
                  <Button className="flex-1">Join FPO Network</Button>
                  <Button variant="outline" className="flex-1">Register Your FPO</Button>
                </div>
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

export default Community;
