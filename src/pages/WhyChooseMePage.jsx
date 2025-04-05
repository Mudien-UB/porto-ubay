import React from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineCode,
  AiOutlineCheckCircle,
  AiOutlineApi,
  AiOutlineBulb,
  AiOutlineTeam,
  AiOutlineCloudServer
} from 'react-icons/ai';

import { scaleIn, slideInUp } from '../animations/variants';

export default function WhyChooseMePage() {
  const whyPoints = [
    {
      title: "Scalable Fullstack Development",
      description:
        "I build fullstack web applications from the ground up, focusing on creating efficient, scalable, and reliable solutions.",
      icon: <AiOutlineCode size={30} className="text-golden-brown mx-auto mb-2" />,
    },
    {
      title: "Clean & Maintainable Code",
      description:
        "I prioritize writing clean, readable, and well-structured code to make projects easier to maintain and scale over time.",
      icon: <AiOutlineCheckCircle size={30} className="text-golden-brown mx-auto mb-2" />,
    },
    {
      title: "RESTful API Design",
      description:
        "I have solid experience designing and optimizing RESTful APIs that enhance app performance and developer experience.",
      icon: <AiOutlineApi size={30} className="text-golden-brown mx-auto mb-2" />,
    },
    {
      title: "Innovative Problem Solving",
      description:
        "I enjoy tackling technical challenges and always look for creative solutions to improve workflows and results.",
      icon: <AiOutlineBulb size={30} className="text-golden-brown mx-auto mb-2" />,
    },
    {
      title: "Team Collaboration",
      description:
        "I thrive in team environments, enjoy sharing ideas, and value collaboration to deliver high-quality results together.",
      icon: <AiOutlineTeam size={30} className="text-golden-brown mx-auto mb-2" />,
    },
    {
      title: "DevOps & CI/CD Readiness",
      description:
        "I'm familiar with DevOps practices and continuous integration tools that ensure smooth deployment and version control.",
      icon: <AiOutlineCloudServer size={30} className="text-golden-brown mx-auto mb-2" />,
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
              className="p-6 bg-ivory-500 border rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300"
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
