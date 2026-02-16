import bmwFactory1 from "@/assets/bmw-factory-1.jpg";
import bmwFactory2 from "@/assets/bmw-factory-2.jpg";
import bmwFactory3 from "@/assets/bmw-factory-3.jpg";
import bmwFactory4 from "@/assets/bmw-factory-4.jpg";
import bmwFactory5 from "@/assets/bmw-factory-5.jpg";
import bmwFactory6 from "@/assets/bmw-factory-6.jpg";
import bmwFactory7 from "@/assets/bmw-factory-7.jpg";
import bmwFactoryVideo1 from "@/assets/bmw-factory-video-1.mp4";
import cityPearl1 from "@/assets/city-pearl-1.jpg";
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
import familyHouse4 from "@/assets/family-house-4.jpg";
import familyHouse5 from "@/assets/family-house-5.jpg";
import familyHouse6 from "@/assets/family-house-6.jpg";
import familyHouse7 from "@/assets/family-house-7.jpg";
import familyHouseVideo1 from "@/assets/family-house-video-1.mp4";
import familyHouseVideo2 from "@/assets/family-house-video-2.mp4";
import familyHouseVideo3 from "@/assets/family-house-video-3.mp4";
import familyHouseVideo4 from "@/assets/family-house-video-4.mp4";
import szellKalmanRestaurant1 from "@/assets/szell-kalman-restaurant-1.jpg";
import szellKalmanRestaurant2 from "@/assets/szell-kalman-restaurant-2.jpg";
import szellKalmanRestaurant3 from "@/assets/szell-kalman-restaurant-3.jpg";
import szellKalmanRestaurant4 from "@/assets/szell-kalman-restaurant-4.jpg";
import szellKalmanRestaurantVideo1 from "@/assets/szell-kalman-restaurant-video-1.mp4";
import szellKalmanRestaurant5 from "@/assets/szell-kalman-restaurant-5.jpg";
import szellKalmanRestaurant6 from "@/assets/szell-kalman-restaurant-6.jpg";
import cinemaMammut1 from "@/assets/cinema-mammut-1.jpg";
import cinemaMammut2 from "@/assets/cinema-mammut-2.jpg";
import cinemaMammut3 from "@/assets/cinema-mammut-3.jpg";
import cinemaMammut4 from "@/assets/cinema-mammut-4.jpg";
import cinemaMammut5 from "@/assets/cinema-mammut-5.jpg";
import cinemaMammut6 from "@/assets/cinema-mammut-6.jpg";
import cinemaMammut7 from "@/assets/cinema-mammut-7.jpg";
import cinemaMammut8 from "@/assets/cinema-mammut-8.jpg";
import cinemaMammut9 from "@/assets/cinema-mammut-9.jpg";
import klotildPalace1 from "@/assets/klotild-palace-1.jpg";
import klotildPalace2 from "@/assets/klotild-palace-2.jpg";
import klotildPalace3 from "@/assets/klotild-palace-3.jpg";
import klotildPalace4 from "@/assets/klotild-palace-4.jpg";
import klotildPalace5 from "@/assets/klotild-palace-5.jpg";
import klotildPalace6 from "@/assets/klotild-palace-6.jpg";
import klotildPalace7 from "@/assets/klotild-palace-7.jpg";
import klotildPalace8 from "@/assets/klotild-palace-8.jpg";
import skanska1 from "@/assets/skanska-1.jpg";
import skanska2 from "@/assets/skanska-2.jpg";
import skanska3 from "@/assets/skanska-3.jpg";
import skanska4 from "@/assets/skanska-4.jpg";
import skanska5 from "@/assets/skanska-5.jpg";
import skanska6 from "@/assets/skanska-6.jpg";
import skanska7 from "@/assets/skanska-7.jpg";
import skanska8 from "@/assets/skanska-8.jpg";
import skanska9 from "@/assets/skanska-9.jpg";
import skanska10 from "@/assets/skanska-10.jpg";
import skanska11 from "@/assets/skanska-11.jpg";
import skanska12 from "@/assets/skanska-12.jpg";
import skanska13 from "@/assets/skanska-13.jpg";
import skanska14 from "@/assets/skanska-14.jpg";
import takenaka1 from "@/assets/takenaka-1.jpg";
import takenaka2 from "@/assets/takenaka-2.jpg";
import tinyHouse1 from "@/assets/tiny-house-1.jpg";
import tinyHouse2 from "@/assets/tiny-house-2.jpg";
import tinyHouse3 from "@/assets/tiny-house-3.jpg";
import tinyHouse4 from "@/assets/tiny-house-4.jpg";
import tinyHouse5 from "@/assets/tiny-house-5.jpg";
import tinyHouse6 from "@/assets/tiny-house-6.png";

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
      { type: "image", src: bmwFactory2 },
      { type: "image", src: bmwFactory3 },
      { type: "image", src: bmwFactory4 },
      { type: "image", src: bmwFactory5 },
      { type: "image", src: bmwFactory6 },
      { type: "image", src: bmwFactory7 },
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
      { type: "video", src: cityPearlVideo2 },
      { type: "image", src: cityPearl13 },
      { type: "image", src: cityPearl6 },
      { type: "image", src: cityPearl7 },
      { type: "image", src: cityPearl8, colorOn: true },
      { type: "image", src: cityPearl22 },
      { type: "image", src: cityPearl20 },
      { type: "image", src: cityPearl21 },
      { type: "image", src: cityPearl9 },
      { type: "image", src: cityPearl10 },
      { type: "image", src: cityPearl12 },
      { type: "image", src: cityPearl14 },
      { type: "image", src: cityPearl15 },
      { type: "image", src: cityPearl1 },
      { type: "image", src: cityPearl18 },
      { type: "video", src: cityPearlVideo1 },
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
      { type: "image", src: familyHouse4 },
      { type: "image", src: familyHouse5 },
      { type: "video", src: familyHouseVideo3 },
      { type: "video", src: familyHouseVideo4 },
      { type: "image", src: familyHouse6 },
      { type: "image", src: familyHouse7 },
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
      { type: "image", src: szellKalmanRestaurant3 },
      { type: "image", src: szellKalmanRestaurant4 },
      { type: "video", src: szellKalmanRestaurantVideo1 },
      { type: "image", src: szellKalmanRestaurant5 },
      { type: "image", src: szellKalmanRestaurant6 },
    ],
  },
  {
    id: "cinema-mammut",
    image: cinemaMammut1,
    title: "Cinema Project",
    city: "Budapest",
    clients: ["Mammut Mall"],
    category: "INTERIOR DESIGN",
    year: "2018",
    description:
      "A luxurious cinema interior design project at Mammut Mall, Budapest. The design features premium lounge seating, dramatic lighting, and bespoke architectural details creating an immersive entertainment experience with carefully curated materials and finishes.",
    services: ["Interior Design", "Architectural Design"],
    gallery: [
      { type: "image", src: cinemaMammut1 },
      { type: "image", src: cinemaMammut9 },
      { type: "image", src: cinemaMammut6 },
      { type: "image", src: cinemaMammut8 },
      { type: "image", src: cinemaMammut7 },
      { type: "image", src: cinemaMammut2 },
      { type: "image", src: cinemaMammut4 },
      { type: "image", src: cinemaMammut3 },
      { type: "image", src: cinemaMammut5 },
    ],
  },
  {
    id: "klotild-palace",
    image: klotildPalace1,
    title: "Klotild Palace Hotel",
    city: "Budapest",
    clients: ["Confidential"],
    category: "ARCHITECTURE",
    year: "2023",
    description:
      "A prestigious architectural restoration and redesign of the historic Klotild Palace in Budapest, transforming the iconic neo-baroque landmark into a luxury St. Regis hotel. The project involved meticulous facade restoration, detailed floor planning, and bespoke architectural elements including cast bronze profiles and laminated glass features.",
    services: ["Architectural Design", "Heritage Restoration", "Detail Design"],
    gallery: [
      { type: "image", src: klotildPalace1 },
      { type: "image", src: klotildPalace2 },
      { type: "image", src: klotildPalace3 },
      { type: "image", src: klotildPalace4 },
      { type: "image", src: klotildPalace5 },
      { type: "image", src: klotildPalace6 },
      { type: "image", src: klotildPalace7 },
      { type: "image", src: klotildPalace8 },
    ],
  },
  {
    id: "skanska-hold-utca",
    image: skanska1,
    title: "Skanska Commercial Building",
    city: "Budapest",
    clients: ["Skanska"],
    category: "ARCHITECTURE",
    year: "2023",
    description:
      "A modern commercial office building on Hold Utca in Budapest, blending contemporary glass facade design with the historic urban fabric. The project features a multi-level structure with underground parking, landscaped courtyard, and flexible office spaces designed to BREEAM sustainability standards.",
    services: ["Architectural Design", "Project Management"],
    gallery: [
      { type: "image", src: skanska1 },
      { type: "image", src: skanska2 },
      { type: "image", src: skanska3 },
      { type: "image", src: skanska4 },
      { type: "image", src: skanska5 },
      { type: "image", src: skanska6 },
      { type: "image", src: skanska7 },
      { type: "image", src: skanska8 },
      { type: "image", src: skanska9 },
      { type: "image", src: skanska10 },
      { type: "image", src: skanska11 },
      { type: "image", src: skanska12 },
      { type: "image", src: skanska13 },
      { type: "image", src: skanska14 },
    ],
  },
  {
    id: "takenaka-warehouse",
    image: takenaka2,
    title: "Takenaka Warehouse",
    city: "Budapest",
    clients: ["Takenaka"],
    category: "ARCHITECTURE",
    year: "2022",
    description:
      "A large-scale industrial warehouse complex designed for Takenaka, featuring expansive storage and logistics facilities with modern structural engineering. The project includes multiple warehouse buildings, office spaces, and integrated parking infrastructure.",
    services: ["Architectural Design", "Construction Supervision"],
    gallery: [
      { type: "image", src: takenaka1 },
      { type: "image", src: takenaka2 },
    ],
  },
  {
    id: "tiny-house",
    image: tinyHouse1,
    title: "Tiny House",
    city: "Custom Location",
    clients: ["Private Clients"],
    category: "ARCHITECTURE",
    year: "On Demand",
    description:
      "A collection of bespoke tiny house designs crafted to each client's individual desires. These compact, modern dwellings feature minimalist Scandinavian-inspired architecture with dark timber cladding, expansive glazing, and natural wood accents — designed to blend seamlessly into any natural setting.",
    services: ["Architectural Design", "Custom Design"],
    gallery: [
      { type: "image", src: tinyHouse1 },
      { type: "image", src: tinyHouse2 },
      { type: "image", src: tinyHouse3 },
      { type: "image", src: tinyHouse4 },
      { type: "image", src: tinyHouse5 },
      { type: "image", src: tinyHouse6 },
    ],
  },
];
