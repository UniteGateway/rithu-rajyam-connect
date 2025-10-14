import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import DashboardTiles from "@/components/DashboardTiles";
import NewsSidebar from "@/components/NewsSidebar";
import AdSection from "@/components/AdSection";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Ticker />
      
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Rythu Rajyam Introduction</h2>
                <YouTubeEmbed />
              </div>
              <DashboardTiles />
            </div>
            <div className="space-y-8">
              <NewsSidebar />
              <AdSection />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
