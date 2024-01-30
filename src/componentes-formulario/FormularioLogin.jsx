import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputFormulario from './InputFormulario'

import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

const FormularioLogin = () => {
    // fondo
    document.body.classList.add("fondo-body")

    const [usuario, setUsuario] = useState({
        usuario: "",
        contrasena: "",
    })
    
    const [error, setError] = useState('')
    const [usuariosJSON, setUsuariosJSON] = useState([])
    const navigate = useNavigate()

    const obtenerUsuarios = async () => {    
        const response = await fetch("http://localhost:3000/usuarios.json")
        const data = await response.json()
        console.log("data: " + data)
        setUsuariosJSON(data)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        
        try {
            const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
            const todosLosUsuarios = [...usuariosGuardados.users, ...usuariosJSON.users]
            const user = todosLosUsuarios.find((u) => u.codigo === usuario.codigo && u.contrasena === usuario.contrasena)
        
            console.log(user)

            if (user) {
                navigate('/menu')
                document.body.classList.remove("fondo-body")
            } else {
                setError('Usuario o contraseña incorrectos')
            }
        } 
        catch (error) {
            console.error('Error al procesar el inicio de sesión:', error)
            setError('Error al procesar el inicio de sesión')
        }
    }

    // llamada http
    useEffect(() => {obtenerUsuarios()}, [])

    return <>
<div id="formulario">
    <form className="form needs-validation">
        
        {/* Input */}
        <InputFormulario title={"Usuario"} objeto={usuario} llave={"usuario"} setFn={setUsuario}/>
        <InputFormulario variante="password" title={"Contraseña"} objeto={usuario} llave={"contrasena"} setFn={setUsuario}/>
            
        {error && 
        (() => {
            if (error) {
                return <Alert 
                    severity="error"
                    sx={ { mt : 2 } }>
                    {error}
                </Alert>
            }
        })()}
    
        <center className='mt-3'>
            <Button variant='contained' sx={ {mr: "2em"} } onClick={handleLogin}>Iniciar sesion</Button>
            <Link to={"/registro"}><Button variant='contained'>Registrarse</Button></Link>
        </center>
    </form>
</div>
    </>
}

export default FormularioLogin