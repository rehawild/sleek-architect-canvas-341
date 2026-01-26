import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Create Something
                  <br />
                  Extraordinary
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a href="mailto:admin@tapanpartners.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      admin@tapanpartners.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <a href="tel:+36702281815" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      +36 70 228 18 15
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">DESIGN OFFICE & SHOWROOM</h3>
                    <address className="text-xl not-italic">
                      1056, Irányi u. 18
                      <br />
                      Budapest, HU
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">HOURS</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-lg">
                      <span>Monday – Friday</span>
                      <span>Open</span>
                    </div>
                    <div className="flex justify-between text-lg text-muted-foreground">
                      <span>Saturday – Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <h3 className="text-minimal text-muted-foreground mb-6">FOLLOW US</h3>
                  <div className="space-y-4">
                    <a href="https://www.instagram.com/tapanandpartners" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/company/tapan-and-partners" target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-20">
              <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.0!2d19.0505!3d47.4905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc402a5b6b0d%3A0x0!2sIr%C3%A1nyi%20u.%2018%2C%20Budapest%2C%201056%20Hungary!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tapan & Partners Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;