import React, { useState } from 'react';

const AgregarRepartidor = ({ onAgregarRepartidor }) => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRepartidor = { nombre, direccion };
    onAgregarRepartidor(nuevoRepartidor);
    setNombre('');
    setDireccion('');
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
