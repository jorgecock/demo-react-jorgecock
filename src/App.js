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
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/proyectos">Proyectos</Link>
              <ul>
                <li>
                  <Link to="/proyectos/mochila">Optimización de Mochila</Link>
                </li>
                <li>
                  <Link to="/proyectos/vue">Futuro Proyecto en Vue.js</Link>
                </li>
                <li>
                  <Link to="/proyectos/angular">Futuro Proyecto en Angular</Link>
                </li>
                <li>
                  <Link to="/proyectos/codeigniter">Futuro Proyecto en CodeIgniter</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/proyectos/mochila" element={<Mochila />} />
          <Route path="/proyectos/vue" element={<div>Proyecto en Vue.js (próximamente)</div>} />
          <Route path="/proyectos/angular" element={<div>Proyecto en Angular (próximamente)</div>} />
          <Route path="/proyectos/codeigniter" element={<div>Proyecto en CodeIgniter (próximamente)</div>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;