import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
          <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
            Let's Create Something
            <br />
            Extraordinary
          </h3>
          
          <div className="space-y-6 mb-12">
            <a 
              href="mailto:admin@tapanpartners.com" 
              className="flex items-center justify-center gap-3 text-xl hover:text-muted-foreground transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              admin@tapanpartners.com
            </a>
            
            <a 
              href="tel:+36702281815" 
              className="flex items-center justify-center gap-3 text-xl hover:text-muted-foreground transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              +36 70 228 18 15
            </a>
          </div>
          
          <Button asChild size="lg" className="px-12">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
