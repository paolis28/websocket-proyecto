import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const Registrar = ({ handleCloseRegistro }) => {
    const [nombre, setNombre] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [show, setShow] = useState(true);

    const handleRegistrar = async (e) => {
        e.preventDefault();
        try {
            const registro = await axios.post(
                "http://localhost:3000/Usuario/crearUsuario",
                {
                    params: {
                        nombre,
                        contrasena
                    }
                }
            );
            console.log(registro);
            console.log(registro.data.message);

            if (registro.data.message === "Usuario registrado") {
                alert("Usuario registrado");
                setNombre("");
                setContrasena("");
                setShow(false);
            } else {
                alert("Usuario no registrado");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleCloseRegistro}
            centered
        >
            <Modal.Header closeButton style={{ backgroundColor: "#600062", color: '#ebe700' }}>
                <Modal.Title>Registro de Usuario</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ backgroundColor: "#600062", color: '#ebe700' }}>
                <Form onSubmit={handleRegistrar}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Ingresa Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Usuario"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Ingresa Contraseña</Form.Label>
                        <Form.Control
                            type="Password"
                            placeholder="Contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="danger" onClick={handleCloseRegistro}>
                    Cerrar
                </Button>{' '}
                <Button variant="warning" type="submit">
                    Registrar
                </Button>
                </Form>
            </Modal.Body>

        </Modal>
    );
};

export default Registrar;
