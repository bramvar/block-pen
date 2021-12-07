import React from 'react'
import {Button, Card } from 'react-bootstrap'
import GalleryContainer from './GalleryContainer'

export default function ImagesView() {
    return (
        <>
        <div>
            <Button  className="w-30 m-2 p-2"  type="submit" 
                                        style={{
                                            backgroundColor:"#234663", 
                                            borderRadius:"22px",
                                            borderStyle:"none"
                                        }}>
                        Agregar imagen
            </Button>          
        </div>
        <GalleryContainer>
            <Card className="d-flex m-2"  style={{flexBasis:"calc(33.33333% - 30px)"}}>
                 <Card.Img src="https://images.pexels.com/lib/api/pexels.png"/>                           
            </Card>
        </GalleryContainer>
        </>
    )
}
