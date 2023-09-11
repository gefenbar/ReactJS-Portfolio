import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
// import BasicScene from './Components/BasicScene';
import SocialBalls from './Components/SocialBalls';
import Navbar from './Components/Navbar';
import BackgroundScene from './Components/BackgroundScene';
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
// import ThreeDScene from './Components/ThreeDScene';
// import Galaxy from './Components/Galaxy';


export default function App() {

  return (
    <>
      <BackgroundScene />
      <SocialBalls />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  );
}
