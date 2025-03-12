import React from 'react';

const projects = [
  { id: 1, title: 'Project Alpha', description: 'Pengembangan web modern.', image: 'https://picsum.photos/id/1/400/300' },
  { id: 2, title: 'Project Beta', description: 'Aplikasi tracking waktu.', image: 'https://picsum.photos/id/2/400/300' },
  { id: 3, title: 'Project Gamma', description: 'Portofolio interaktif.', image: 'https://picsum.photos/id/3/400/300' },

  { id: 4, title: 'Project Dummy', description: 'Portofolio interaktif.', image: 'https://picsum.photos/id/4/400/300' },
];

export default function ProjectsPage({ id }) {
  return (
    <section id={id} className="w-11/12 mx-auto h-screen p-10 bg-brunswick-green-100/20 backdrop-blur-sm">
      <h2 className="text-3xl font-montserrat font-semibold text-center mt-20 mb-6">Recent Projects</h2>
      <div className="grid grid-cols-1 pt-10 px-10 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 border rounded-xl shadow-lg bg-white flex flex-col items-center justify-center text-center relative h-48 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }} // Gambar sebagai background
          >
            <div className="absolute inset-0 bg-black/50 rounded-xl"></div> {/* Overlay gelap */}
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
