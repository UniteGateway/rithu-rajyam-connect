import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Banking", path: "/banking" },
    { label: "Community", path: "/community" },
    { label: "CSR & Training", path: "/csr" },
    { label: "Contact", path: "/contact" },
  ];

  const resources = [
    { label: "Download All DPRs", path: "/projects#downloads" },
    { label: "Government Schemes", path: "/schemes" },
    { label: "Market Prices", path: "/market" },
    { label: "Weather Updates", path: "/weather" },
    { label: "Training Calendar", path: "/csr#training" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Youtube, url: "#", label: "YouTube" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Rythu Rajyam" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-lg">RYTHU RAJYAM</h3>
                <p className="text-xs opacity-90">Jai Kisan</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              A non-profit initiative by Rithu Rajyam Trust to unite and empower farmers through AI, finance, and sustainable technology.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">info@rythurajyam.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="bg-primary-foreground/10 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">WhatsApp Community</h5>
              <p className="text-xs opacity-90 mb-3">Join 10,000+ farmers</p>
              <a
                href="#"
                className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-center md:text-left">
              <p className="opacity-90">
                © 2025 Rythu Rajyam Trust. All rights reserved.
              </p>
              <p className="text-xs opacity-75 mt-1">
                Powered by <strong>UNITE DEVELOPERS GLOBAL INC.</strong>
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/privacy" className="opacity-90 hover:opacity-100 hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="opacity-90 hover:opacity-100 hover:underline">
                Terms of Service
              </Link>
              <Link to="/donate" className="opacity-90 hover:opacity-100 hover:underline">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
