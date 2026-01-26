import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="pt-32 pb-32 bg-background flex-1">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">ABOUT</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Design Philosophy
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe architecture should enhance human experience while respecting 
                    the natural environment. Our practice focuses on creating spaces that 
                    are both functional and poetic.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded in 2024, our studio has completed over 20 projects across 
                    residential, commercial, and cultural sectors. Each project begins 
                    with careful listening and ends with thoughtful execution.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">APPROACH</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Research</h4>
                      <p className="text-muted-foreground">Deep understanding of context, culture, and climate</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Collaboration</h4>
                      <p className="text-muted-foreground">Close partnership with clients, engineers, and craftspeople</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Innovation</h4>
                      <p className="text-muted-foreground">Sustainable materials and forward-thinking design solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">FOUNDED</h3>
                      <p className="text-xl">2024</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">PROJECTS</h3>
                      <p className="text-xl">20+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Our Team Section */}
            <div className="mt-32">
              <h2 className="text-minimal text-muted-foreground mb-8">OUR TEAM</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="group">
                  <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-6xl font-light text-muted-foreground/40">MT</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-architectural mb-2">Mertkan Tapan</h3>
                  <p className="text-muted-foreground">Founder, MSc. Architect</p>
                </div>
                
                <div className="group">
                  <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-6xl font-light text-muted-foreground/40">MAT</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-architectural mb-2">Meltem Akman Tapan</h3>
                  <p className="text-muted-foreground">Co-Founder, MSc. Architect</p>
                </div>
                
                <div className="group">
                  <div className="aspect-[3/4] bg-muted mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-6xl font-light text-muted-foreground/40">AH</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light text-architectural mb-2">Alexa Harkai</h3>
                  <p className="text-muted-foreground">Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;