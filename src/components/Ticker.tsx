import { Cloud, DollarSign, FileText, Sprout, Sun, Recycle, Snowflake, Building } from "lucide-react";

const Ticker = () => {
  const updates = [
    { icon: Cloud, text: "Weather Alerts" },
    { icon: DollarSign, text: "Market Prices" },
    { icon: FileText, text: "Subsidy Updates" },
    { icon: Sprout, text: "Crop Advisory" },
    { icon: Sun, text: "Solar Projects" },
    { icon: Recycle, text: "Bio-CNG" },
    { icon: Snowflake, text: "Cold Storage" },
    { icon: Building, text: "MSME Finance" },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-marquee flex gap-8 whitespace-nowrap">
        {[...updates, ...updates].map((item, index) => (
          <div key={index} className="flex items-center gap-2 mx-4">
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
