import React from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CV from "../pages/CV";
import Projects from "../pages/Projects";
import "../styling/Navbar.css";
import LandPage from "../pages/LandPage";

const HomePage = () => {
  return (
    <div>
      <LandPage />
      <Navbar />
      <About />
      <Projects />
      <CV />
      <Contact />
    </div>
  );
};

export default HomePage;
