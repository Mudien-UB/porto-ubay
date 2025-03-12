import React from 'react'

export default function Navbar( {showNavbar} ) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-150 ease-out ${showNavbar ? 'bg-brunswick-green-500' : 'backdrop-blur-sm bg-brunswick-green-300/20'} `}>
      <ul className="flex text-ivory-500 space-x-6 justify-center">
        <li><button onClick={() => scrollToSection('home')} className="hover:text-satin-sheen-gold font-semibold font-montserrat">Home</button></li>
        <li><button onClick={() => scrollToSection('about')} className="hover:text-satin-sheen-gold font-semibold font-montserrat">About</button></li>
        <li><button onClick={() => scrollToSection('projects')} className="hover:text-satin-sheen-gold font-semibold font-montserrat">Projects</button></li>
        <li><button onClick={() => scrollToSection('contact')} className="hover:text-satin-sheen-gold font-semibold font-montserrat">Contact</button></li>
      </ul>
    </nav>
  )
}
