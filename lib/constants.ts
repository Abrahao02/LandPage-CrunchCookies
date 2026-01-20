export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5521999999999";

export const WHATSAPP_MESSAGE = (productName?: string) => {
  if (productName) {
    return encodeURIComponent(
      `Olá! Vi o site e gostaria de saber mais sobre ${productName}.`
    );
  }
  return encodeURIComponent(
    "Olá! Vi o site e gostaria de saber mais sobre os cookies."
  );
};

export const WHATSAPP_URL = (productName?: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE(productName)}`;
};

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: "MAIS VENDIDO" | "NOVIDADE";
}

export const PRODUCTS: Product[] = [
  {
    id: "oreo",
    name: "Cookie Oreo",
    description: "Crocante por fora, cremoso por dentro com pedaços de Oreo",
    image: "/img/oreo.png",
    tag: "MAIS VENDIDO",
  },
  {
    id: "redvelvet",
    name: "Red Velvet",
    description: "Sabor único com gotas de chocolate branco e red velvet",
    image: "/img/redvelvet.png",
    tag: "NOVIDADE",
  },
  {
    id: "recheados",
    name: "Cookies Recheados",
    description: "Recheio cremoso e irresistível em cada mordida",
    image: "/img/cookeis recheados.png",
  },
  {
    id: "super",
    name: "Cookies Super",
    description: "Tamanho especial com ingredientes premium selecionados",
    image: "/img/cookeis super.png",
  },
];

export const HEADLINE = {
  line1: "O COOKIE QUE",
  line2: "VAI TE VICIAR",
};

export const SUBHEADLINE =
  "Feito com paixão, ingredientes premium e muito sabor. Do Rio de Janeiro direto para sua casa.";

export const ABOUT_TITLE = "Feito com paixão, do RIO para você";

export const ABOUT_DESCRIPTION = `
  Na Crunch Cookies RJ, cada cookie é uma obra de arte. Usamos apenas ingredientes 
  selecionados, receitas exclusivas e muito carinho no preparo. Tudo feito à mão, 
  com atenção aos detalhes e paixão pela qualidade.
`;

export const DIFFERENTIATORS = [
  {
    icon: "Cookie",
    title: "Receita Exclusiva",
    description: "Fórmula única desenvolvida especialmente para você",
  },
  {
    icon: "Package",
    title: "Embalagem Especial",
    description: "Cuidado em cada detalhe, da produção à entrega",
  },
  {
    icon: "Truck",
    title: "Entrega Rápida",
    description: "Entregamos rápido para todo Meier e redondezas",
  },
  {
    icon: "Star",
    title: "Ingredientes Premium",
    description: "Apenas os melhores ingredientes selecionados",
  },
];

export const TESTIMONIALS = [
  {
    name: "Guilherme Sá",
    text: "Os melhores cookies que já provei! Crocantes por fora e cremosos por dentro. Perfeito!",
    rating: 5,
  },
  {
    name: "Carla Queiroz",
    text: "Comprei hoje o de Nutella é delicioso 😍😍 A massa derrete na boca é super recheado. Amei e recomendo ❤️❤️",
    rating: 5,
  },
  {
    name: "Lu Simões",
    text: "É divino!!!! É muuuuuito recheio mesmo. Dos deuses❤️",
    rating: 5,
  },
];

export const STATS = [
  { label: "Cookies Vendidos", value: 500, suffix: "+" },
  { label: "Clientes Felizes", value: 120, suffix: "+" },
  { label: "Avaliações", value: 4.9, suffix: "⭐" },
];

export const INSTAGRAM_URL = "https://www.instagram.com/crunchcookiesrj/";
