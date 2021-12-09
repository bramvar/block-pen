import React, { useState,useContext} from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser]=useState()
    const [token, setToken] = useState()
    const [loading, setLoading] = useState(true)
    

    function login(user, password){
        console.log("pressed login")
        let opts={
            'username':user,
            'password':password
        }
        console.log(opts)

        fetch('https://apiwebp.herokuapp.com/login',{
            method:'POST',
            
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(opts)
        }).then(r => {
                if (r.status===200) return r.json()
            }) 
            .then(token => {
                if(token.access_token){
                    console.log(token)
                    sessionStorage.setItem("token",token.access_token)
                    sessionStorage.setItem("currentId",token.userId)
                }
                else{
                    console.log("Incorrect user/password")
                }
            })
            .catch(error=>{
                console.error("eRRor:", error)
            })
    }

    function getUser(id){

        fetch("https://apiwebp.herokuapp.com/users/"+id,{
            method:'GET',
        
        }).then(r => {
                if (r.status===200) return r.json()
            }) 
            .then(data => {
                console.log("tab" +data.username)
                sessionStorage.setItem("userName",data.username)
                var map=JSON.parse(Object.entries(data.colections[0]))
                sessionStorage.setItem("collections",map)
              
            })
            .catch(error=>{
                console.error("eRRor:", error)
            })
    }



    const value = {
        currentUser, login, getUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
