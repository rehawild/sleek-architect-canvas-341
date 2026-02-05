import bmwFactory1 from "@/assets/bmw-factory-1.jpg";
import bmwFactory2 from "@/assets/bmw-factory-2.jpg";
import cityPearl1 from "@/assets/city-pearl-1.jpg";
import cityPearl2 from "@/assets/city-pearl-2.jpg";
import cityPearl3 from "@/assets/city-pearl-3.jpg";
import cityPearl4 from "@/assets/city-pearl-4.jpg";
import cityPearl5 from "@/assets/city-pearl-5.jpg";
import familyHouse1 from "@/assets/family-house-1.jpg";
import familyHouse2 from "@/assets/family-house-2.jpg";
import familyHouse3 from "@/assets/family-house-3.jpg";
import familyHouseVideo1 from "@/assets/family-house-video-1.mp4";
import familyHouseVideo2 from "@/assets/family-house-video-2.mp4";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
}

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
  gallery: GalleryItem[];
}

export const projects: Project[] = [
  {
    id: "bmw-factory",
    image: bmwFactory1,
    title: "BMW Electric Car Factory",
    city: "Debrecen",
    clients: ["BMW Manufacturing Hungary Kft.", "Kagel LTD."],
    category: "INDUSTRIAL",
    year: "2023",
    description: "A state-of-the-art electric vehicle manufacturing facility designed to meet the highest standards of sustainable industrial architecture. The project encompasses over 400,000 square meters of production space with integrated renewable energy systems.",
    services: ["Architectural Design", "Project Management", "Construction Supervision"],
    gallery: [
      { type: "image", src: bmwFactory1 },
      { type: "image", src: bmwFactory2 }
    ]
  },
  {
    id: "city-pearl",
    image: cityPearl1,
    title: "City Pearl Apartments",
    city: "Budapest",
    clients: ["CITY PEARL INTERNATIONAL Kft.", "APD"],
    category: "RESIDENTIAL",
    year: "2022-2024",
    description: "A premium residential complex in the heart of Budapest featuring modern architecture with elegant glass facades. The development includes multiple high-rise towers offering panoramic city views, landscaped courtyards, and world-class amenities.",
    services: ["Interior Design", "Architectural Design", "Landscape Design"],
    gallery: [
      { type: "image", src: cityPearl1 },
      { type: "image", src: cityPearl2 },
      { type: "image", src: cityPearl3 },
      { type: "image", src: cityPearl4 },
      { type: "image", src: cityPearl5 }
    ]
  },
  {
    id: "family-house-kaposvar",
    image: familyHouse1,
    title: "Family House",
    city: "Kaposvár",
    clients: ["Private Client"],
    category: "RESIDENTIAL",
    year: "2024",
    description: "A contemporary single-story family residence featuring traditional Hungarian roof tiles with a modern architectural approach. The home offers open-plan living spaces with large windows maximizing natural light and views of the surrounding neighborhood.",
    services: ["Architectural Design", "Construction Supervision", "Interior Design"],
    gallery: [
      { type: "image", src: familyHouse1 },
      { type: "image", src: familyHouse2 },
      { type: "image", src: familyHouse3 },
      { type: "video", src: familyHouseVideo1 },
      { type: "video", src: familyHouseVideo2 }
    ]
  }
];
