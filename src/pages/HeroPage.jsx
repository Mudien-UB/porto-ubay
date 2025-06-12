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
      className="w-11/12 max-w-screen-xl mx-auto h-screen flex flex-col gap-5 sm:gap-8 items-center justify-center text-center px-4"
    >
     <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-b from-golden-brown to-satin-sheen-gold-800 bg-clip-text text-transparent font-montserrat"
      >
        {`(...) -> {...}`}
      </motion.h1> 
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-bl from-golden-brown to-satin-sheen-gold-800 bg-clip-text text-transparent font-montserrat"
      >
        Bey_Mudien
      </motion.h1>

      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-xs sm:text-sm md:text-xl px-3 py-1 text-center font-black  bg-satin-sheen-gold rounded-2xl opacity-90 text-ivory"
      >
        Software Developer with a focus on server-side development and API integration.
      </motion.h4>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        className=" flex flex-row gap-3 sm:gap-4 font-bold flex-wrap justify-center"
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="bg-satin-sheen-gold text-ivory text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow hover:scale-105 transition duration-300"
        >
          Recent Projects
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="border-2 border-brunswick-green-600 text-brunswick-green-700 text-xs sm:text-sm md:text-base px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-brunswick-green-600 hover:text-satin-sheen-gold-900 transition duration-300"
        >
          Let's Connect
        </button>
      </motion.div>

    </section>
  );
}
