import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Projects & DPR",
      path: "/projects",
      submenu: [
        { label: "All Projects", path: "/projects" },
        { label: "Bio-CNG Plant", path: "/projects#bio-cng" },
        { label: "Solar Farm", path: "/projects#solar" },
        { label: "Cold Storage", path: "/projects#cold-storage" },
        { label: "Download DPRs", path: "/projects#downloads" },
      ],
    },
    {
      label: "Banking & Finance",
      path: "/banking",
      submenu: [
        { label: "MSME Schemes", path: "/banking#msme" },
        { label: "Loan Programs", path: "/banking#loans" },
        { label: "Banking Partners", path: "/banking#partners" },
      ],
    },
    {
      label: "Community",
      path: "/community",
      submenu: [
        { label: "Farmer Forum", path: "/community#forum" },
        { label: "Barter Exchange", path: "/community#barter" },
        { label: "FPO Network", path: "/community#fpo" },
      ],
    },
    { label: "CSR & Training", path: "/csr" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Rythu Rajyam Logo" className="h-16 w-16" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">RYTHU RAJYAM</h1>
              <p className="text-xs text-muted-foreground">Digital Farmer Network</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.path}>
                  <Button variant="ghost" className="flex items-center gap-1">
                    {item.label}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </Button>
                </Link>

                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 hover:bg-muted transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" size="sm" className="ml-4" asChild>
              <Link to="/register-farmer">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block py-2 px-4 hover:bg-muted rounded-md"
                  onClick={() => !item.submenu && setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block py-2 px-4 text-sm text-muted-foreground hover:bg-muted rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" className="w-full mt-4" asChild>
              <Link to="/register-farmer">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
