import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/work", label: "WORK" },
    { href: "/services", label: "SERVICES" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleMobileClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-minimal text-foreground hover:text-foreground/80 transition-colors duration-300">
          T&P
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-minimal transition-colors duration-300 relative group ${
                isActive(link.href) 
                  ? "text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              <span 
                className={`absolute -bottom-1 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} 
              />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={handleMobileClick}
              className={`block text-minimal transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="pt-4 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;