// Tipos TypeScript para los datos
export interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  precio?: string;
}

export interface Testimonio {
  id: number;
  nombre: string;
  empresa: string;
  comentario: string;
  rating: number;
  avatar?: string;
}

export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: string;
  tecnologias: string[];
  url?: string;
}

export interface ContactoInfo {
  email: string;
  redesSociales: {
    facebook?: string;
    instagram?: string;
  };
}

export interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface CarouselState {
  currentIndex: number;
  isAutoPlaying: boolean;
}

export interface NavigationItem {
  href: string;
  label: string;
}
