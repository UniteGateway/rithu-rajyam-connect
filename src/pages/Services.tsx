import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Sun, Snowflake, Factory, Fish, Sprout, GraduationCap, Heart, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "Bio-CNG Projects",
      description: "Convert agricultural waste into clean energy. Generate income while promoting sustainability.",
      link: "/services/bio-cng",
      color: "bg-green-500"
    },
    {
      icon: Sun,
      title: "Solar Farms",
      description: "Lease your land for solar energy generation. Long-term PPA-based revenue model.",
      link: "/services/solar-farms",
      color: "bg-yellow-500"
    },
    {
      icon: Snowflake,
      title: "Community Cold Storage",
      description: "Solar-powered cold storage facilities. Reduce post-harvest losses by up to 40%.",
      link: "/services/cold-storage",
      color: "bg-blue-500"
    },
    {
      icon: Factory,
      title: "Agro Processing & MSME",
      description: "Set up food processing units with complete MSME support and financing options.",
      link: "/services/agro-processing",
      color: "bg-orange-500"
    },
    {
      icon: Fish,
      title: "Aquaculture",
      description: "Modern fish farming with bio-floc technology. High-profit sustainable model.",
      link: "/services/aquaculture",
      color: "bg-cyan-500"
    },
    {
      icon: Sprout,
      title: "Seeds & Plants Marketplace",
      description: "Access to high-quality seeds, saplings, and agricultural inputs at fair prices.",
      link: "/services/seeds-plants",
      color: "bg-lime-500"
    },
    {
      icon: GraduationCap,
      title: "Training & Capacity Building",
      description: "Expert-led workshops on organic farming, technology adoption, and business skills.",
      link: "/services/training",
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      title: "CSR Partnerships",
      description: "Corporate Social Responsibility programs connecting enterprises with farmer communities.",
      link: "/services/csr",
      color: "bg-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Exports & Imports",
      description: "Connect with buyers and importers globally. Traceability and quality certification support.",
      link: "/services/exports-imports",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)'}}>
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Comprehensive Services for Rural Prosperity</h1>
              <p className="text-xl md:text-2xl">From green energy to market access—explore sustainable ventures designed for farmers and rural entrepreneurs</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Service Portfolio</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each service comes with complete DPR support, financing guidance, technical training, and ongoing advisory to ensure your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Rythu Rajyam Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Complete DPR Support</h3>
                <p className="text-muted-foreground">Instant download of detailed project reports with investment, ROI, and technical specs.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Financing Assistance</h3>
                <p className="text-muted-foreground">Direct connect with banks, MSME schemes, and subsidy programs for easy funding.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">End-to-End Support</h3>
                <p className="text-muted-foreground">From planning to execution—training, technical support, and market linkages included.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Services;
