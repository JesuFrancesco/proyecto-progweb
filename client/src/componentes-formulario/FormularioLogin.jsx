import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import { Typography, Container } from '@mui/material';

import InputFormulario from './InputFormulario'

const FormularioLogin = () => {
    // fondo
    document.body.classList.add("fondo-body")

    const [usuario, setUsuario] = useState({
        codigo: "",
        contrasenha: "",
    })
    
    const [error, setError] = useState('')

    const navigate = useNavigate()
    
    const handleLogin = async () => {
        const dataUsername = {
            codigo : usuario.codigo,
            contrasenha : usuario.contrasenha
        }

        const response = await fetch("http://localhost:8000/api/login", {
            method : "post",
            body : JSON.stringify(dataUsername)
        })
        const data = await response.json()

        if (data.msg === "") {
            // Login correcto
            // Almacenando en localStorage
            sessionStorage.setItem("usuario_objeto", JSON.stringify(data.usuario))
            document.body.classList.remove("fondo-body")
            navigate("/menu")
        } else {
            // Login incorrecto
            setError(data.msg)
        }
    }


    // llamada http
    useEffect(() => {
        if (sessionStorage.getItem("USERNAME") !== null) {
            navigate("/menu")
            return
        }
    }, [navigate])

    return <>
    <div id="formulario">
        <form className="form needs-validation">
            
            {/* Input */}
            <InputFormulario title={"Código"} objeto={usuario} llave={"codigo"} setFn={setUsuario} />
            <InputFormulario title={"Contraseña"} objeto={usuario} llave={"contrasenha"} setFn={setUsuario} variante="password" />
            <Container className="text-center" style={{ marginTop: '40px' }}>
                <Typography variant="body1" gutterBottom>
                    <p>¿Olvidaste tu contraseña?</p>
                </Typography>
                <Link to={"/recuperacion-correo"} style={{ color: '#1976D2', textDecoration: 'none', fontWeight: 'bold' }}>
                    Recuperación de Contraseña
                </Link>
            </Container>   
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