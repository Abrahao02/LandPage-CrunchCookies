# Crunch Cookies RJ - Landing Page

Landing page moderna e de alto impacto para a marca Crunch Cookies RJ, desenvolvida com Next.js 14+, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (ícones)

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite o arquivo .env.local e adicione seu número do WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5521XXXXXXXXX
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout principal com metadata SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais
├── components/
│   ├── Hero.tsx            # Hero section com cookie animado
│   ├── About.tsx           # Seção sobre a marca
│   ├── Products.tsx        # Grid de produtos
│   ├── Gallery.tsx         # Galeria visual
│   ├── Differentiators.tsx # Diferenciais da marca
│   ├── Testimonials.tsx    # Prova social
│   ├── CTA.tsx             # CTA final
│   ├── Footer.tsx          # Footer
│   ├── CookieHero.tsx      # Componente do cookie 3D animado
│   ├── Particles.tsx       # Partículas flutuantes
│   └── ScrollIndicator.tsx # Indicador de scroll
├── lib/
│   ├── animations.ts       # Configurações do Framer Motion
│   └── constants.ts        # Constantes (cores, textos, WhatsApp)
├── types/
│   └── index.ts            # Tipos TypeScript
└── public/
    └── img/                # Imagens otimizadas
```

## 🎨 Paleta de Cores

- **Primária**: `#FF2D2D` (Vermelho vibrante)
- **Secundária**: `#FFFFFF` (Branco)
- **Destaque**: `#5A1E1E` (Marrom chocolate)
- **Background**: `#0A0A0A` (Preto profundo)
- **Acento**: `#D4A574` (Caramelo/dourado)

## ✨ Funcionalidades

- ✅ Hero section com cookie animado e efeito parallax
- ✅ Partículas flutuantes animadas
- ✅ Seções com animações ao scroll
- ✅ Grid de produtos responsivo
- ✅ Galeria com lightbox
- ✅ Integração com WhatsApp
- ✅ Design totalmente responsivo
- ✅ Animações suaves com Framer Motion
- ✅ SEO otimizado

## 📝 Personalização

### Produtos

Edite os produtos em `lib/constants.ts`:

```typescript
export const PRODUCTS: Product[] = [
  {
    id: "oreo",
    name: "Cookie Oreo",
    description: "Sua descrição aqui",
    image: "/img/oreo.png",
    tag: "MAIS VENDIDO",
  },
  // ...
];
```

### Textos

Todos os textos podem ser personalizados em `lib/constants.ts`.

```bash
npm run build
```

## 📄 Licença

Este projeto é privado e pertence à Crunch Cookies RJ.
