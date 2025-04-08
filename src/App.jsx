import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroPage from "./pages/HeroPage";
import AboutMePage from "./pages/AboutMePage";
import WhyChooseMePage from "./pages/WhyChooseMePage";
import BackgroundAnimation from "./components/BackgroundAnimation";
import ProjectsPage from "./pages/ProjectsPage";
import LoadingPage from "./pages/LoadingPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("hidden");

    const checkReady = () => {
      if (document.readyState === "complete" && document.fonts.ready) {
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

  useEffect(() => {
    alert("Website ini masih dalam tahap pengembangan/production!");
  
    document.body.classList.add("hidden");
  
    const checkReady = () => {
      if (document.readyState === "complete" && document.fonts.ready) {
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
      <header
        className={`fixed top-0 left-0 z-50 w-full `}
      >
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
