import React from 'react'
import {Form, Button, Card, Container } from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom"

export default function LogIn() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center" 
                    style={{ minHeight: "100vh", background:"linear-gradient(110.38deg, #DCFFFD 2.19%, #99A9D1 96.77%)"}}>
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        
                        <Form >
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>

                            <Button  className="w-100"  type="submit">Iniciar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    ¿No te has registrado aún? <Link to="/signup" >Intentalo</Link>, será rápido 
                </div>
            </div>    
            
        </Container>
    )
}
