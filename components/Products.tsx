"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { PRODUCTS, WHATSAPP_URL } from "@/lib/constants";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background relative"
      id="produtos"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-4">
            NOSSOS PRODUTOS
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Cada cookie é uma experiência única de sabor e textura
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={staggerItem}
              className="group relative"
            >
              <div className="bg-background border border-secondary/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-accent/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.tag && (
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          product.tag === "MAIS VENDIDO"
                            ? "bg-primary text-secondary"
                            : "bg-caramel text-background"
                        }`}
                      >
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-2xl font-bold text-secondary">
                    {product.name}
                  </h3>
                  <p className="text-secondary/70 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href={WHATSAPP_URL(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="w-full bg-primary text-secondary font-bold py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/50">
                      <ShoppingCart className="w-5 h-5" />
                      Pedir no WhatsApp
                    </button>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
