import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroPage from "./pages/HeroPage";
import AboutMePage from "./pages/AboutMePage";
import WhyChooseMePage from "./pages/WhyChooseMePage";
import BackgroundAnimation from "./components/BackgroundAnimation"; // Pastikan path benar
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("home");
      if (!heroElement) return;

      const heroHeight = heroElement.offsetHeight;
      const triggerPoint = heroHeight * 0.5;

      setShowNavbar(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
          showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <Navbar />
      </header>

      <BackgroundAnimation />
      
      <main className="w-screen h-max overflow-x-hidden flex flex-col gap-10 relative z-10">
        <HeroPage id="home" />
        <AboutMePage id="about" />
        <WhyChooseMePage />
        <ProjectsPage id="projects" />
      </main>

      <Footer />
    </>
  );
}
