import React from 'react'
import {Button} from 'react-bootstrap'
import GalleryContainer from './GalleryContainer'
import Image from './imageView/Image'

export default function ImagesView() {

    const currentColl=sessionStorage.getItem("currentCollection")
    const collection =JSON.parse(sessionStorage.getItem("collections"))


   
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
            {
                collection[Number(currentColl)].images.map((img)=>(
                    <Image url={img}/>     
                ))
            }
            
        </GalleryContainer>
        </>
    )
}
