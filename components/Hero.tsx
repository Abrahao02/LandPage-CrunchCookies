"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HEADLINE, SUBHEADLINE, WHATSAPP_URL } from "@/lib/constants";
import Image from "next/image";
import CookieHero from "./CookieHero";
import Particles from "./Particles";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const words1 = HEADLINE.line1.split(" ");
  const words2 = HEADLINE.line2.split(" ");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-accent/10 to-background" />

      {/* Particles */}
      <Particles />

      {/* Logo */}
      <motion.div
        className="absolute top-4 md:top-8 left-0 right-0 mx-auto w-fit z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/img/logo.jpeg"
          alt="Crunch Cookies RJ"
          width={120}
          height={120}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain rounded-full"
          priority
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-0 container mx-auto px-4 pt-20 md:pt-24 pb-28 md:pb-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]"
        >
          {/* Cookie Hero */}
          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
            <CookieHero />
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary leading-tight"
                variants={fadeInUp}
              >
                {words1.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {words2.map((word, i) => (
                  <motion.span
                    key={i + words1.length}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1.2 + i * 0.1,
                      duration: 0.5,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-secondary/80 max-w-xl lg:max-w-none mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              {SUBHEADLINE}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-start"
            >
              <motion.a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block outline-none focus:outline-none"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-primary text-secondary font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50 outline-none focus:outline-none border-none focus:border-none">
                  FAÇA SEU PEDIDO
                </button>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
