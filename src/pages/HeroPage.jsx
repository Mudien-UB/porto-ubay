import React from "react";
import { motion } from "framer-motion";

export default function HeroPage({ id }) {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={id}
      className="w-11/12 mx-auto h-screen flex flex-col gap-4 items-center justify-center text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-6xl font-bold bg-gradient-to-bl from-golden-brown to-satin-sheen-gold-800 bg-clip-text text-transparent font-montserrat"
      >
        Bey_Mudien
      </motion.h1>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-md bg-satin-sheen-gold px-3 py-1 rounded-2xl opacity-90 text-ivory"
      >
        Fullstack Web Developer | Crafting Digital Experiences
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-6 flex gap-4 font-bold"
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-satin-sheen-gold text-ivory px-5 py-2 rounded-full shadow hover:scale-105 transition duration-300"
        >
          Recent Projects
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="border-2 border-brunswick-green-600 text-brunswick-green-700 px-5 py-2 rounded-full hover:bg-brunswick-green-600 hover:text-satin-sheen-gold-900 transition duration-300"
        >
          Let's Connect
        </button>
      </motion.div>
    </section>
  );
}
