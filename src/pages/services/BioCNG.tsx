import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users, Leaf } from "lucide-react";
import bioCngImage from "@/assets/bio-cng.jpg";

const BioCNG = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Banner */}
        <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: `url(${bioCngImage})`}}>
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Bio-CNG Plant Projects</h1>
              <p className="text-xl md:text-2xl">Transform organic waste into clean energy. Create sustainable income and rural employment while contributing to India's green energy mission.</p>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">₹3-10 Crore</h3>
                <p className="text-muted-foreground">Investment Range</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">3-5 Years</h3>
                <p className="text-muted-foreground">ROI Period</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">50-100 Jobs</h3>
                <p className="text-muted-foreground">Employment Generation</p>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">What is Bio-CNG?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Bio-Compressed Natural Gas (Bio-CNG) is a renewable energy source produced from organic waste materials such as agricultural residue, cattle dung, food waste, and crop stubble through anaerobic digestion. The resulting biogas is purified and compressed to vehicle-grade CNG standards.
                </p>
                <p className="text-lg text-muted-foreground">
                  This clean fuel can replace conventional CNG in vehicles, generate electricity, and reduce dependence on fossil fuels while solving India's stubble burning crisis and waste management challenges.
                </p>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>✓ <strong>Sustainable Income:</strong> Continuous revenue from waste-to-energy conversion</li>
                  <li>✓ <strong>Rural Employment:</strong> Creates 50-100 direct and indirect jobs</li>
                  <li>✓ <strong>Environmental Impact:</strong> Reduces GHG emissions and stubble burning</li>
                  <li>✓ <strong>Government Support:</strong> Eligible for MNRE subsidies and carbon credits</li>
                  <li>✓ <strong>Multiple Revenue Streams:</strong> Bio-CNG sales, organic manure, carbon trading</li>
                  <li>✓ <strong>Energy Independence:</strong> Reduces diesel/LPG dependence for villages</li>
                </ul>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Project Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Infrastructure</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 2-5 acres of land</li>
                      <li>• Digester tanks (500-2000 m³)</li>
                      <li>• Gas purification unit</li>
                      <li>• Compression & storage</li>
                      <li>• Power backup (DG set)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Raw Material</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 50-100 tonnes/day feedstock</li>
                      <li>• Crop residue, cattle dung</li>
                      <li>• Food waste, kitchen waste</li>
                      <li>• Community supply chains</li>
                      <li>• FPO/Farmer partnerships</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground text-center">
                <h3 className="text-2xl font-bold mb-4">Download Complete DPR</h3>
                <p className="mb-6 opacity-90">
                  Get the full Detailed Project Report with technical specs, financial projections, govt. schemes, and step-by-step implementation guide.
                </p>
                <Button size="lg" variant="secondary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Bio-CNG DPR (PDF)
                </Button>
                <p className="text-sm mt-4 opacity-75">Free for registered farmers & FPOs</p>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Need assistance with financing or technical setup?</p>
                <Button variant="outline" size="lg">Apply for MSME Funding</Button>
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

export default BioCNG;
