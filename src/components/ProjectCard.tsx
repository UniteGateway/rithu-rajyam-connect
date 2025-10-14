import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, TrendingUp, Calendar } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  investment: string;
  roi: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, description, investment, roi, image, category }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <Badge variant="secondary" className="mb-3">
          {category}
        </Badge>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="font-medium">Investment:</span>
            <span className="text-muted-foreground">{investment}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="font-medium">ROI:</span>
            <span className="text-muted-foreground">{roi}</span>
          </div>
        </div>

        <Button className="w-full" size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download DPR
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
