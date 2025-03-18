import React, { useEffect, useState } from "react";

function SatelliteTracker() {
  const [satelliteData, setSatelliteData] = useState(null);

  useEffect(() => {
    // URL de la API del Satellite Situation Center de la NASA
    const apiUrl = "https://sscweb.gsfc.nasa.gov/WS/sscr/2/spase"; 

    // Hacer la petición
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setSatelliteData(data))
      .catch((error) => console.error("Error al obtener datos de la NASA:", error));
  }, []);

  return (
    <div>
      <h1>Posición de Satélites</h1>
      {satelliteData ? (
        <pre>{JSON.stringify(satelliteData, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default SatelliteTracker;
