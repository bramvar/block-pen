import React, { useState,useContext} from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser]=useState()
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
        }).then(r => r.json())
            .then(token => {
                if(token.access_token){
                    console.log(token)
                }
                else{
                    console.log("Incorrect user/password")
                }
            })
    }

    const value = {
        currentUser, login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
