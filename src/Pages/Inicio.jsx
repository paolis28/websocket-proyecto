import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar";
import Carrusel from '../Components/Carrusel';
import Footer from '../Components/Footer';
import AgregarRepartidor from '../Components/AgregarRepartidor';

const Inicio = () => {
  const [repartidoresDisponibles, setRepartidoresDisponibles] = useState([]);
  const [consultando, setConsultando] = useState(false);

  useEffect(() => {
    obtenerRepartidoresDisponibles();
  }, []); 
  
  const obtenerRepartidoresDisponibles = async () => {
    if (consultando) return; 
    setConsultando(true);
    try {
      const response = await axios.get("http://localhost:3000/repartidores-disponibles");
      if (response.status === 200) {
        setRepartidoresDisponibles(response.data);
      } else {
        console.error("Error al obtener los repartidores disponibles:", response.statusText);
      }
    } catch (error) {
      console.error("Error al obtener los repartidores disponibles:", error);
    } finally {
      setConsultando(false);
    }
  };

  const agregarRepartidor = async (nuevoRepartidor) => {
    try {
      const response = await axios.post("http://localhost:3000/actualizar-repartidores-disponibles", {
        repartidores: [...repartidoresDisponibles, nuevoRepartidor]
      });
      if (response.status === 200) {
        console.log("Repartidor agregado correctamente");
        obtenerRepartidoresDisponibles(); 
      } else {
        console.error("Error al agregar el repartidor:", response.statusText);
      }
    } catch (error) {
      console.error("Error al agregar el repartidor:", error);
    }
  };

  return (
    <>
      <Navbar/>
      <Carrusel/>
      <div>
        <h1>Repartidores Disponibles y nuevos</h1>
        <ul>
          {repartidoresDisponibles.map(repartidor => (
            <li key={repartidor.id}>{repartidor.nombre}</li>
          ))}
        </ul>
        <AgregarRepartidor onAgregarRepartidor={agregarRepartidor} />
      </div>
      <Footer/>
    </>
  );
}

export default Inicio