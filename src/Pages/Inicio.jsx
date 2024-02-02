import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../Components/Navbar";
import Carrusel from '../Components/Carrusel';
import Footer from '../Components/Footer';
import AgregarRepartidor from '../Components/AgregarRepartidor';

const Inicio = () => {
  const [obtenerRepartidores, setObtenerRepartidores] = useState([]);

  useEffect(() => {
    getRepartidores();
    obtenerResClientes();
  }, []); 
  
  const getRepartidores = async ()=>{
    const NewRepartidor = await axios.get('http://localhost:3000/Repartidor/conseguirRepartidor')
    console.log(NewRepartidor.data.repartidor);
    setObtenerRepartidores(NewRepartidor.data.repartidor)
  }

  const obtenerResClientes = async ()=>{
    try {
      const res = await fetch('http://localhost:3000/Repartidor/ObtenerRapartidorNuevo');
      if(!res.ok){
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }
      console.log(res.data);
    } catch (error) {
      console.log("Error ante la notificacion",error);
    }finally{
      obtenerResClientes();
    }
  }

  return (
    <>
      <Navbar/>
      <Carrusel/>
      <div>
        <h1>Repartidores Disponibles y nuevos</h1>
        <ul>
          {obtenerRepartidores.length>0 ? obtenerRepartidores.map((repartidor,i) => (
          <div key={i}>
          <li>{repartidor.nombre}</li>
          </div>
          )):null}
        </ul>
        <AgregarRepartidor/>
      </div>
      <Footer/>
    </>
  );
}

export default Inicio