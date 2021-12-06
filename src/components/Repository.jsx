import React from 'react'
import { Container,Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Repository() {
    return (
        <Container fluid className="d-flex w-100 m-0 p-0">
            <div style={{
                    display:"flex",
                    background:"#E8DCEC",
                    width:"300px",
                    flexDirection:"column",
                    position:"sticky",
                    height: "100vh",
                    top:"100px",
                    borderRadius: "0px 17px 0px 0px",
                
                }}>
                    
                <div style={{display:"flex"}}>
                    
                </div>
                
            </div>

            <div style={{
                    display:"flex",
                    width:"100%", 
                    flexDirection:"column"
                }}>
                
                <div>
                    <Button  className="w-30 m-2 p-2"  type="submit" 
                                        style={{
                                            backgroundColor:"#234663", 
                                            borderRadius:"22px",
                                            borderStyle:"none"
                                        }}>
                        Agregar colección
                    </Button>
                </div>
                <div style={{
                    display:"flex",
                    flexFlow:"row wrap",
                    margin:"5px"
                }}>
                    <Card className="d-flex m-2" component={Link} to={'/login'} style={{flexBasis:"calc(33.33333% - 30px)"}}>
                        <Card.Img/>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content
                            </Card.Text>
                            <a href="/practice" className="stretched-link"></a> 
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </Container>
    )
}
