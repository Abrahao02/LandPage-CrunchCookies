"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, bounceIn } from "@/lib/animations";
import { DIFFERENTIATORS } from "@/lib/constants";
import {
  Cookie,
  Package,
  Truck,
  Star,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cookie,
  Package,
  Truck,
  Star,
};

export default function Differentiators() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background relative"
      id="diferenciais"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-4">
            POR QUE ESCOLHER A CRUNCH?
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Diferenciais que fazem a diferença em cada mordida
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = iconMap[item.icon] || Cookie;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center space-y-4"
              >
                <motion.div
                  variants={bounceIn}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4"
                >
                  <Icon className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="font-bold text-xl text-secondary">
                  {item.title}
                </h3>
                <p className="text-secondary/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
