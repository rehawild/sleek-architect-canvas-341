import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import cityPearl1 from "@/assets/city-pearl-1.jpg";
import cityPearl2 from "@/assets/city-pearl-2.jpg";
import cityPearl3 from "@/assets/city-pearl-3.jpg";

export interface Project {
  id: string;
  image: string;
  title: string;
  city: string;
  clients: string[];
  category: string;
  year: string;
  description: string;
  services: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "bmw-factory",
    image: project1,
    title: "BMW Electric Car Factory",
    city: "Debrecen",
    clients: ["BMW Manufacturing Hungary Kft.", "Kagel LTD."],
    category: "INDUSTRIAL",
    year: "2023",
    description: "A state-of-the-art electric vehicle manufacturing facility designed to meet the highest standards of sustainable industrial architecture. The project encompasses over 400,000 square meters of production space with integrated renewable energy systems.",
    services: ["Architectural Design", "Project Management", "Construction Supervision"],
    gallery: [project1]
  },
  {
    id: "city-pearl",
    image: project2,
    title: "City Pearl Apartments",
    city: "Budapest",
    clients: ["CITY PEARL INTERNATIONAL Kft.", "APD"],
    category: "RESIDENTIAL",
    year: "2022-2024",
    description: "A premium residential complex in the heart of Budapest featuring modern architecture with elegant glass facades. The development includes multiple high-rise towers offering panoramic city views, landscaped courtyards, and world-class amenities.",
    services: ["Interior Design", "Architectural Design", "Landscape Design"],
    gallery: [project2, cityPearl1, cityPearl2, cityPearl3]
  }
];
