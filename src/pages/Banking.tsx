import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, DollarSign, FileText, Download } from "lucide-react";

const Banking = () => {
  const bankPartners = [
    { name: "NABARD", description: "Rural development and agriculture finance" },
    { name: "State Bank of India", description: "Comprehensive banking solutions" },
    { name: "Canara Bank", description: "Agricultural and rural banking" },
    { name: "Indian Bank", description: "MSME and farmer finance" },
  ];

  const schemes = [
    {
      name: "PMEGP",
      fullName: "Prime Minister's Employment Generation Programme",
      subsidy: "15-35%",
      maxLoan: "₹50 Lakh",
      eligibility: "Above 18 years",
    },
    {
      name: "MUDRA",
      fullName: "Micro Units Development & Refinance Agency",
      subsidy: "Collateral-free",
      maxLoan: "₹10 Lakh",
      eligibility: "Small businesses",
    },
    {
      name: "Stand-Up India",
      fullName: "For SC/ST & Women Entrepreneurs",
      subsidy: "Up to 30%",
      maxLoan: "₹1 Crore",
      eligibility: "SC/ST/Women",
    },
    {
      name: "Agri Infra Fund",
      fullName: "Agriculture Infrastructure Fund",
      subsidy: "Interest subvention",
      maxLoan: "₹2 Crore",
      eligibility: "FPOs, Farmers",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Banking & MSME Support</h1>
            <p className="text-xl md:text-2xl">
              Access financial schemes and loans for your agricultural ventures
            </p>
          </div>
        </section>

        {/* Banking Partners */}
        <section id="partners" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Banking Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bankPartners.map((bank, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Building className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold mb-2">{bank.name}</h3>
                  <p className="text-sm text-muted-foreground">{bank.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* MSME Schemes */}
        <section id="msme" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">MSME Loan Schemes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schemes.map((scheme, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {scheme.name}
                      </Badge>
                      <h3 className="text-xl font-bold">{scheme.fullName}</h3>
                    </div>
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subsidy:</span>
                      <span className="font-semibold">{scheme.subsidy}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Max Loan:</span>
                      <span className="font-semibold">{scheme.maxLoan}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Eligibility:</span>
                      <span className="font-semibold">{scheme.eligibility}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Application Guide */}
        <section id="loans" className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Loan Application Process</h2>
            
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Choose Your Project</h3>
                    <p className="text-muted-foreground">
                      Select a project from our DPR library that matches your interest and resources
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Download DPR</h3>
                    <p className="text-muted-foreground">
                      Get the detailed project report with financial projections and technical details
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Prepare Documents</h3>
                    <p className="text-muted-foreground">
                      Gather required documents: Aadhar, Land records, Bank statements, Income proof
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Submit Application</h3>
                    <p className="text-muted-foreground">
                      Apply through our partner banks or government portals with DPR and documents
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Get Approval</h3>
                    <p className="text-muted-foreground">
                      Track your application status and receive loan sanction
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <Button size="lg" className="w-full">
                  <Download className="mr-2 h-5 w-5" />
                  Download Loan Application Checklist
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

export default Banking;
