import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'; 



function App() {
  return (
    <Router> {}
      <div className="App">
        <Navi />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Routes>
          <Route path="/home" element={<Home />} /> {}
          {}
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;