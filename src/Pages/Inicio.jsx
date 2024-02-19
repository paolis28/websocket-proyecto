import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Carrusel from "../Components/Carrusel";
import Footer from "../Components/Footer";
import AgregarRepartidor from "../Components/AgregarRepartidor";

const Inicio = () => {
  const [obtenerRepartidores, setObtenerRepartidores] = useState([]);

  const getRepartidores = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/Repartidor/conseguirRepartidor"
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      setObtenerRepartidores(data.repartidores);
    } catch (error) {
      console.error("Error al obtener repartidores", error);
    }
  };

  const longPolling = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/Repartidor/ObtenerRapartidorNuevo"
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      setObtenerRepartidores(data.repartidores);
     
    } catch (error) {
      console.error("Error al recibir notificación", error);
    }finally{
      longPolling();
    }
  };

  useEffect(() => {
    getRepartidores();
  }, []);

  useEffect(() => {
    longPolling();
  }, []);

  return (
    <>
      <Navbar />
      <Carrusel />
      <div>
        <h1>Repartidores Disponibles y Nuevos</h1>
        <ul>
          {obtenerRepartidores.length > 0 ? (
            obtenerRepartidores.map((repartidor, i) => (
              <div key={i}>
                <li>{repartidor.nombre}</li>
              </div>
            ))
          ) : (
            <p>No hay repartidores disponibles.</p>
          )}
        </ul>
        <AgregarRepartidor />
      </div>
      <Footer />
    </>
  );
};

export default Inicio;