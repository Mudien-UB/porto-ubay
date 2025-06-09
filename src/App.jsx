import React, { useEffect, useState } from "react";
import HeroPage from "./pages/HeroPage";
import AboutMePage from "./pages/AboutMePage";
import WhyChooseMePage from "./pages/WhyChooseMePage";
import ProjectsPage from "./pages/ProjectsPage";
import LoadingPage from "./pages/LoadingPage";
import ContactPage from "./pages/ContactPage";
import Navbar from './components/organisms/Navbar';
import BackgroundAnimation from './animations/BackgroundAnimation';
import Footer from './components/organisms/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("hidden");

    const checkReady = () => {
      if (document.readyState === "complete") {
        setLoading(false);
        document.body.classList.remove("hidden");
      }
    };

    window.addEventListener("load", checkReady);
    document.fonts.ready.then(checkReady);

    return () => {
      window.removeEventListener("load", checkReady);
    };
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <Navbar />
      </header>

      <BackgroundAnimation />

      <main className="w-screen h-max overflow-x-hidden flex flex-col gap-10 relative z-10">
        <HeroPage id="home" />
        <AboutMePage id="about" />
        <WhyChooseMePage />
        <ProjectsPage id="projects" />
        <ContactPage id="contact" />
      </main>

      <Footer />
    </>
  );
}
