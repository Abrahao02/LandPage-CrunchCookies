"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import React from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { TESTIMONIALS, STATS } from "@/lib/constants";
import { Star } from "lucide-react";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [display, setDisplay] = React.useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  if (suffix === "⭐") {
    return (
      <>
        {value.toFixed(1)}
        {suffix}
      </>
    );
  }

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background relative"
      id="depoimentos"
    >
      <div className="container mx-auto px-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-8 bg-accent/10 rounded-2xl border border-secondary/10"
            >
              <div className="font-display text-4xl md:text-5xl font-black text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-secondary/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-4">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-accent/10 border border-secondary/10 rounded-2xl p-6 space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-secondary/80 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-bold text-secondary">— {testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
