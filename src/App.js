import React from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import ParticleBackground from "./utils/particles";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";


function App() {
  const location = useLocation();
  // console.log(location);
  const renderLocation = location.pathname === "/";
  
  return (
    <div className="App">
      
      {/* particles.js */}

      {
        renderLocation && <ParticleBackground id="particles"/>
      }

      {/* navbar */}
      <Navbar />
      
      {/* main page contents */}
      <div className="App__main-page">
      <ToastContainer />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
