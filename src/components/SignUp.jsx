import React from 'react'
import {Form, Button, Card, Container } from 'react-bootstrap'
import {Link} from "react-router-dom"

export default function SignUp() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center" 
                    style={{ minHeight: "100vh", background:"linear-gradient(110.38deg, #DCFFFD 2.19%, #99A9D1 96.77%)"}}>
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card style={{backgroundColor:"rgba(255, 255, 255,0.75)"}}>
                <Card.Body>
                    <h2 className="text-center mb-4">Registro</h2>
                    
                
                    <Form >
                        <Form.Group className="mb-2" id="email">
                            <Form.Control type="email" placeholder="E-mail address" required />
                        </Form.Group>
                        <div></div>
                        <Form.Group className="mb-2" id="password">                        
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-2" id="password-confirm">
                            <Form.Control type="password" placeholder="Confirm password" required />
                        </Form.Group>
                        <Button  className="w-100"  type="submit" style={{backgroundColor:"#234663"}}>Registrarse</Button>
                    </Form>
                </Card.Body>
            </Card>
            
            <div className="w-100 text-center mt-2">
                ¿Tienes una cuenta ya? <Link to="/login">Inicia sesión </Link>
            </div>
            </div>
        </Container>
    )
}
