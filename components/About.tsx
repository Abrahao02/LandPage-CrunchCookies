"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { ABOUT_TITLE, ABOUT_DESCRIPTION } from "@/lib/constants";
import { Cookie, Heart, MapPin } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/img/cookies bandeja.png"
                alt="Cookies artesanais"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-secondary">
              {ABOUT_TITLE}
            </h2>
            <p className="text-lg text-secondary/80 leading-relaxed">
              {ABOUT_DESCRIPTION}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Cookie className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-secondary">Ingredientes Premium</h3>
                <p className="text-sm text-secondary/70">
                  Apenas os melhores selecionados
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-secondary">Feito à Mão</h3>
                <p className="text-sm text-secondary/70">
                  Com carinho e atenção aos detalhes
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-secondary">Entrega no RJ</h3>
                <p className="text-sm text-secondary/70">
                  Rápido e seguro em Meier e redondezas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
