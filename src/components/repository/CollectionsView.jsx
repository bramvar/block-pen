import React from 'react'
import {Button} from 'react-bootstrap'
import GalleryContainer from './GalleryContainer'
import Collection from './collectionsView/Collection'

export default function CollectionsView(props) {
    return (
        <>
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

        <GalleryContainer>
            <Collection/>
        </GalleryContainer>
        </>
    )
}
