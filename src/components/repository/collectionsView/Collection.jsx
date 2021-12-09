import React from 'react'
import { Card } from 'react-bootstrap'

export default function Collection({title,description,img}) {
    return (
        <Card className="d-flex m-2"  style={{flexBasis:"calc(33.33333% - 30px)"}}>
                    <Card.Img src={img}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <a href="myrepo/d" className="stretched-link"></a> 
                    </Card.Body>            
         </Card>
    )
}
