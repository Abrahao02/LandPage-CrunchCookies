import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crunch Cookies RJ | O Cookie que Vai Te Viciar",
  description: "Cookies artesanais premium feitos com paixão no Rio de Janeiro. Ingredientes selecionados, receitas exclusivas e entrega rápida.",
  keywords: "cookies, cookies artesanais, cookies RJ, cookies Rio de Janeiro, cookies premium, Crunch Cookies",
  icons: {
    icon: "/img/logo.jpeg",
    apple: "/img/logo.jpeg",
  },
  openGraph: {
    title: "Crunch Cookies RJ | O Cookie que Vai Te Viciar",
    description: "Cookies artesanais premium feitos com paixão no Rio de Janeiro.",
    type: "website",
    images: ["/img/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
