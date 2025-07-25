import React from 'react'
import { motion } from 'framer-motion';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import { fadeIn, scaleIn, slideInLeft, slideInRight } from '../../animations/variants';

export default function ProfileSection() {
  const [ref, isInView] = useInViewAnimation();

  return (
    <div
      ref={ref}
      className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 items-center"
    >
      {/* Foto + Quote */}
      <motion.div
        className="flex flex-col items-center space-y-6 order-1 md:order-2"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeIn(0.1)}
      >
        <motion.img
          src="/assets/images/me.png"
          alt="Profile"
          className="w-52 h-52 rounded-full object-cover border-4 border-brunswick-green-800 shadow-xl hover:scale-105 transition-transform duration-300"
          variants={scaleIn(0.2)}
          title='its me !!!'
        />

        <motion.div className="text-center space-y-1" variants={fadeIn(0.4)}>
          <h3 className="text-xl font-semibold text-brunswick-green-800">@Bey_Mudien</h3>
          <p className="text-sm font-bold text-satin-sheen-gold-900">Fullstack Web Developer</p>
        </motion.div>

        <motion.div
          className="relative p-5 m-1 rounded-xl text-center max-w-sm md:max-w-md md:mb-0 mb-10 text-satin-sheen-gold-800 font-medium text-xs md:text-sm italic font-poppins overflow-hidden"
          variants={slideInLeft(0.6)}
        >
          <p>
            “Where creativity flows through every line of code.<br />
            When logic meets imagination in perfect harmony,<br />
            Innovation is no longer a goal—it becomes a way of life.<br />
            Each bug a mystery, each fix a triumph.<br />
            This is where ideas come alive,<br />
            One keystroke at a time.”
          </p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brunswick-green to-transparent" />
        </motion.div>
      </motion.div>

      {/* Teks deskripsi */}
      <motion.div
        className="space-y-6 text-ivory order-2 md:order-1"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeIn(0.2)}
      >
        <motion.div className="space-y-2" variants={slideInRight(0.3)}>
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat">Hello, I'm</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat text-satin-sheen-gold-700">
            Ubay Lahmudien
          </h1>
        </motion.div>

        <motion.div
          className="text-sm md:text-lg leading-relaxed text-brunswick-green-900 space-y-4 text-justify"
          variants={slideInLeft(0.5)}
        >
          <p className='indent-8'>
            I am a software developer specializing in backend development with a strong proficiency in
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;Java (Spring Boot)&nbsp;</span> and i learned some of
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;PHP (Laravel)&nbsp;</span>.
            I am skilled in designing and building
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;RESTful APIs&nbsp;</span>
            that are scalable, secure, and maintainable. Although I am more comfortable with Spring Boot,
            On the frontend side, I have foundational knowledge of
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;React.js&nbsp;</span> and
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;Tailwind CSS&nbsp;</span>,
            enabling me to collaborate effectively on full-stack projects and contribute to UI development when needed.
            I am experienced with relational databases such as
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;PostgreSQL&nbsp;</span> and
            <span className="font-bold text-satin-sheen-gold-700">&nbsp;MySQL&nbsp;</span>,
            ensuring data integrity and optimized queries for high-performance applications.
          </p>

          <p className='indent-8'>
            Passionate about learning new technologies, optimizing application performance, and solving complex technical challenges,
            I always seek opportunities to collaborate and create impactful solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
