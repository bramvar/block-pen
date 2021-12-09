import { MenuItem} from '@mui/material' 
import React from 'react'
import { Container, Form, FormControl, Navbar,Button, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


export default function Dashboard() {

    const userId = sessionStorage.getItem("currentId")
    const user = sessionStorage.getItem("userName")

    const {getUser} = useAuth()
    getUser(userId)

    

    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark" className="py-1">
                <Container className="mx-2">
                    <Navbar.Brand href="/" className="py-0">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="50"
                            height="45"
                            className="d-inline-block align-center"
                        />{' '}
                            
                        Block pen
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <MenuItem component={Link} to={'myrepo'}>Team 1</MenuItem>
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/myrepo">Repo</Nav.Link>
                        <Nav.Link href="/practice">Practice</Nav.Link>
                        </Nav>
                        <Form className="d-flex justify-content-center">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="my-2"
                                aria-label="Search"
                            />
                            <Button className="h-50 mx-2 my-2 py-2 " variant="outline-success">Search</Button>
                        </Form>
                        <Navbar.Text>
                            Signed in as: <a href="#r">{user}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>              
            
            <Outlet />
        </div>
    )
}
