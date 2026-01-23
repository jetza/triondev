import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lux-hotel",
    title: "Lux Hotel & Spa",
    description:
      "Moderna booking platforma za boutique hotel sa integracijom rezervacionog sistema",
    type: "web",
    images: [
      "/assets/images/projects/hotel-1.jpg",
      "/assets/images/projects/hotel-2.jpg",
      "/assets/images/projects/hotel-3.jpg",
    ],
    clientQuote:
      "Broj rezervacija nam je porastao za 60% nakon lansiranja novog sajta.",
    clientName: "Marko Petrović, Vlasnik",
    url: "#",
  },
  {
    id: "tech-startup",
    title: "TechFlow SaaS",
    description:
      "B2B platforma za upravljanje projektima sa real-time kolaboracijom",
    type: "app",
    images: [
      "/assets/images/projects/saas-1.jpg",
      "/assets/images/projects/saas-2.jpg",
      "/assets/images/projects/saas-3.jpg",
    ],
    clientQuote:
      "Profesionalan tim koji razume startup dinamiku. Isporučili su više od očekivanog.",
    clientName: "Ana Jovanović, CEO",
    url: "#",
  },
  {
    id: "law-firm",
    title: "Advokatska Kancelarija Milić",
    description:
      "Elegantna prezentacija sa blog sistemom i multilanguage podrškom",
    type: "web",
    images: [
      "/assets/images/projects/law-1.jpg",
      "/assets/images/projects/law-2.jpg",
      "/assets/images/projects/law-3.jpg",
    ],
    clientQuote:
      "Sajt savršeno odražava profesionalnost naše kancelarije. Klijenti nas nalaze mnogo lakše.",
    clientName: "Dr Petar Milić, Advokat",
    url: "#",
  },
  {
    id: "fitness-app",
    title: "FitTrack Mobile App",
    description: "Progressive web app za praćenje treninga i ishrane",
    type: "app",
    images: [
      "/assets/images/projects/fitness-1.jpg",
      "/assets/images/projects/fitness-2.jpg",
      "/assets/images/projects/fitness-3.jpg",
    ],
    clientQuote: "Aplikacija radi besprekorno. Naši članovi je obožavaju!",
    clientName: "Stefan Nikolić, Fitness Centar",
    url: "#",
  },
  {
    id: "ecommerce-landing",
    title: "EcoShop Landing",
    description: "Conversion-optimized landing page za e-commerce kampanju",
    type: "landing",
    images: [
      "/assets/images/projects/eco-1.jpg",
      "/assets/images/projects/eco-2.jpg",
      "/assets/images/projects/eco-3.jpg",
    ],
    clientQuote: "Konverzija sa 2.3% skočila na 8.7%. ROI je neverovatан.",
    clientName: "Milica Đorđević, Marketing Manager",
    url: "#",
  },
  {
    id: "restaurant",
    title: "Restoran Kod Marka",
    description: "Web sajt sa online naručivanjem i rezervacijama stolova",
    type: "web",
    images: [
      "/assets/images/projects/restaurant-1.jpg",
      "/assets/images/projects/restaurant-2.jpg",
      "/assets/images/projects/restaurant-3.jpg",
    ],
    clientQuote:
      "Online narudžbine su nam udvostručile promet. Sistem radi savršeno.",
    clientName: "Marko Stanković, Vlasnik",
    url: "#",
  },
];
