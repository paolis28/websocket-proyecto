import React, { useState } from 'react';
import axios from 'axios';

const AgregarRepartidor = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/Repartidor/crearRepartidor', {
        nombre: nombre,
        direccion: direccion
      });

      if (response.data.success) {
        setSuccessMessage('Repartidor agregado exitosamente');
        setNombre('');
        setDireccion('');
      } else {
        setErrorMessage('Error al agregar repartidor');
      }
    } catch (error) {
      setErrorMessage('Error de red al intentar agregar repartidor');
      console.error('Error al agregar repartidor', error);
    }
  };

  return (
    <div>
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
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AgregarRepartidor;