import React, { useState, useEffect } from 'react';
import { BiCloudDownload } from 'react-icons/bi';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationLinks = [
    {
      id: "home",
      title: "Home",
      icon: <AiOutlineHome />
    },
    {
      id: "about",
      title: "About",
      icon: <AiOutlineUser />
    },
    {
      id: "projects",
      title: "Projects",
      icon: <AiOutlineProject />
    },
    {
      id: "contact",
      title: "Contact",
      icon: <AiOutlineMail />
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const downloadCv = () => {
    window.open("https://drive.google.com/file/d/1BLu-IxTpVvOYrjzl7l3dzK-DF25syjek/view?usp=sharing", "_blank");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brunswick-green-300/80 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-bl from-golden-brown to-satin-sheen-gold-800 bg-clip-text text-transparent font-montserrat">
          Bey_Mudien
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-brunswick-green-900 font-montserrat font-semibold items-center">
          {navigationLinks.map(({ id, title, icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="flex items-center gap-2 hover:text-satin-sheen-gold transition-colors"
              >
                {icon}
                {title}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={downloadCv}
              className="flex items-center gap-2 bg-gold-500 text-brunswick-green-900 font-bold px-4 py-2 rounded-xl shadow-lg border-2 border-gold-400 hover:bg-gradient-to-bl hover:from-satin-sheen-gold hover:to-satin-sheen-gold-700 hover:border-satin-sheen-gold hover:text-ivory-600 transition-all duration-300"
            >
              <BiCloudDownload className='hidden lg:block' size={24} />
              <span>My Resume</span>
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl text-ivory-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-4 bg-amber-50 p-4 rounded-lg shadow-lg">
          {navigationLinks.map(({ id, title, icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="flex items-center gap-2 text-green-800 font-semibold hover:text-satin-sheen-gold transition-colors"
            >
              {icon}
              {title}
            </button>
          ))}
          <button
            onClick={downloadCv}
            className="flex items-center gap-2 bg-gold-500 text-green-900 font-bold px-4 py-2 rounded-xl border border-gold-400 hover:bg-gradient-to-bl hover:from-satin-sheen-gold hover:to-satin-sheen-gold-700 hover:text-ivory-600 transition-all duration-300 w-full justify-center"
          >
            <BiCloudDownload size={24} />
            <span>Get My CV</span>
          </button>
        </div>
      )}
    </nav>
  );
}
