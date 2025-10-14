import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)'}}>
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Uniting Farmers, Empowering Communities</h1>
              <p className="text-xl md:text-2xl">Building One Nation – One Farmer Network through trust, technology, and sustainable growth</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Target className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To empower every farmer in India with access to AI-driven advisors, sustainable project opportunities, financial inclusion through MSME support, and a unified digital platform that connects rural entrepreneurs to markets, training, and resources. We strive to eliminate barriers and create pathways to prosperity for farming communities nationwide.
                </p>
              </Card>

              <Card className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  A future where every farmer in India is connected, empowered, and prosperous. We envision a nation where sustainable agriculture thrives, where technology bridges rural-urban divides, and where farmer producer organizations (FPOs) lead India's agricultural transformation. Together, we're building resilient communities rooted in dignity and innovation.
                </p>
              </Card>
            </div>

            {/* About Rithu Rajyam Trust */}
            <div className="bg-card p-8 rounded-lg mb-12 border">
              <h2 className="text-3xl font-bold mb-6">About Rithu Rajyam Trust</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Rithu Rajyam Trust is a registered non-profit organization dedicated to transforming rural India through farmer-centric initiatives. Founded with the belief that empowered farmers create thriving communities, we work at the intersection of technology, finance, and sustainable development.
                </p>
                <p className="mb-4">
                  Our trust operates across multiple states, partnering with government bodies, banking institutions, CSR organizations, and FPOs to deliver real impact. From providing instant access to Detailed Project Reports (DPRs) for green energy ventures to facilitating MSME loans and hosting community training programs, we are committed to holistic rural development.
                </p>
                <p>
                  Powered by <strong>UNITE DEVELOPERS GLOBAL INC</strong>, our technology platform ensures that farmers anywhere in India can access critical services through their mobile phones—whether it's AI advisors speaking their local language, instant WhatsApp support, or downloadable resources for starting sustainable businesses.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">Transparent operations, honest guidance, and accountable partnerships at every step.</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusion</h3>
                <p className="text-muted-foreground">Every farmer matters—from small landholders to large FPOs, we serve all with equal dedication.</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Leveraging AI, digital tools, and sustainable practices to drive modern agriculture.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're a farmer seeking support, a volunteer passionate about rural development, or a CSR partner looking to make an impact—there's a place for you in the Rythu Rajyam family.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary">Register as Volunteer</Button>
              <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                Partner with Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default About;
