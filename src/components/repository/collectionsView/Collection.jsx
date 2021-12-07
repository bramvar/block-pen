import React from 'react'
import { Card } from 'react-bootstrap'

export default function Collection() {
    return (
        <Card className="d-flex m-2"  style={{flexBasis:"calc(33.33333% - 30px)"}}>
                    <Card.Img src="https://images.pexels.com/lib/api/pexels.png"/>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content
                        </Card.Text>
                        <a href="myrepo/d" className="stretched-link"></a> 
                    </Card.Body>            
         </Card>
    )
}
