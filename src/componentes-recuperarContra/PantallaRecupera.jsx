import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'

import InputRecupera from './InputRecupera'

const PantallaRecupera = () => {
    // fondo
    document.body.classList.add("fondo-body")

    const [usuario, setUsuario] = useState({
        codigo: "",
        contrasena: "",
    })

    const [formEnviado, setFormEnviado] = useState(false); // Nuevo estado para controlar si el formulario ya se ha enviado
    const [error, setError] = useState('')
    const [aviso, setAviso] = useState('')
    const [usuariosJSON, setUsuariosJSON] = useState([])

    const navigate = useNavigate()

    const obtenerUsuarios = async () => {    
        const response = await fetch("http://localhost:3000/proyecto-progweb/usuarios.json")
        const data = await response.json()
        setUsuariosJSON(data)
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setFormEnviado(true); 

        try {
            const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
            const todosLosUsuarios = [...usuariosGuardados.users, ...usuariosJSON]

            const user = todosLosUsuarios.find((u) => u.codigo === usuario.codigo)

            if (user) {
                setError("Se ha enviado un correo a " + usuario.codigo + "@aloe.ulima.edu.pe");
            } else {
                setError('Usuario o contraseña incorrectos');
            }
        } catch (error) {
            console.error('Error al procesar el inicio de sesión:', error)
            setError('Error al procesar el inicio de sesión')
        }
    }

    // llamada http
    useEffect(() => {
        obtenerUsuarios();
    }, []);

    return (
        <>
            <div id="formulario">
                <form className="form needs-validation">

                    {/* Input */}
                    <InputRecupera title={"Código para recuperación"} objeto={usuario} llave={"codigo"} setFn={setUsuario} disabled={formEnviado} />

                    {error && (
                        <Alert
                            severity="error"
                            sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <center className='mt-3'>
                        <Button variant='contained' sx={{ mr: "2em" }} style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white' }}
                            onClick={handleLogin} disabled={formEnviado}>Enviar</Button>

                        <Link to={"/registro"}>
                            <Button variant='contained' style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white' }} disabled={formEnviado}>Volver</Button>
                        </Link>
                    </center>
                </form>
            </div>
        </>
    );
}

export default PantallaRecupera;
