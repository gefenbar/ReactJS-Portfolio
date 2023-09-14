import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
// import BackgroundScene from './Components/BackgroundScene';
import SocialBalls from './Components/SocialBalls';
export default function App() {
  return (
    <>
      <div className="app">
        {/* <BackgroundScene /> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
      <SocialBalls />
      <Footer />
    </>
  );
}
