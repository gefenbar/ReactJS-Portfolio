import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
// import BasicScene from './Components/BasicScene';
// import SocialBalls from './Components/SocialBalls';
import Navbar from './Components/Navbar';
// import BackgroundScene from './Components/BackgroundScene';
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
// import Model from './Components/My3DModel'
// import ThreeDScene from './Components/ThreeDScene';
// import Galaxy from './Components/Galaxy';


export default function App() {

  return (
    <>
      <div className="app">
        {/* <BackgroundScene /> */}
        {/* <SocialBalls /> */}
        {/* <Model /> */}
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
      </div >

      <Footer />
      </>
  );
}
