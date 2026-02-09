import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link to="/" className="text-2xl font-light text-architectural mb-4 block">
                T&P
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">Architecture & More</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-minimal text-muted-foreground mb-4">NAVIGATE</h4>
              <nav className="space-y-3">
                <Link
                  to="/work"
                  className="block text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  Work
                </Link>
                <Link
                  to="/services"
                  className="block text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="block text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-minimal text-muted-foreground mb-4">CONTACT</h4>
              <div className="space-y-3">
                <a
                  href="mailto:admin@tapanpartners.com"
                  className="block text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  admin@tapanpartners.com
                </a>
                <a
                  href="tel:+36702281815"
                  className="block text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  +36 70 228 18 15
                </a>
                <address className="not-italic text-muted-foreground">
                  1056, Irányi u. 18
                  <br />
                  Budapest, HU
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-minimal text-muted-foreground mb-4">FOLLOW</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/tapanandpartners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/tapan-and-partners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Tapan & Partners. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Budapest, Hungary</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
