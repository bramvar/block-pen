import React from 'react'
import { Container} from 'react-bootstrap'
import {Outlet} from 'react-router-dom'
import RepoContainer from './repository/RepoContainer'

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

            <RepoContainer>
                <Outlet />
            </RepoContainer>
            
        </Container>
    )
}
