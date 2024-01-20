import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import imgCarrusel1 from "../img/imgCarrusel-1.png";
import imgCarrusel2 from "../img/imgCarrusel-2.jpeg";
import imgCarrusel3 from "../img/imgCarrusel-3.jpeg";
import "../styles/Carrusel.css";

const Carrusel =()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"90%"}}>
            <Carousel.Item>
                <img src={imgCarrusel1} className="imgCarrusel" alt=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={imgCarrusel2} className="imgCarrusel" alt=""/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={imgCarrusel3} className="imgCarrusel" alt=""/>
            </Carousel.Item>
      </Carousel>
    );
}

export default Carrusel;