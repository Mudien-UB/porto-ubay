import React from 'react';

export default function AboutMePage({ id }) {
  const skills = [
    "Java", "JavaScript", "C++", "Node.js", "React", "React Native",
    "Spring Boot", "PostgreSQL", "MySQL", "Git", "HTML", "CSS", "Tailwind CSS"
  ];

  return (
    <section
      id={id}
      className="w-full min-h-screen py-24 px-8 bg-brunswick-green-100/30 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 items-center">
        
        <div className="space-y-6 text-ivory">
          <div className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat">
              Hello, I'm
            </h3>
            <h1 className="text-4xl md:text-5xl font-extrabold font-montserrat text-brunswick-green-900">
              Ubay Lahmudien
            </h1>
          </div>

          <div className="text-lg leading-relaxed text-brunswick-green-900 space-y-4">
          <p>
              I am a software developer focused on building scalable and user-friendly web and mobile applications.
              I specialize in frontend development with <span className="font-bold text-ivory-600">React</span> and <span className="font-bold text-ivory-600">React Native</span>, 
              and backend development with <span className="font-bold text-ivory-600">Spring Boot</span>. 
              My expertise includes database management using <span className="font-bold text-ivory-600">PostgreSQL</span> and <span className="font-bold text-ivory-600">MySQL</span>, 
              along with a solid understanding of <span className="font-bold text-ivory-600">C++</span> for system-level programming.
            </p>
            <p>
              Passionate about learning new technologies, optimizing application performance, and solving complex technical challenges,
              I always seek opportunities to collaborate and create impactful solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <img
            src="/public/images/me.png"
            alt="Profile"
            className="w-44 h-44 rounded-full object-cover border-4 border-brunswick-green-800 shadow-xl hover:scale-105 transition-transform duration-300"
          />

          <div className="text-center md:text-left space-y-1">
            <h3 className="text-xl font-semibold text-brunswick-green-800">
              @Bey_Mudien
            </h3>
            <p className="text-sm text-brunswick-green-700">
              Fullstack Web Developer
            </p>
          </div>

          <div className="relative p-5 m-1 rounded-xl text-center max-w-md text-brunswick-green-950 text-sm italic font-poppins overflow-hidden">
            <p>
              “Where creativity flows through every line of code.<br />
              When logic meets imagination in perfect harmony,<br />
              Innovation is no longer a goal—it becomes a way of life.<br />
              Each bug a mystery, each fix a triumph.<br />
              This is where ideas come alive,<br />
              One keystroke at a time.”
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brunswick-green to-transparent"  />
          </div>

        </div>
      </div>
    </section>
  );
}
