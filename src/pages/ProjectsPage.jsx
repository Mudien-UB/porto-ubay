import React from 'react';
import { motion } from 'framer-motion';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { slideInUp } from '../animations/variants'; // asumsikan animasi kamu simpan di utils/animations.js

const projects = [
  { id: 1, title: 'Project Alpha', description: 'Pengembangan web modern.', image: 'https://picsum.photos/id/1/400/300' },
  { id: 2, title: 'Project Beta', description: 'Aplikasi tracking waktu.', image: 'https://picsum.photos/id/2/400/300' },
  { id: 3, title: 'Project Gamma', description: 'Portofolio interaktif.', image: 'https://picsum.photos/id/3/400/300' },
  { id: 4, title: 'Project Dummy', description: 'Portofolio interaktif.', image: 'https://picsum.photos/id/4/400/300' },
];

export default function ProjectsPage({ id }) {
  const [ref, isInView] = useInViewAnimation();

  return (
    <section
      id={id}
      ref={ref}
      className="w-11/12 mx-auto min-h-screen max-h-max p-10 bg-brunswick-green-100/20 border-2 border-brunswick-green-300 shadow-xl"
    >
      <h2 className="text-3xl font-montserrat font-semibold text-center mt-20 mb-6">Recent Projects</h2>

      <div className="grid grid-cols-1 pt-10 px-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="p-4 border rounded-xl shadow-lg bg-white flex flex-col items-center justify-center text-center relative h-48 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
            variants={slideInUp(index * 0.5)} // animasi muncul bergantian
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
