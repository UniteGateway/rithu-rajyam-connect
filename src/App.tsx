import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Banking from "./pages/Banking";
import Community from "./pages/Community";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";
import Advisors from "./pages/Advisors";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import RegisterFarmer from "./pages/RegisterFarmer";
import ThankYou from "./pages/ThankYou";
import FarmerDashboard from "./pages/dashboard/Farmer";
import BuyerDashboard from "./pages/dashboard/Buyer";
import ImporterDashboard from "./pages/dashboard/Importer";
import BioCNG from "./pages/services/BioCNG";
import SolarFarms from "./pages/services/SolarFarms";
import ColdStorage from "./pages/services/ColdStorage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/bio-cng" element={<BioCNG />} />
          <Route path="/services/solar-farms" element={<SolarFarms />} />
          <Route path="/services/cold-storage" element={<ColdStorage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/finance" element={<Banking />} />
          <Route path="/community" element={<Community />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/advisors" element={<Advisors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register-farmer" element={<RegisterFarmer />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
          <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
          <Route path="/dashboard/importer" element={<ImporterDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
