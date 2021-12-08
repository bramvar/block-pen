import React, { useState } from 'react'

const AuthContext = React.createContext()

export default function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser]=useState()
    const [loading, setLoading] = useState(true)

    function login(user, password){
        
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
