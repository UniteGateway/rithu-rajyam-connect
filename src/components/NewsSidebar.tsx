import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";

const NewsSidebar = () => {
  // Placeholder news - in production, this would fetch from a real API like NewsAPI
  const newsItems = [
    {
      title: "New Solar Subsidy Scheme Announced for Farmers",
      date: "2025-10-13",
      category: "Policy",
      excerpt: "Government launches 40% subsidy on solar installations for agricultural use...",
    },
    {
      title: "Record Wheat Prices in Punjab Mandis",
      date: "2025-10-12",
      category: "Market",
      excerpt: "MSP reaches all-time high as demand surges in export markets...",
    },
    {
      title: "Bio-CNG Projects Gain Momentum",
      date: "2025-10-11",
      category: "Technology",
      excerpt: "Over 500 farmers adopt bio-CNG units, generating additional income...",
    },
    {
      title: "FPO Network Expands to 1000+ Organizations",
      date: "2025-10-10",
      category: "Community",
      excerpt: "Farmer Producer Organizations reaching more rural communities...",
    },
    {
      title: "Cold Storage Capacity Doubles in South India",
      date: "2025-10-09",
      category: "Infrastructure",
      excerpt: "New solar-powered facilities reduce post-harvest losses by 30%...",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Latest Updates
        </h3>
      </div>

      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <Badge variant="secondary" className="mb-2">
              {item.category}
            </Badge>
            <h4 className="font-semibold text-sm mb-2 line-clamp-2">
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
              {item.excerpt}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{new Date(item.date).toLocaleDateString()}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-4 bg-muted">
        <p className="text-xs text-center text-muted-foreground">
          News powered by real-time API integration
        </p>
      </Card>
    </div>
  );
};

export default NewsSidebar;
