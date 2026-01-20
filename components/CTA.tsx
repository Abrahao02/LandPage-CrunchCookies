"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants";
import { MessageCircle, Instagram } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-primary relative overflow-hidden"
      id="contato"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-secondary">
            PRONTO PARA EXPERIMENTAR?
          </h2>
          <p className="text-lg md:text-xl text-secondary/90">
            Faça seu pedido agora e receba cookies fresquinhos em casa!
          </p>

          <div className="px-4 py-4">
            <motion.a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="bg-secondary text-primary font-bold text-xl md:text-2xl px-12 md:px-16 py-5 md:py-6 rounded-full hover:bg-secondary/90 transition-all duration-300 shadow-2xl hover:shadow-secondary/50 flex items-center gap-3 mx-auto">
                <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
                FALAR NO WHATSAPP
              </button>
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
            >
              <Instagram className="w-6 h-6 text-secondary" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
