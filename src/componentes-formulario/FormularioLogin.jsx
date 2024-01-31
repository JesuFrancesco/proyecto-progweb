import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

import InputFormulario from './InputFormulario'

const FormularioLogin = () => {
    // fondo
    document.body.classList.add("fondo-body")

    const [usuario, setUsuario] = useState({
        codigo: "",
        contrasena: "",
    })
    
    const [error, setError] = useState('')
    const [usuariosJSON, setUsuariosJSON] = useState([])

    const navigate = useNavigate()

    const obtenerUsuarios = async () => {    
        const response = await fetch("http://localhost:3000/proyecto-progweb/usuarios.json")
        const data = await response.json()
        setUsuariosJSON(data)
    }

    const handleLogin = (event) => {
        event.preventDefault()
        
        try {
            const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
            const todosLosUsuarios = [...usuariosGuardados.users, ...usuariosJSON]

            // console.log(todosLosUsuarios.forEach(e => console.log(e)))

            const user = todosLosUsuarios.find((u) => u.codigo === usuario.codigo && u.contrasena === usuario.contrasena)

            if (user) {
                document.body.classList.remove("fondo-body")
                console.log(`ola: ${user.nombre}`)
                navigate('/menu', {
                    state : {
                        usuario_obj: user.codigo
                    }
                })
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
    useEffect(() => {
        obtenerUsuarios();
    }, []);

    return <>
    <div id="formulario">
        <form className="form needs-validation">
            
            {/* Input */}
            <InputFormulario title={"Código"} objeto={usuario} llave={"codigo"} setFn={setUsuario} />
            <InputFormulario title={"Contraseña"} objeto={usuario} llave={"contrasena"} setFn={setUsuario} variante="password" />
                
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
        
            <div className='botones mt-3' style={ {textAlign: "center"} }>
                <Button className='boton' variant='contained' sx={ {mr: "2em"} }  
                onClick={ handleLogin }>Iniciar sesion</Button>
                
                <Link to={"/registro"}>
                    <Button className='boton' variant='contained' >Registrarse</Button>
                </Link>
            </div>
        </form>
    </div>
    </>
}

export default FormularioLogin