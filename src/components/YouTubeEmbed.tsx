import { Card } from "@/components/ui/card";

interface YouTubeEmbedProps {
  videoId?: string;
  title?: string;
}

const YouTubeEmbed = ({ 
  videoId = "dQw4w9WgXcQ", // Placeholder video ID
  title = "Rythu Rajyam Introduction"
}: YouTubeEmbedProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Card>
  );
};

export default YouTubeEmbed;
