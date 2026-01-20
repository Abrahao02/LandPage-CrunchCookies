export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: "MAIS VENDIDO" | "NOVIDADE";
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Differentiator {
  icon: string;
  title: string;
  description: string;
}
