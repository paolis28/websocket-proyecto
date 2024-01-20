import React from "react";
import "../styles/Navbar.css";
import imgInicioSesion from "../img/inicioSesion.png";
import imgLogoHaxo from "../img/LogoHaxo.png";
import { NavLink } from "react-router-dom";
import {Modal, Button, Form } from 'react-bootstrap'
import { useState } from "react";
 
const NavbarGLobal = ()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
    <>
        <header className="NavbarGlobal">
            <nav className="navGlobal">
                <div className="spNombreLogo">
                    <img src={imgLogoHaxo} alt=""/>
                </div>

                <div className="containerPuntos">
                    <ul className="listaNav">
                        <NavLink to="/" className="links">
                            Inicio
                        </NavLink> 

                        <NavLink to="/Menu" className="links">
                            Menú
                        </NavLink> 

                        <NavLink to="/Paquete" className="links">
                            Paquetes
                        </NavLink>

                        <NavLink to="/Chat" className="links">
                            Chat
                        </NavLink>
                    </ul>
                </div>

                <div className="containerSesion">
                    <img src={imgInicioSesion} alt=""/>
                    <label onClick={handleShow}>Ingresar</label>
                </div>
            </nav>
        </header>


        <Modal
            show={show}
            onHide={handleClose}
            centered
        >

        <Modal.Header closeButton style={{backgroundColor:"#600062", color:'#ebe700'}}>
          <Modal.Title>Inicio de sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{backgroundColor:"#600062", color:'#ebe700'}}>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Ingresa Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Ingresa Contraseña</Form.Label>
                    <Form.Control type="Password" placeholder="Contraseña" />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer style={{backgroundColor:"#600062", color:'#ebe700'}}>
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="warning" onClick={handleClose}>Ingresar</Button>
        </Modal.Footer>
      </Modal>
    </>
    );
}

export default NavbarGLobal