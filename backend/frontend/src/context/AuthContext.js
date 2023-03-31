import { createContext,useState, useEffect } from "react";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider =({children})=>{

    const [authTokens, setauthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const loginUser=async(e)=>{
        e.preventDefault()
        console.log('Form Submitted')
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"http://localhost:3000",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Credentials":true
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        // response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/login");
        const data =await response.json()
        console.log('data:', data)
    }


    const contextData={
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}