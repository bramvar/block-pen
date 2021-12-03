import React from 'react'
import { Container, Form, FormControl, Navbar,Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">Block pen</Navbar.Brand>
                    
                    <Navbar.Collapse className="justify-content-end">
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
            <Link to="/myrepo">repo</Link> 
            <Link to="/practice">practice</Link>
            <Link to="/stats">stats</Link>
            <Outlet />
        </div>
    )
}
