import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Sun, TrendingUp, MapPin } from "lucide-react";
import solarImage from "@/assets/solar-farm.jpg";

const SolarFarms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: `url(${solarImage})`}}>
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Solar Farm Projects</h1>
              <p className="text-xl md:text-2xl">Lease your land for solar energy generation. Earn guaranteed long-term income through Power Purchase Agreements (PPA) while contributing to India's renewable energy goals.</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">₹5-25 Crore</h3>
                <p className="text-muted-foreground">Investment Range</p>
              </Card>
              <Card className="p-6 text-center">
                <Sun className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">4-6 Years</h3>
                <p className="text-muted-foreground">ROI Period</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">10-50 Acres</h3>
                <p className="text-muted-foreground">Land Requirement</p>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Ground-Mounted Solar Farms</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Transform barren or low-yield agricultural land into a solar power generation facility. Landowners earn lease rental income for 25 years while developers set up and operate solar panels under long-term Power Purchase Agreements with state DISCOMs or corporate buyers.
                </p>
                <p className="text-lg text-muted-foreground">
                  This model is ideal for farmers with unirrigated land, allowing passive income without day-to-day operations while contributing to India's 500 GW renewable energy target by 2030.
                </p>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Revenue Model</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>✓ <strong>Land Lease:</strong> ₹30,000 - ₹50,000 per acre/year (escalates 5% annually)</li>
                  <li>✓ <strong>PPA Contract:</strong> Fixed electricity rate for 25 years with govt-backed buyers</li>
                  <li>✓ <strong>Government Incentives:</strong> Accelerated depreciation, tax benefits, PM-KUSUM subsidies</li>
                  <li>✓ <strong>Dual Use:</strong> Some models allow sheep grazing or shade-tolerant crops underneath panels</li>
                  <li>✓ <strong>Zero Maintenance:</strong> Developer handles all O&M; landowner only provides land</li>
                </ul>
              </Card>

              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">Land Eligibility & Setup</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3">Land Criteria</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Minimum 10 acres contiguous</li>
                      <li>• Unirrigated or barren preferred</li>
                      <li>• Good solar irradiation (over 5 kWh/m²/day)</li>
                      <li>• Clear land title</li>
                      <li>• Access to grid substation (within 10 km)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Infrastructure</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Solar PV modules (mono/poly-crystalline)</li>
                      <li>• Mounting structures</li>
                      <li>• Inverters & transformers</li>
                      <li>• Fencing & security</li>
                      <li>• Grid connectivity (11kV/33kV)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-primary text-primary-foreground text-center">
                <h3 className="text-2xl font-bold mb-4">Download Complete DPR</h3>
                <p className="mb-6 opacity-90">
                  Comprehensive project report covering land assessment, technical design, financial models, PPA templates, and step-by-step approval process.
                </p>
                <Button size="lg" variant="secondary">
                  <Download className="mr-2 h-5 w-5" />
                  Download Solar Farm DPR (PDF)
                </Button>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">Connect with solar developers and financing partners</p>
                <Button variant="outline" size="lg">Request Consultant Call</Button>
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

export default SolarFarms;
