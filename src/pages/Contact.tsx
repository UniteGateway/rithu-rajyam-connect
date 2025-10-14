import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll respond within 24 hours.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">
              We're here to help farmers grow and succeed
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea
                        placeholder="How can we help you?"
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Rythu Rajyam Trust<br />
                          Hyderabad, Telangana<br />
                          India - 500001
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p className="text-muted-foreground">
                          Toll-Free: 1800-XXX-XXXX<br />
                          Mobile: +91 98765 43210
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          info@rythurajyam.org<br />
                          support@rythurajyam.org
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-green-50 border-green-200">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white p-3 rounded-lg">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-2">WhatsApp Support</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Get instant help on WhatsApp
                        </p>
                        <Button className="bg-green-600 hover:bg-green-700 w-full">
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                  <h3 className="font-bold text-lg mb-2">About Rythu Rajyam Trust</h3>
                  <p className="text-sm text-muted-foreground">
                    A registered non-profit organization dedicated to empowering farmers through technology, finance, and sustainable development. 
                    Our mission is to create "One Nation – One Farmer Network" connecting every farmer to opportunities and resources.
                  </p>
                </Card>
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

export default Contact;
