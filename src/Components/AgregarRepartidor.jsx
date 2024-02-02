import React, { useState } from 'react';
import axios from 'axios';

const AgregarRepartidor = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const NewRepartidor = await axios.post('http://localhost:3000/Repartidor/crearRepartidor',{
        nombre : nombre,
        direccion: direccion
      });
      if(NewRepartidor){
        alert("Repartidor agregado")
      }
    } catch (error) {
      console.log("No se pudod agregar repartidor",error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del repartidor"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Dirección del repartidor"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <button type="submit">Agregar Repartidor</button>
    </form>
  );
};

export default AgregarRepartidor;
