import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideInLeft, slideInUp } from '../../animations/variants';

export default function SkillGrid({ title, items }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mb-12 w-full max-w-7xl" ref={ref}>
      <motion.h2
        className="text-2xl font-bold text-ivory mb-6 border-b-2 border-teal-400 inline-block pb-1"
        variants={slideInLeft(0)}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 mt-5">
        {items.map((skill, index) => (
          <motion.div
            key={index}
            title={skill.title}
            className="rounded-2xl p-2 bg-brunswick-green-900/90 text-center flex flex-col items-center justify-center shadow-lg scale-95"
            style={{ minHeight: '120px'}}
            variants={slideInUp(index * 0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <img
              src={skill.link}
              alt={skill.title}
              className="w-3/4 aspect-square object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
