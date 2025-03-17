import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mochila = () => {
  const [elementos, setElementos] = useState([]);
  const [pesoMax, setPesoMax] = useState(0);
  const [caloriasMin, setCaloriasMin] = useState(0);
  const [mejorCombinacion, setMejorCombinacion] = useState([]);
  const [mejorPeso, setMejorPeso] = useState(0);
  const [mejorCalorias, setMejorCalorias] = useState(0);

  useEffect(() => {
    fetch("/elementos.json")
      .then((response) => response.json())
      .then((data) => setElementos(data))
      .catch((error) => console.error("Error cargando JSON:", error));
  }, []);

  const calcularMochila = () => {
    let mejorCombinacionLocal = [];
    let mejorPesoLocal = Infinity;
    let mejorCaloriasLocal = 0;

    const combinaciones = (arr) => {
      let resultado = [[]];
      for (let elemento of arr) {
        let temp = resultado.map((subset) => [...subset, elemento]);
        resultado.push(...temp);
      }
      return resultado;
    };

    for (let combinacion of combinaciones(elementos)) {
      let pesoTotal = combinacion.reduce((sum, e) => sum + (e.peso || 0), 0);
      let caloriasTotales = combinacion.reduce((sum, e) => sum + (e.calorias || 0), 0);

      if (pesoTotal <= pesoMax && caloriasTotales >= caloriasMin) {
        if (pesoTotal < mejorPesoLocal) {
          mejorCombinacionLocal = combinacion;
          mejorPesoLocal = pesoTotal;
          mejorCaloriasLocal = caloriasTotales;
        }
      }
    }

    setMejorCombinacion(mejorCombinacionLocal);
    setMejorPeso(mejorPesoLocal);
    setMejorCalorias(mejorCaloriasLocal);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Optimización de Mochila</h1>
      <div className="mb-3">
        <label className="form-label">Peso máximo permitido:</label>
        <input type="number" className="form-control" value={pesoMax} onChange={(e) => setPesoMax(parseInt(e.target.value))} />
      </div>
      <div className="mb-3">
        <label className="form-label">Calorías mínimas requeridas:</label>
        <input type="number" className="form-control" value={caloriasMin} onChange={(e) => setCaloriasMin(parseInt(e.target.value))} />
      </div>
      <button className="btn btn-primary" onClick={calcularMochila}>Calcular</button>
      <h2 className="mt-4">Resultados</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Elemento</th>
            <th>Peso</th>
            <th>Calorías</th>
          </tr>
        </thead>
        <tbody>
          {mejorCombinacion.map((e, index) => (
            <tr key={index}>
              <td>{e.nombre}</td>
              <td>{e.peso}</td>
              <td>{e.calorias}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Peso total: {mejorPeso}, Calorías totales: {mejorCalorias}</p>
    </div>
  );
};

export default Mochila;
