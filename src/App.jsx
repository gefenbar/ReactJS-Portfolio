import { React, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Word from './pages/Word';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Icons from './Components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h1>Under Construction</h1>
      <p>I'm working hard to bring you an amazing website. Please check back later.</p>
    </div>
  );
};
export default function App() {
  return (
    <div className="app">
      <UnderConstruction />
      {/* <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Word />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      <Icons /> */}

    </div>
  );
}
