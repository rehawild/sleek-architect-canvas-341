 import { Routes, Route, useLocation } from "react-router-dom";
 import { AnimatePresence } from "framer-motion";
 import PageTransition from "./PageTransition";
 import Index from "@/pages/Index";
 import Work from "@/pages/Work";
 import Services from "@/pages/Services";
 import About from "@/pages/About";
 import Contact from "@/pages/Contact";
 import Blog from "@/pages/Blog";
 import BlogPost from "@/pages/BlogPost";
 import NotFound from "@/pages/NotFound";
 import ArchitecturalDesign from "@/pages/services/ArchitecturalDesign";
 import InteriorDesign from "@/pages/services/InteriorDesign";
 import Renovation from "@/pages/services/Renovation";
 import Construction from "@/pages/services/Construction";
 import Consultation from "@/pages/services/Consultation";
 import FurnitureDesign from "@/pages/services/FurnitureDesign";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/work"
          element={
            <PageTransition>
              <Work />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          }
        />
        <Route
          path="/services/architectural-design"
          element={
            <PageTransition>
              <ArchitecturalDesign />
            </PageTransition>
          }
        />
        <Route
          path="/services/interior-design"
          element={
            <PageTransition>
              <InteriorDesign />
            </PageTransition>
          }
        />
        <Route
          path="/services/renovation"
          element={
            <PageTransition>
              <Renovation />
            </PageTransition>
          }
        />
        <Route
          path="/services/construction"
          element={
            <PageTransition>
              <Construction />
            </PageTransition>
          }
        />
        <Route
          path="/services/consultation"
          element={
            <PageTransition>
              <Consultation />
            </PageTransition>
          }
        />
        <Route
          path="/services/furniture-design"
          element={
            <PageTransition>
              <FurnitureDesign />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <PageTransition>
              <BlogPost />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
