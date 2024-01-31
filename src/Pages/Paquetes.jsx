import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const Paquetes = () => {
    const [estadoPaquete, setEstadoPaquete] = useState("En preparación");
    const [actualizacion, setActualizacion] = useState(false);
    const [historialEstados, setHistorialEstados] = useState([]);

    const obtenerEstadoPaquete = async () => {
        try {
            const response = await axios.get("http://localhost:3000/estado-paquete");
            if (response.status === 200) {
                const data = response.data;
                setEstadoPaquete(data.estado);
                setHistorialEstados(prevHistorial => [...prevHistorial, data.estado]); 
                setActualizacion(true);
            } else {
                console.error("Error al obtener el estado del paquete:", response.statusText);
            }
        } catch (error) {
            console.error("Error al obtener el estado del paquete:", error);
        }
    };

    const cambiarEstadoEntregado = async () => {
        try {
            const response = await axios.post("http://localhost:3000/cambiar-estado-paquete/Entregado");
            if (response.status === 200) {
                setActualizacion(true); 
            } else {
                console.error("Error al cambiar el estado del paquete:", response.statusText);
            }
        } catch (error) {
            console.error("Error al cambiar el estado del paquete:", error);
        }
    };

    useEffect(() => {
        console.log("Ejecutando efecto de useEffect");
        const interval = setInterval(() => {
            obtenerEstadoPaquete();
            setActualizacion(false);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar />
            <h1>HOLA SOY LA PAGINA DE Paquetes</h1>
            <div>Estado del paquete: {estadoPaquete}</div>
            {actualizacion && <p>El estado del paquete se ha actualizado.</p>}

            <button onClick={cambiarEstadoEntregado}>Cambiar Estado</button>

            <div>
                <h2>Historial de estados:</h2>
                <ul>
                    {historialEstados.map((estado, index) => (
                        <li key={index}>{estado}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Paquetes;