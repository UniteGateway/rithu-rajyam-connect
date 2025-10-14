import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AdSection = () => {
  const ads = [
    {
      title: "Premium Seeds Available",
      description: "High-yield varieties with 20% discount",
      label: "Sponsored",
    },
    {
      title: "Tractor Financing",
      description: "Low interest rates, easy EMI options",
      label: "Partner",
    },
    {
      title: "Organic Fertilizers",
      description: "Certified products for healthy crops",
      label: "Featured",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-center mb-4">Featured Partners</h3>
      
      {ads.map((ad, index) => (
        <Card key={index} className="p-4 bg-gradient-to-br from-secondary/10 to-accent/10 hover:shadow-lg transition-all cursor-pointer">
          <Badge variant="outline" className="mb-2">
            {ad.label}
          </Badge>
          <h4 className="font-semibold mb-1">{ad.title}</h4>
          <p className="text-sm text-muted-foreground">{ad.description}</p>
        </Card>
      ))}

      <Card className="p-6 bg-primary text-primary-foreground text-center">
        <h4 className="font-bold mb-2">Advertise Here</h4>
        <p className="text-sm opacity-90">
          Reach 10,000+ farmers daily
        </p>
      </Card>
    </div>
  );
};

export default AdSection;
