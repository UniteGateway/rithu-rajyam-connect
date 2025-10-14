import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Calendar, Award } from "lucide-react";

const CSR = () => {
  const trainings = [
    {
      title: "Organic Farming Workshop",
      date: "Nov 15-17, 2025",
      location: "Hyderabad",
      capacity: "50 farmers",
    },
    {
      title: "Solar Installation Training",
      date: "Nov 20-22, 2025",
      location: "Vijayawada",
      capacity: "30 participants",
    },
    {
      title: "Aquaculture Best Practices",
      date: "Nov 25-27, 2025",
      location: "Guntur",
      capacity: "40 farmers",
    },
    {
      title: "Agri-tech & Digital Tools",
      date: "Dec 1-3, 2025",
      location: "Warangal",
      capacity: "60 participants",
    },
  ];

  const csrProjects = [
    {
      title: "Village Digital Literacy",
      partner: "Tech Corp India",
      beneficiaries: "500+ farmers",
      status: "Ongoing",
    },
    {
      title: "Solar Pump Installation",
      partner: "Green Energy Foundation",
      beneficiaries: "200 farms",
      status: "Completed",
    },
    {
      title: "Cold Storage Development",
      partner: "Rural Development Bank",
      beneficiaries: "15 villages",
      status: "In Progress",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CSR & Training Programs</h1>
            <p className="text-xl md:text-2xl">
              Empowering farmers through skill development and corporate partnerships
            </p>
          </div>
        </section>

        {/* Training Calendar */}
        <section id="training" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Upcoming Training Programs</h2>
              <p className="text-muted-foreground">
                Free skill development workshops for registered farmers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {trainings.map((training, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{training.title}</h3>
                      <div className="space-y-1 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{training.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{training.capacity}</span>
                        </div>
                        <div>📍 {training.location}</div>
                      </div>
                      <Button size="sm" className="w-full">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Full Training Calendar
              </Button>
            </div>
          </div>
        </section>

        {/* CSR Projects */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">CSR Partnerships & Projects</h2>
              <p className="text-muted-foreground">
                Corporate social responsibility initiatives transforming rural communities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {csrProjects.map((project, index) => (
                <Card key={index} className="p-6">
                  <Badge variant="secondary" className="mb-4">
                    {project.status}
                  </Badge>
                  <h3 className="font-bold text-lg mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Partner:</span>
                      <span className="font-medium">{project.partner}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="font-medium">{project.beneficiaries}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Become a CSR Partner</h3>
                <p className="text-muted-foreground mb-6">
                  Join us in making a difference in rural India. Partner with Rythu Rajyam to implement impactful CSR projects.
                </p>
                <Button size="lg">
                  Partner With Us
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Adopt a Village */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Adopt a Village Program</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Transform entire communities through comprehensive development projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Villages Adopted</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">Families Impacted</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Corporate Partners</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary">
                  Learn More About Adoption
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default CSR;
