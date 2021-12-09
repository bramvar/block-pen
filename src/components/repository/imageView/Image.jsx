import React from 'react'
import { Card } from 'react-bootstrap'

export default function Image({url}) {
    return (
        <Card className="d-flex m-2"  style={{flexBasis:"calc(33.33333% - 30px)"}}>
            <Card.Img src={url}/>                           
        </Card>
    )
}
