import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import PersonalProjects from "./components/PersonalProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  // Reveal-on-scroll observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grain bg-bg ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <PersonalProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  // Persist dark mode preference
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const saved = localStorage.getItem("asm-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
    // Listen for theme changes from Navbar
    const onChange = (e) => setTheme(e.detail);
    window.addEventListener("asm-theme", onChange);
    return () => window.removeEventListener("asm-theme", onChange);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
