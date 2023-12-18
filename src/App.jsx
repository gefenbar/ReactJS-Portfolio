import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Experience = lazy(() => import('./pages/Experience'));
const Skills = lazy(() => import('./pages/Skills'));
const Icons = lazy(() => import('./Components/Icons'));

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h1>Under Construction</h1>
      <p>This website is currently under construction.</p>
      <p>Please check the progress on GitHub:</p>
      <a href="https://github.com/gefenbar/">
        View on GitHub
      </a>
    </div>
  );
};

// Create a CSS loader component
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      {/* <UnderConstruction /> */}
      <div id="landscape-message">
        Please rotate your device to portrait mode.
      </div>
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
            <Route path="/experience" element={<Suspense fallback={<Loader />}><Experience /></Suspense>} />
            <Route path="/projects" element={<Suspense fallback={<Loader />}><Projects /></Suspense>} />
            <Route path="/skills" element={<Suspense fallback={<Loader />}><Skills /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<Loader />}><Contact /></Suspense>} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Icons />
      </Suspense>
    </div>
  );
}

export default App;
