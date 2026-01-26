import { Link } from "react-router-dom";
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
          
          <Button asChild size="lg" className="px-12">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
