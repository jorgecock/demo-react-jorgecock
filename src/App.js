import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <section className="home">
      <h1>Hola, soy Jorge</h1>
      <p>Bienvenido a mi portafolio. Aquí podrás ver mis proyectos y experiencia.</p>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h1>Mis Proyectos</h1>
      <p>Aquí estarán los proyectos en los que he trabajado.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h1>Contacto</h1>
      <p>Puedes escribirme a mi correo para colaborar en proyectos.</p>
    </section>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <h2 className="logo">Mi Portafolio</h2>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;