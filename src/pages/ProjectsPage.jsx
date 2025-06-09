import React from 'react';
import { motion } from 'framer-motion';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { slideInUp } from '../animations/variants'; // asumsikan animasi kamu simpan di utils/animations.js

const projects = [
  {
    id: 1,
    title: 'Toko Onlen API',
    description: 'Payment and Transaction app for learn',
    linkRepo: "https://github.com/Mudien-UB/toko-onlen",
    image: 'https://picsum.photos/id/1/400/300'
  },
  {
    id: 2,
    title: 'Nia Coffee',
    description: 'Landing Page of Cafe for dummy app',
    linkRepo: "https://github.com/Mudien-UB/Nia-Coffee",
    image: 'https://picsum.photos/id/3/400/300'
  },
  {
    id: 3,
    title: 'Blogs API with Springboot',
    description: 'Dummy Project Springboot',
    linkRepo: "https://github.com/Mudien-UB/java-blogs-restfull-api",
    image: 'https://picsum.photos/id/2/400/300'
  },
  {
    id: 4,
    title: 'Blogs API with Laravel',
    description: 'Dummy Project Laravel',
    linkRepo: "https://github.com/Mudien-UB/laravel-blog-api",
    image: 'https://picsum.photos/id/4/400/300'
  },

];

export default function ProjectsPage({ id }) {
  const [ref, isInView] = useInViewAnimation();

  const openRepo = (link) => {
    window.open(link, "_blank");
  }

  return (
    <section
      id={id}
      ref={ref}
      className="w-11/12 mx-auto min-h-screen max-h-max p-10 bg-brunswick-green-100/20 border-2 border-brunswick-green-300 shadow-xl"
    >
      <h2 className="text-3xl font-montserrat font-semibold text-center mt-20 mb-6">Recent Projects Repo</h2>

      <div className="grid grid-cols-1 pt-10 px-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => openRepo(project.linkRepo)}
            className="p-4 border rounded-xl shadow-lg bg-white flex flex-col items-center justify-center text-center relative h-48 w-full bg-cover bg-center cursor-pointer"
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
