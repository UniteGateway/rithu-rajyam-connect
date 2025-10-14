import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mic, Download, X } from "lucide-react";
import { toast } from "sonner";

const FloatingActions = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Rythu Rajyam, I'm a farmer. Please assist me.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  const handleAI = () => {
    toast.info("AI Voice Assistant will be activated here");
  };

  const handleDownload = () => {
    toast.info("DPR download section will open");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {showOptions && (
          <>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 shadow-lg"
              variant="secondary"
              onClick={handleAI}
              title="AI Voice Assistant"
            >
              <Mic className="h-6 w-6" />
            </Button>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700 text-white"
              onClick={handleWhatsApp}
              title="WhatsApp Chat"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 shadow-lg"
              variant="outline"
              onClick={handleDownload}
              title="Download DPR"
            >
              <Download className="h-6 w-6" />
            </Button>
          </>
        )}

        <Button
          size="lg"
          className="rounded-full h-16 w-16 shadow-2xl"
          onClick={() => setShowOptions(!showOptions)}
        >
          {showOptions ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        </Button>
      </div>
    </>
  );
};

export default FloatingActions;
