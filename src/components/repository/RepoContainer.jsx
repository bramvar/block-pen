import React from 'react'

export default function RepoContainer(props) {
    return (
        <div style={{
            display:"flex",
            width:"100%", 
            flexDirection:"column"
        }}>
            {props.children}
        </div>
    )
}
