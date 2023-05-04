import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        localStorage.setItem("token", "true")
        navigate("/products")
    }


    return (
    <>
    <h2>Este es el Login</h2>
    <button onClick={handleLogin}>Ingresar</button>
    </>
    )
}

export default Login