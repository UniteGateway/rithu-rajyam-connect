import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Snowflake, TrendingDown, Clock } from "lucide-react";
import coldStorageImage from "@/assets/cold-storage.jpg";

const ColdStorage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: `url(${coldStorageImage})`}}>
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Community Cold Storage Projects</h1>
              <p className="text-xl md:text-2xl">Solar-powered cold storage facilities for fruits, vegetables, and perishables. Reduce post-harvest losses by up to 40% and improve farmer incomes.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <TrendingDown className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">₹1-3 Crore</h3>
                <p className="text-muted-foreground">Investment Range</p>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">3-4 Years</h3>
                <p className="text-muted-foreground">ROI Period</p>
              </Card>
              <Card className="p-6 text-center">
                <Snowflake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">500-2000 MT</h3>
                <p className="text-muted-foreground">Storage Capacity</p>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Why Community Cold Storage?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  India loses 30-40% of fruits and vegetables due to lack of cold chain infrastructure. Community-owned cold storage facilities address this gap by providing affordable storage near farms, allowing farmers to sell produce at better prices instead of distress sales during peak harvest.
                </p>
                <p className="text-lg text-muted-foreground">
                  Solar-powered cold storage reduces energy costs by 60-70% compared to conventional grid-powered units, making them economically viable even in remote rural areas.
                </p>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>✓ <strong>Solar Integration:</strong> Hybrid solar+grid reduces operating costs dramatically</li>
                  <li>✓ <strong>Multi-Commodity:</strong> Separate chambers for fruits, vegetables, dairy, seeds</li>
                  <li>✓ <strong>Temperature Control:</strong> 2°C to 8°C for vegetables, -18°C for frozen items</li>
                  <li>✓ <strong>FPO/Cooperative Model:</strong> Farmer-owned, ensures affordability and access</li>
                  <li>✓ <strong>Government Support:</strong> Up to 35% subsidy under MIDH and Kisan Sampada Yojana</li>
                  <li>✓ <strong>Revenue Streams:</strong> Storage fees, ripening chambers, grading/sorting services</li>
                </ul>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Project Components</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Infrastructure</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Insulated cold room (PUF panels)</li>
                      <li>• Solar panels (50-100 kW)</li>
                      <li>• Refrigeration units & compressors</li>
                      <li>• Ripening chambers (ethylene gas)</li>
                      <li>• Pre-cooling, grading area</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Operations</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• FPO/SHG managed</li>
                      <li>• Booking via mobile app</li>
                      <li>• IoT-based monitoring</li>
                      <li>• Quality certification</li>
                      <li>• Market linkage support</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground text-center">
                <h3 className="text-2xl font-bold mb-4">Download Complete DPR</h3>
                <p className="mb-6 opacity-90">
                  Detailed project report with equipment specs, energy calculations, financial projections, subsidies, and operational best practices.
                </p>
                <Button size="lg" variant="secondary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Cold Storage DPR (PDF)
                </Button>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Book cold storage space for your produce</p>
                <Button variant="outline" size="lg">Book Storage Slot</Button>
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

export default ColdStorage;
