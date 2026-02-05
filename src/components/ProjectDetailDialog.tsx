import { useState, useEffect, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import type { Project } from "@/data/projects";
const MOBILE_DOT_THRESHOLD = 4;
const DESKTOP_GRADIENT_THRESHOLD = 5;
const THUMBNAIL_SIZE = 40; // w-10 = 2.5rem = 40px
const THUMBNAIL_GAP = 6; // gap-1.5 = 0.375rem = 6px

interface ProjectDetailDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const ProjectDetailDialog = ({
  project,
  open,
  onOpenChange
}: ProjectDetailDialogProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const galleryLength = project?.gallery.length ?? 0;
  const showDots = isMobile && galleryLength > MOBILE_DOT_THRESHOLD;
  const showGradients = !isMobile && galleryLength > DESKTOP_GRADIENT_THRESHOLD;

  // Reset index when project changes or dialog opens
  useEffect(() => {
    if (open) {
      setCurrentImageIndex(0);
    }
  }, [project?.id, open]);

  // Center the selected thumbnail
  useEffect(() => {
    if (thumbnailContainerRef.current && project && !showDots) {
      // Small delay to ensure container is rendered and measured
      const timeoutId = setTimeout(() => {
        const container = thumbnailContainerRef.current;
        if (!container) return;
        const itemWidth = THUMBNAIL_SIZE + THUMBNAIL_GAP;
        const containerWidth = container.clientWidth;
        const scrollPosition = currentImageIndex * itemWidth - containerWidth / 2 + THUMBNAIL_SIZE / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [currentImageIndex, project, showDots, open]);
  const nextImage = useCallback(() => {
    setCurrentImageIndex(prev => prev === galleryLength - 1 ? 0 : prev + 1);
  }, [galleryLength]);
  const prevImage = useCallback(() => {
    setCurrentImageIndex(prev => prev === 0 ? galleryLength - 1 : prev - 1);
  }, [galleryLength]);
  if (!project) return null;
  const currentItem = project.gallery[currentImageIndex];
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        
        {/* Gallery Section */}
        <div className="relative aspect-[16/9] w-full bg-muted flex items-center justify-center">
          {currentItem?.type === "video" ? <video src={currentItem.src} className="max-w-full max-h-full object-contain" controls autoPlay muted /> : currentItem ? <img src={currentItem.src} alt={`${project.title} - Image ${currentImageIndex + 1}`} className="max-w-full max-h-full object-contain" /> : null}
          
          {project.gallery.length > 1 && <>
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors" aria-label="Previous image">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors" aria-label="Next image">
                <ChevronRight className="w-6 h-6" />
              </button>
            </>}
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2">
            <span className="text-minimal text-foreground">{project.category}</span>
          </div>
        </div>
        
        {/* Gallery Indicators - Separate element below gallery */}
        {project.gallery.length > 1 && <div className="flex justify-center bg-muted/30 border-y border-border/50 py-[4px]">
            {showDots ? (/* Mobile dot indicators */
        <div className="flex gap-2 px-4 py-2">
                {project.gallery.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentImageIndex ? "bg-foreground scale-125" : "bg-foreground/30 hover:bg-foreground/50"}`} aria-label={`Go to item ${index + 1}`} />)}
              </div>) : (/* Desktop thumbnails with gradient fade */
        <div ref={thumbnailContainerRef} className="flex gap-1.5 px-3 py-2 bg-muted/50 backdrop-blur-md rounded-lg overflow-x-auto scrollbar-none max-w-[280px]" style={showGradients ? {
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        } : undefined}>
                {project.gallery.map((item, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`relative flex-shrink-0 w-10 h-10 overflow-hidden rounded-sm transition-all duration-200 ${index === currentImageIndex ? "ring-2 ring-primary scale-110" : "opacity-70 hover:opacity-100 hover:scale-105"}`} aria-label={`Go to ${item.type === "video" ? "video" : "image"} ${index + 1}`}>
                    {item.type === "video" ? <>
                        <video src={item.src} className="w-full h-full object-cover" muted />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Play className="w-3 h-3 text-white fill-white" />
                        </div>
                      </> : <img src={item.src} alt={`${project.title} thumbnail ${index + 1}`} className="w-full h-full object-cover" />}
                  </button>)}
              </div>)}
          </div>}
        
        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-architectural mb-2">
                {project.title}
              </h2>
              <p className="text-xl text-muted-foreground">{project.city}</p>
            </div>
            <div className="text-right">
              <span className="text-minimal text-muted-foreground">YEAR</span>
              <p className="text-xl font-light text-architectural">{project.year}</p>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-border">
            <div>
              <h3 className="text-minimal text-muted-foreground mb-4">CLIENTS</h3>
              <ul className="space-y-2">
                {project.clients.map((client, index) => <li key={index} className="text-foreground">{client}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-minimal text-muted-foreground mb-4">SERVICES</h3>
              <ul className="space-y-2">
                {project.services.map((service, index) => <li key={index} className="text-foreground">{service}</li>)}
              </ul>
            </div>
          </div>
          
        </div>
      </DialogContent>
    </Dialog>;
};
export default ProjectDetailDialog;