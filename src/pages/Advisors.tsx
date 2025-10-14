import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Calendar, Mic, Clock } from "lucide-react";
import { toast } from "sonner";

const Advisors = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleAICall = () => {
    if (!selectedLanguage) {
      toast.error("Please select a language first");
      return;
    }
    toast.success(`Connecting you to AI Advisor in ${selectedLanguage}...`, {
      description: "Voice call will be initiated in a moment"
    });
  };

  const handleHumanCallback = () => {
    toast.success("Callback request submitted!", {
      description: "Our advisor will contact you within 2 hours"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[400px] bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80)'}}>
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-primary-foreground max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Talk to Rythu Rajyam Advisors</h1>
              <p className="text-xl md:text-2xl">Get instant guidance in your language—AI-powered voice support or speak with human experts</p>
            </div>
          </div>
        </section>

        {/* AI Voice Advisory */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                    <Mic className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">AI Voice Advisor</h2>
                    <p className="text-muted-foreground">Available 24/7 in multiple languages</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <h3 className="font-bold mb-3">What can I ask?</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Today's weather and crop advisory</li>
                    <li>• Market prices for your produce</li>
                    <li>• Government schemes and subsidies</li>
                    <li>• Download DPRs for sustainable projects</li>
                    <li>• MSME loan guidance</li>
                    <li>• Cold storage booking</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Your Language</label>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose language..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="telugu">Telugu (తెలుగు)</SelectItem>
                        <SelectItem value="hindi">Hindi (हिंदी)</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="tamil">Tamil (தமிழ்)</SelectItem>
                        <SelectItem value="kannada">Kannada (ಕನ್ನಡ)</SelectItem>
                        <SelectItem value="marathi">Marathi (मराठी)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full" 
                    onClick={handleAICall}
                    disabled={!selectedLanguage}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call AI Advisor Now
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    Standard call rates apply. Voice recognition powered by advanced AI.
                  </p>
                </div>
              </Card>

              {/* Human Advisor Callback */}
              <Card className="p-8 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Request Human Callback</h2>
                    <p className="text-muted-foreground">Speak with our expert advisors</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Working Hours</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 6 PM</p>
                    <p className="text-sm text-muted-foreground">Sun: 10 AM - 2 PM</p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Response Time</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Within 2 hours during working hours</p>
                  </div>
                </div>

                <Button size="lg" variant="secondary" className="w-full" onClick={handleHumanCallback}>
                  Request Callback
                </Button>
              </Card>

              {/* WhatsApp Support */}
              <Card className="p-8 bg-green-50 border-green-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-600 text-white p-4 rounded-lg">
                    <MessageCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">WhatsApp Support</h2>
                    <p className="text-muted-foreground">Chat with advisors instantly</p>
                  </div>
                </div>

                <p className="mb-4 text-muted-foreground">
                  Prefer texting? Send us a message on WhatsApp and our team will respond with guidance, resources, and support.
                </p>

                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration Note */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 bg-muted/30">
                <h3 className="font-bold text-lg mb-3">Technical Implementation Notes</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Voice API Integration:</strong> Twilio Programmable Voice + Speech Recognition OR Google Dialogflow CX</p>
                  <p><strong>TTS/STT:</strong> Google Text-to-Speech & Speech-to-Text OR Amazon Polly</p>
                  <p><strong>Call Flow:</strong> User → API endpoint /api/call-ai → Voice provider connects via WebRTC or PSTN</p>
                  <p><strong>Transcript:</strong> Conversation transcript sent to user email/WhatsApp after call ends</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Advisors;
