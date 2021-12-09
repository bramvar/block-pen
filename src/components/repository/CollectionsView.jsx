import React from 'react'
import {Button} from 'react-bootstrap'
import GalleryContainer from './GalleryContainer'
import Collection from './collectionsView/Collection'
import { useAuth } from '../../contexts/AuthContext'

export default function CollectionsView(props) {

    const {getUser} = useAuth()
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
                        Agregar colección
            </Button>          
        </div>

        <GalleryContainer>
            {
                collection.map((col)=>(
                    <Collection title={col.name} description={col.description}/>
                    ))
            }
            
        </GalleryContainer>
        </>
    )
}
