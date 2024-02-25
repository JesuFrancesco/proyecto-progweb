import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Alert, Button, Box } from '@mui/material'
import { Stack, Typography, Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import InputFormulario from './InputFormulario'

const FormularioLogin = () => {
    
    const [usuario, setUsuario] = useState({
        codigo: "",
        contrasenha: "",
    })
    
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const handleLogin = async () => {
        setError(''); setLoading(true);

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
            navigate("/menu")
        } else {
            // Login incorrecto
            setError(data.msg)
        }

        setLoading(false);
    }

    // llamada verificar si el usuario ya esta logeado
    useEffect(() => {
        if (sessionStorage.getItem("usuario_objeto") !== null) {
            navigate("/menu")
        }
    }, [navigate])

    return <>
        <Box id="formulario">
            <form className="form-login needs-validation">
                
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
                {
                    error && 
                    (() => {
                        if (error) {
                            return <Alert 
                                severity="error"
                                sx={ { mt : 2 } }>
                                {error}
                            </Alert>
                        }
                    })()
                }
                {
                    loading && 
                    (() => {
                        if (loading) {
                            return <center>
                                <Box sx={{py:"1em"}}>
                                    <CircularProgress />
                                </Box>
                            </center>
                        }
                    })()
                }

                <Box id='botones' sx={{mt: "1em", textAlign: "center"}}>
                    <Stack spacing={7} direction="row">
                        <Button
                            onClick={handleLogin}
                            color='primary'
                            variant="contained" sx={{ fontSize: '16px', color: 'white' }}>
                            Iniciar sesion
                        </Button>

                        <Button 
                            onClick={() => navigate("/registro")}
                            color='primary'
                            variant="contained" sx={{ fontSize: '16px', color: 'white' }}>
                            Registrarse
                        </Button>
                    </Stack>
                </Box>
            </form>
        </Box>
    </>
}

export default FormularioLogin