import React from 'react'

export default function GalleryContainer(props) {
    return (
        <div style={{
            display:"flex",
            flexFlow:"row wrap",
            margin:"5px"
        }}>
            {props.children}
        </div>
    )
}
