import type { Servicio, Testimonio, Proyecto, ContactoInfo } from "./types";

// Datos de ejemplo - puedes modificar o vaciar estas listas
export const servicios: Servicio[] = [
  {
    id: 1,
    titulo: "Creación de Landing Pages",
    descripcion:
      "Creamos páginas para capturar leads y promocionar tus productos o servicios de manera efectiva.",
    icono: "Code",
    precio: "Desde $2,000 MXN",
  },
  {
    id: 2,
    titulo: "Sistemas de gestión",
    descripcion:
      "Desarrollamos aplicaciones web y móviles personalizadas para optimizar tus procesos internos.",
    icono: "Settings",
    precio: "Ajustable según proyecto",
  },
  {
    id: 3,
    titulo: "Hosting",
    descripcion:
      "Ofrecemos servicios de hosting con alta disponibilidad y seguridad para tus aplicaciones y sitios web.",
    icono: "Server",
    precio: "Desde $300 MXN/mes",
  },
  {
    id: 4,
    titulo: "Consultoría Digital",
    descripcion:
      "Analizamos tus necesidades digitales y te asesoramos en la mejor estrategia para tu negocio.",
    icono: "Lightbulb",
    precio: "Desde $200/hora",
  },
];

export const testimonios: Testimonio[] = [
  /*   {
    id: 1,
    nombre: "María González",
    empresa: "TechStart Solutions",
    comentario:
      "Oryza transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas.",
    rating: 5,
  },
  {
    id: 2,
    nombre: "Carlos Rodríguez",
    empresa: "Innovación Retail",
    comentario:
      "Excelente trabajo en el desarrollo de nuestra plataforma e-commerce. Aumentamos las ventas en un 300% en los primeros 6 meses.",
    rating: 5,
  },
  {
    id: 3,
    nombre: "Ana Martínez",
    empresa: "Consultora Legal",
    comentario:
      "La app móvil que desarrollaron para nuestros clientes ha mejorado significativamente la comunicación y eficiencia de nuestros servicios.",
    rating: 4,
  }, */
];

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Aplicación para aprender inglés",
    descripcion:
      "Test de traducción y revisión guíada con IA para mejorar el aprendizaje de idiomas.",
    imagen: "/images/proyectos/english-learn-mobile.jpeg",
    tecnologias: ["Nest JS", "Expo", "PostgreSQL", "Gemini"],
    url: "https://github.com/Lorenzo2345612/english-learn-mobile",
  },
  {
    id: 2,
    titulo: "Landing Page Ecoturismo",
    descripcion: "Página de destino para promover el ecoturismo.",
    imagen: "/images/proyectos/ecoturismo.png",
    tecnologias: ["Next.js", "Tailwind CSS", "Node.js"],
    url: "https://perpetual-intuition-production.up.railway.app/",
  },
  {
    id: 3,
    titulo: "Dashboard Empresarial",
    descripcion:
      "Panel de control con analytics avanzados y reportes automatizados para gestión empresarial.",
    imagen: "/placeholder.svg?height=300&width=400",
    tecnologias: ["Vue.js", "Python", "MongoDB", "Chart.js"],
  },
];

export const beneficios: string[] = [
  "Garantía de satisfacción del 100%",
  "Metodología ágil para entregas rápidas",
  "Precios competitivos sin comprometer la calidad",
];

export const contactoInfo: ContactoInfo = {
  email: "oryza.solutions@gmail.com",
  redesSociales: {
    facebook: "https://facebook.com/oryzadigital",
    instagram: "https://instagram.com/oryza_digital",
  },
};
