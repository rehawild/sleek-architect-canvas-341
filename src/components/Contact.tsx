const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Let's Create Something
                <br />
                Extraordinary
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:admin@tapanpartners.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    admin@tapanpartners.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                  <a href="tel:+36702281815" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    +36 70 228 18 15
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">DESIGN OFFICE & SHOWROOM</h4>
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
                <h4 className="text-minimal text-muted-foreground mb-6">HOURS</h4>
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
                <h4 className="text-minimal text-muted-foreground mb-6">FOLLOW US</h4>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;