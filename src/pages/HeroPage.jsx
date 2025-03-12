import React from "react";

export default function HeroPage({ id }) {
  const downloadCv = () => {
    window.open("https://www.google.com");
  };

  return (
    <section id={id} className="w-11/12 mx-auto h-screen flex flex-col gap-1.5 items-center justify-center text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-bl from-golden-brown to-satin-sheen-gold-800 bg-clip-text text-transparent font-montserrat">Mudien</h1>
      <h2 className="text-xl font-semibold mt-2 text-golden-brown">
        Hey there! I'm Ubay Lahmudien
      </h2>
      <h4 className="text-md bg-satin-sheen-gold px-3 py-1 rounded-2xl opacity-90 text-ivory">
        Fullstack Web Developer | Crafting Digital Experiences
      </h4>

      <button
        onClick={downloadCv}
        className="mt-6 px-6 py-3 bg-gold-500 text-green-900 font-bold rounded-xl shadow-lg border-3 border-gold-400 hover:bg-gradient-to-bl hover:from-satin-sheen-gold hover:to-satin-sheen-gold-700 hover:border-satin-sheen-gold transition-all duration-300"
      >
        Get My CV
      </button>
    </section>
  );
}
