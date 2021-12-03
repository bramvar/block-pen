import { MenuItem } from '@mui/material' 
import React from 'react'
import { Container, Form, FormControl, Navbar,Button, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="/">Block pen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <MenuItem component={Link} to={'/myrepo'}>Team 1</MenuItem>
                    <Link to="/practice">practice</Link>
                    <Link to="/stats">stats</Link>
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/myrepo">Repo</Nav.Link>
                        <Nav.Link href="/practice">Practice</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Navbar.Text>
                            Signed in as: <a href="#r">M</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>              
            
            <Outlet />
        </div>
    )
}
