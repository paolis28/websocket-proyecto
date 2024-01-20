import React from 'react';
import "../styles/Inicio.css";
import Navbar from "../Components/Navbar";
import Carrusel from '../Components/Carrusel';
import Footer from '../Components/Footer';

const Inicio=()=>{
    return(
        <>
            <Navbar/>
            <Carrusel/>
            <Footer/>
        </>
    );
}

export default Inicio;