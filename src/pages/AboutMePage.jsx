import React from 'react';

export default function AboutMePage({ id }) {

    const skills = [
        "Java", "JavaScript", "C++","Node.js", "React", "React Native", "Spring Boot", "PostgreSQL", "MySQL", "Git", "HTML", "CSS", "Tailwind CSS"
    ]

  return (
    <section id={id} className="w-11/12 bg-brunswick-green-100/20 backdrop-blur-sm mx-auto h-screen flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl">
        <h3 className="text-3xl text-ivory font-montserrat font-bold mb-4">About Me</h3>
        <div className="flex justify-center mb-6">
          <iframe className="w-40 h-40 border rounded-lg overflow-hidden">
            <img src="" alt="Profile" className="w-full h-full object-cover" />
          </iframe>
        </div>
        <p className="text-lg text-brunswick-green-900 leading-relaxed">
          I am a software developer focused on building scalable and user-friendly web and mobile applications.
          I specialize in frontend development with <b className="font-semibold">React</b> and <b className="font-semibold">React Native</b>, 
          and backend development with <b className="font-semibold">Spring Boot</b>. 
          My expertise includes database management using <b className="font-semibold">PostgreSQL</b> and <b className="font-semibold">MySQL</b>, 
          along with a solid understanding of <b className="font-semibold">C++</b> for system-level programming.
        </p>
        <p className="text-lg text-brunswick-green-900 leading-relaxed mt-4">
          Passionate about learning new technologies, optimizing application performance, and solving complex technical challenges,
          I always seek opportunities to collaborate and create impactful solutions.
        </p>

        <div className="mt-10 border-t-2 pt-10 border-ivory-500 bg-gradient-to-b from-satin-sheen-gold-700/10">
          <h4 className="text-2xl text-ivory-500 font-semibold mb-3">Skills</h4>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {skills.map((skill, index) => (
              <span key={index} className="bg-brunswick-green-900 text-golden-brown-100 px-3 py-1 rounded-full text-sm font-poppins font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
