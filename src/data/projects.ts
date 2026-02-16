import bmwFactory1 from "@/assets/bmw-factory-1.jpg";
import bmwFactory2 from "@/assets/bmw-factory-2.jpg";
import bmwFactoryVideo1 from "@/assets/bmw-factory-video-1.mp4";
import cityPearl5 from "@/assets/city-pearl-5.jpg";
import cityPearl6 from "@/assets/city-pearl-6.jpg";
import cityPearl7 from "@/assets/city-pearl-7.jpg";
import cityPearl8 from "@/assets/city-pearl-8.jpg";
import cityPearl9 from "@/assets/city-pearl-9.jpg";
import cityPearl10 from "@/assets/city-pearl-10.jpg";
import cityPearl11 from "@/assets/city-pearl-11.jpg";
import cityPearl12 from "@/assets/city-pearl-12.jpg";
import cityPearl13 from "@/assets/city-pearl-13.jpg";
import cityPearl14 from "@/assets/city-pearl-14.jpg";
import cityPearl15 from "@/assets/city-pearl-15.jpg";
import cityPearl17 from "@/assets/city-pearl-17.jpg";
import cityPearl18 from "@/assets/city-pearl-18.jpg";
import cityPearl20 from "@/assets/city-pearl-20.jpg";
import cityPearl21 from "@/assets/city-pearl-21.jpg";
import cityPearl22 from "@/assets/city-pearl-22.jpg";
import cityPearlVideo1 from "@/assets/city-pearl-video-1.mp4";
import cityPearlVideo2 from "@/assets/city-pearl-video-2.mp4";
import familyHouse1 from "@/assets/family-house-1.jpg";
import familyHouse2 from "@/assets/family-house-2.jpg";
import familyHouse3 from "@/assets/family-house-3.jpg";
import familyHouseVideo1 from "@/assets/family-house-video-1.mp4";
import familyHouseVideo2 from "@/assets/family-house-video-2.mp4";
import szellKalmanRestaurant1 from "@/assets/szell-kalman-restaurant-1.jpg";
import szellKalmanRestaurant2 from "@/assets/szell-kalman-restaurant-2.jpg";

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  colorOn?: boolean;
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
  grayscale?: boolean;
  coverColorOn?: boolean;
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
    description:
      "A state-of-the-art electric vehicle manufacturing facility designed to meet the highest standards of sustainable industrial architecture. The project encompasses over 400,000 square meters of production space with integrated renewable energy systems.",
    services: ["Architectural Design", "Project Management", "Construction Supervision"],
    gallery: [
      { type: "image", src: bmwFactory1 },
      { type: "video", src: bmwFactoryVideo1 },
    ],
  },
  {
    id: "city-pearl",
    image: cityPearl17,
    title: "City Pearl Apartments",
    city: "Budapest",
    clients: ["CITY PEARL INTERNATIONAL Kft.", "APD"],
    category: "RESIDENTIAL",
    year: "2022-2024",
    description:
      "A premium residential complex in the heart of Budapest featuring modern architecture with elegant glass facades. The development includes multiple high-rise towers offering panoramic city views, landscaped courtyards, and world-class amenities.",
    services: ["Interior Design", "Architectural Design", "Landscape Design"],
    grayscale: true,
    coverColorOn: true,
    gallery: [
      { type: "image", src: cityPearl17, colorOn: true },
      { type: "image", src: cityPearl6 },
      { type: "image", src: cityPearl7 },
      { type: "image", src: cityPearl8, colorOn: true },
      { type: "image", src: cityPearl9 },
      { type: "image", src: cityPearl10 },
      { type: "image", src: cityPearl12 },
      { type: "image", src: cityPearl13 },
      { type: "image", src: cityPearl14 },
      { type: "image", src: cityPearl15 },
      { type: "image", src: cityPearl18 },
      { type: "image", src: cityPearl22 },
      { type: "image", src: cityPearl20 },
      { type: "image", src: cityPearl21 },
      { type: "video", src: cityPearlVideo1 },
      { type: "video", src: cityPearlVideo2 },
    ],
  },
  {
    id: "family-house-kaposvar",
    image: familyHouse1,
    title: "Family House",
    city: "Sopron",
    clients: ["Private Client"],
    category: "RESIDENTIAL",
    year: "2024",
    description:
      "A contemporary single-story family residence featuring traditional Hungarian roof tiles with a modern architectural approach. The home offers open-plan living spaces with large windows maximizing natural light and views of the surrounding neighborhood.",
    services: ["Architectural Design", "Construction Supervision", "Interior Design"],
    gallery: [
      { type: "video", src: familyHouseVideo2 },
      { type: "image", src: familyHouse1 },
      { type: "image", src: familyHouse2 },
      { type: "image", src: familyHouse3 },
      { type: "video", src: familyHouseVideo1 },
    ],
  },
  {
    id: "szell-kalman-restaurant",
    image: szellKalmanRestaurant1,
    title: "Restaurant at Széll Kálmán Tér",
    city: "Budapest",
    clients: ["Private Client"],
    category: "COMMERCIAL",
    year: "2025-2026",
    description:
      "A contemporary restaurant space located at the iconic Széll Kálmán Tér in Budapest. Currently in rough construction phase, featuring exposed steel beam structure and industrial architectural elements that will define the venue's distinctive character.",
    services: ["Interior Design", "Construction Supervision"],
    gallery: [
      { type: "image", src: szellKalmanRestaurant1 },
      { type: "image", src: szellKalmanRestaurant2 },
    ],
  },
];
