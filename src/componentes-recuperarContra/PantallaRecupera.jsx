import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
// import { Resend } from 'resend'

import InputRecupera from './InputRecupera'

const PantallaRecupera = () => {
    // fondo
    document.body.classList.add("fondo-body")

    const [usuario, setUsuario] = useState({
        codigo: "",
        contrasena: "",
    })

    const [formEnviado, setFormEnviado] = useState(false); // Nuevo estado para controlar si el formulario ya se ha enviado
    const [error, setAlerta] = useState('')
    const [aviso, setAviso] = useState('')
    const [usuariosJSON, setUsuariosJSON] = useState([])

    const obtenerUsuarios = async () => {    
        const response = await fetch("http://localhost:3000/proyecto-progweb/usuarios.json")
        const data = await response.json()
        setUsuariosJSON(data)
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        
        try {
            const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
            const todosLosUsuarios = [...usuariosGuardados.users, ...usuariosJSON]
            
            const user = todosLosUsuarios.find((u) => u.codigo === usuario.codigo)
            
            if (user) {
                // TODO: logica para la recuperacion
                setFormEnviado(true); 
                setAlerta('');
                setAviso("Se ha enviado un correo a " + usuario.codigo + "@aloe.ulima.edu.pe");
                //const correoE= usuario.codigo + "@aloe.ulima.edu.pe"
                //enviarEmail(correoE)
            } else {
                setAlerta('Usuario incorrecto');
            }
        } catch (error) {
            console.error('Error al procesar el inicio de sesión:', error)
            setAlerta('Error al procesar el inicio de sesión')
        }
    }

    // llamada http
    useEffect(() => {
        obtenerUsuarios();
    }, []);
    

    // const resend = new Resend('re_RjMkWQNV_L8YjouiyjHYix9kMBf28Bkuy');
    /*
    const enviarEmail = async (correoE) => {
        try {
            // LOGICA DE API: TODO: CORS
            const { data, error } = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: [correoE],
                subject: "asunto",
                html: "contenido",
            });

            if (error) {
                console.error('Error sending email:', error);
                setAlerta('Error al enviar el correo');
            } else {
                console.log('Email sent successfully:', data);
                setAviso('Correo enviado exitosamente');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setAlerta('Error al enviar el correo');
        }

        console.log("envio realizado")
    }*/

    return (
        <>
            <div id="formulario">
                <form className="form needs-validation">

                    {/* Input */}
                    <InputRecupera title={"Código para recuperación"} objeto={usuario} llave={"codigo"} setFn={setUsuario} disabled={formEnviado} />
                    <InputRecupera title={"Ingrese contraseña nueva"} objeto={usuario} llave={"contrasena"} setFn={setUsuario} variante="password"  />
                    {aviso && (
                        <Alert
                            severity="success"
                            sx={{ mt: 2}}>
                            {aviso}
                        </Alert>
                    )}
                    

                    {error && (
                        <Alert
                            severity="error"
                            sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <center className='mt-3'>
                        <Button variant='contained' sx={{ mr: "2em" }} style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white' }}
                            onClick={handleLogin} disabled={formEnviado} hidden={formEnviado}>Enviar</Button>

                        <Link to={"/"}>
                            <Button variant='contained' style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white' }} disabled={formEnviado}>Volver</Button>
                        </Link>
                    </center>
                </form>
            </div>
        </>
    );
}

export default PantallaRecupera;
