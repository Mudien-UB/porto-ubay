import React from 'react';
import { BiCloudDownload } from 'react-icons/bi';

export default function Navbar({ showNavbar }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCv = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
        showNavbar
          ? 'bg-brunswick-green-500'
          : 'backdrop-blur-sm bg-brunswick-green-300/20'
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-bl from-golden-brown to-satin-sheen-gold-800 bg-clip-text text-transparent font-montserrat">
          Bey_Mudien
        </h1>

        {/* Navigation Links (Desktop Only) */}
        <ul className="hidden md:flex space-x-8 text-ivory-500 font-montserrat font-semibold">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="hover:text-satin-sheen-gold transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <button
          onClick={downloadCv}
          className={`flex items-center gap-2 bg-gold-500 text-green-900 font-bold px-4 py-2 rounded-xl shadow-lg border border-gold-400 hover:bg-gradient-to-bl hover:from-satin-sheen-gold hover:to-satin-sheen-gold-700 hover:border-satin-sheen-gold hover:text-ivory-600 transition-all duration-300 ${showNavbar ? 'text-satin-sheen-gold' : ''}`}
        >
          <BiCloudDownload className="text-xl md:text-lg"  size={24}/>
          <span className="hidden md:inline">Get My CV</span>
        </button>

        {/* Mobile Navigation Icons */}
        <div className="flex md:hidden justify-around w-full text-ivory-500 font-montserrat font-semibold mt-2">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="flex flex-col items-center text-sm hover:text-satin-sheen-gold"
            >
              {/* Icon Placeholder - bisa ganti icon yang sesuai */}
              <div className="text-xl">⬤</div>
              <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
