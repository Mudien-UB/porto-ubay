import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaPeopleArrows, FaRocket, FaLightbulb, FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineApi, AiOutlineArrowUp } from "react-icons/ai";

import { scaleIn, slideInUp } from '../animations/variants';

export default function WhyChooseMePage() {
  const whyPoints = [
  {
    title: "Backend Development That Scales",
    description:
      "I specialize in Java (Spring Boot) and PHP (Laravel) to build secure, maintainable, and production-ready backend systems.",
    icon: <FaServer size={30} className="text-golden-brown mx-auto mb-2" />,
  },
  {
    title: "Robust RESTful API Design",
    description:
      "I create well-structured, developer-friendly APIs that make integration with frontend and third-party services smooth and reliable.",
    icon: <AiOutlineApi size={30} className="text-golden-brown mx-auto mb-2" />,
  },
  {
    title: "Database-First Performance",
    description:
      "From optimized queries to smart schema design, I ensure data integrity and app performance using PostgreSQL and MySQL.",
    icon: <FaDatabase size={30} className="text-golden-brown mx-auto mb-2" />,
  },
  {
    title: "Fullstack Collaboration",
    description:
      "While my strength is backend, I understand frontend tech like React and Tailwind CSS, so I can bridge the gap between teams.",
    icon: <FaPeopleArrows size={30} className="text-golden-brown mx-auto mb-2" />,
  },
  {
    title: "Creative Problem Solving",
    description:
      "I enjoy breaking down complex problems and finding smart, clean solutions that improve workflows and user experience.",
    icon: <FaLightbulb size={30} className="text-golden-brown mx-auto mb-2" />,
  },
  {
    title: "Always Learning & Improving",
    description:
      "I love staying up-to-date with new tech and best practices, always aiming to grow as a developer and build better software.",
    icon: <FaLaptopCode size={30} className="text-golden-brown mx-auto mb-2" />,
  }
];

  return (
    <section className="w-11/12 mx-auto py-10 flex flex-col items-center text-center">
      <div className="max-w-5xl w-full flex flex-col gap-8">

        {/* Judul */}
        <motion.h1
          variants={scaleIn(0.2)}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-ivory-500 mb-8"
        >
          Why Hire Me?
        </motion.h1>

        {/* List poin (pakai div) */}
        <motion.div
          variants={slideInUp(0.5)}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 m-3 md:gap-6 md:m-0 text-left"
        >
          {whyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={scaleIn(1)}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 bg-ivory-500 border rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300 text-justify"
            >
              {point.icon}
              <h2 className="text-xl font-semibold text-golden-brown mb-2 text-center">
                {point.title}
              </h2>
              <p className="text-base text-golden-brown">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
