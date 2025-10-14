import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const AppDownloadButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="outline" className="gap-2" asChild>
        <a href="/download/android" target="_blank" rel="noopener noreferrer">
          <Smartphone className="h-5 w-5" />
          <div className="text-left">
            <div className="text-xs opacity-75">GET IT ON</div>
            <div className="font-bold">Google Play</div>
          </div>
        </a>
      </Button>
      <Button variant="outline" className="gap-2" asChild>
        <a href="/download/ios" target="_blank" rel="noopener noreferrer">
          <Smartphone className="h-5 w-5" />
          <div className="text-left">
            <div className="text-xs opacity-75">Download on the</div>
            <div className="font-bold">App Store</div>
          </div>
        </a>
      </Button>
    </div>
  );
};

export default AppDownloadButtons;
