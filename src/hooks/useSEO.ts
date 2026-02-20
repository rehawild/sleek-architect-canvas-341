import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescription?.getAttribute("content") || "";

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", prevDescription);
      }
    };
  }, [title, description]);
};
