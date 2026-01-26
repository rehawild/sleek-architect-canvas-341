import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ArchitecturalDesign from "./pages/services/ArchitecturalDesign";
import InteriorDesign from "./pages/services/InteriorDesign";
import Renovation from "./pages/services/Renovation";
import Construction from "./pages/services/Construction";
import Consultation from "./pages/services/Consultation";
import FurnitureDesign from "./pages/services/FurnitureDesign";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/architectural-design" element={<ArchitecturalDesign />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/consultation" element={<Consultation />} />
          <Route path="/services/furniture-design" element={<FurnitureDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
