import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Mochila from "./Mochila";

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
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li className="nav-dropdown">
              <Link to="/proyectos" className="nav-link">Proyectos</Link>
              <ul className="dropdown">
                <li><Link to="/proyectos/mochila" className="nav-link">Optimización de Mochila</Link></li>
                <li><Link to="/proyectos/vue" className="nav-link">Futuro Proyecto en Vue.js</Link></li>
                <li><Link to="/proyectos/angular" className="nav-link">Futuro Proyecto en Angular</Link></li>
              </ul>
            </li>
            <li>
               <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/proyectos/mochila" element={<Mochila />} />
          <Route path="/proyectos/vue" element={<div>Proyecto en Vue.js (próximamente)</div>} />
          <Route path="/proyectos/angular" element={<div>Proyecto en Angular (próximamente)</div>} />
          <Route path="/proyectos/codeigniter" element={<div>Proyecto en CodeIgniter (próximamente)</div>} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;