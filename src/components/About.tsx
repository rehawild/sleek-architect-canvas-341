import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
          <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
            Design Philosophy
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            We believe architecture should enhance human experience while respecting 
            the natural environment. Our practice focuses on creating spaces that 
            are both functional and poetic.
          </p>
          
          <Button asChild size="lg" className="px-12">
            <Link to="/about">Meet Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
