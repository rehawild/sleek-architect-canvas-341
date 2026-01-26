import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex flex-1 items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-8xl font-light text-architectural">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Page not found</p>
          <Link to="/" className="text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group">
            RETURN HOME
            <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
