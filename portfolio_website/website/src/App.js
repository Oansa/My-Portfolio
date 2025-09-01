
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <aside className="sidebar">
          <h2>My Portfolio</h2>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <section id="hero" className="hero-section">
                <h1>Welcome to my portfolio!</h1>
                <h2 style={{marginTop: '1rem', fontWeight: 'normal'}}>Kamande Muiruri here.</h2>
              </section>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
