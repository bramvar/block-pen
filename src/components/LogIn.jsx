import React, {useRef,useState} from 'react'
import {Form, Button, Card, Container,Alert} from 'react-bootstrap'
import {Link, useNavigate} from "react-router-dom"
import {useAuth} from '../contexts/AuthContext'

export default function LogIn() {

    const userRef =useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(userRef.current.value, passwordRef.current.value)
            navigate('')
            
        } catch{
            setError('ocurrio un error al intertar iniciar sesión')
        }
        
        setLoading(false)
    }


    return (
        <Container fluid className="d-flex align-items-center justify-content-center" 
                    style={{ minHeight: "100vh", background:"linear-gradient(110.38deg, #DCFFFD 2.19%, #99A9D1 96.77%)"}}>
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Iniciar Sesión</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="user" className="mb-2">
                                <Form.Control type="input" required placeholder="User" ref={userRef}/>
                            </Form.Group>

                            <Form.Group id="password" className="mb-2" >
                                <Form.Control type="password" required placeholder="Password" ref={passwordRef}/>
                            </Form.Group>

                            <Button  className="w-100"  type="submit" disabled={loading}
                                    style={{
                                        backgroundColor:"#234663", 
                                        borderRadius:"22px",
                                        borderStyle:"none"
                                    }}
                            >Iniciar</Button>
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
