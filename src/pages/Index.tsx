import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import DashboardTiles from "@/components/DashboardTiles";
import NewsSidebar from "@/components/NewsSidebar";
import AdSection from "@/components/AdSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Ticker />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <DashboardTiles />
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <NewsSidebar />
            <AdSection />
          </div>
        </div>
      </div>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
