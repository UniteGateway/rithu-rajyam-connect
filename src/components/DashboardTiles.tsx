import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Cloud,
  DollarSign,
  Building,
  Repeat,
  Users,
  Globe,
  Snowflake,
  Fish,
  Sprout,
  GraduationCap,
  Briefcase,
  CreditCard,
} from "lucide-react";

const DashboardTiles = () => {
  const tiles = [
    { icon: MessageSquare, title: "AI Chat & Voice", description: "24/7 AI Assistant", path: "/ai-assistant", color: "bg-accent" },
    { icon: Cloud, title: "Weather & Advisory", description: "Real-time Updates", path: "/weather", color: "bg-primary" },
    { icon: DollarSign, title: "Market Prices", description: "Mandi & Export", path: "/market", color: "bg-secondary" },
    { icon: Building, title: "Government Schemes", description: "Subsidies & Benefits", path: "/schemes", color: "bg-earth" },
    { icon: Repeat, title: "Barter Exchange", description: "Seeds, Produce, Equipment", path: "/community#barter", color: "bg-accent" },
    { icon: Users, title: "Farmer Community", description: "Forums & Groups", path: "/community", color: "bg-primary" },
    { icon: Globe, title: "FPO & Export", description: "Network & Market Access", path: "/community#fpo", color: "bg-secondary" },
    { icon: Snowflake, title: "Cold Storage", description: "Community Facilities", path: "/projects#cold-storage", color: "bg-earth" },
    { icon: Fish, title: "Aqua Culture", description: "Fish Farming Support", path: "/aqua", color: "bg-accent" },
    { icon: Sprout, title: "Seeds Marketplace", description: "Quality Seeds & Plants", path: "/marketplace", color: "bg-primary" },
    { icon: GraduationCap, title: "Training & CSR", description: "Skills & Programs", path: "/csr", color: "bg-secondary" },
    { icon: Briefcase, title: "Projects & DPR", description: "Download Reports", path: "/projects", color: "bg-earth" },
    { icon: CreditCard, title: "Banking & MSME", description: "Loans & Finance", path: "/banking", color: "bg-accent" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Quick Access Dashboard</h2>
        <p className="text-center text-muted-foreground mb-12">
          All essential services in one place
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <Link key={index} to={tile.path}>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer gradient-card border-2 hover:border-primary">
                <div className={`${tile.color} text-white w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <tile.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tile.title}</h3>
                <p className="text-sm text-muted-foreground">{tile.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardTiles;
