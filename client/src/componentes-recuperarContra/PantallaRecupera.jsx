import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import InputRecupera from './InputRecupera';
import { useNavigate } from 'react-router-dom'

const PantallaRecupera = () => {
    const [usuario, setUsuario] = useState({
        codigo: "",
        contrasena: "",
        codigoVerificacion: ""
    });
    const navegar = useNavigate()
    const [formEnviado, setFormEnviado] = useState(false);
    const [error, setAlerta] = useState('');
    const [aviso, setAviso] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch( `http://localhost:8000/api/correoCode?codigo_usuario=${usuario.codigo}`);
            const data = await response.json()
            if (data.msg=="Aceptado") {
                setFormEnviado(true);
                setAlerta('');
                setAviso(`Se ha enviado un correo a ${usuario.codigo}@aloe.ulima.edu.pe con su código de verificación.`);
            }
            else if (data.msg=="Error1"){
                
                setAlerta('Usuario incorrecto o no registrado')

            }
            else {
                setAlerta('Error en el servicio de correos');
            }
        } catch (error) {
            console.error('Error al procesar el envio del correo:', error);
            setAlerta('Error al procesar el envio del correo');
        }
    };

    const handleVerification = async (event) => {
        event.preventDefault();
        // console.log(usuario.codigo)
        // console.log(usuario.codigoVerificacion)
        // console.log(usuario.contrasena)
        try {
            const response = await fetch('https://pweb2024-api.azurewebsites.net/api/verificacion', {
                method: 'POST',
                body: JSON.stringify({
                    codigo_usuario: usuario.codigo,
                    codigo: usuario.codigoVerificacion,
                    nueva_contrasenha: usuario.contrasena
                })
            });
            const data = await response.json()
            if (data.ok) {
                // const responseData = await response.text();
                setAviso("Se ha cambiado su contraseña. Regresando al Login");
                setTimeout(() => {
                    navegar("/");
                }, 2000);

            } else {
                // const responseData = await response.text();
                setAlerta("Codigo incorrecto");
            }
        } catch (error) {
            console.error('Error al verificar código:', error);
            setAlerta('Error al verificar código');
        }
    };

    return (
        <>
            <div id="formulario">
                <form className="form-login needs-validation">
                    <InputRecupera title={"Código de usuario"} objeto={usuario} llave={"codigo"} setFn={setUsuario} disabled={formEnviado} />
                    <InputRecupera title={"Contraseña nueva"} objeto={usuario} llave={"contrasena"} setFn={setUsuario} variante="password" disabled={formEnviado} />
                    {formEnviado && (
                        <InputRecupera title={"Código de verificación"} objeto={usuario} llave={"codigoVerificacion"} setFn={setUsuario} />
                    )}
                    {aviso && (
                        <Alert severity="success" sx={{ mt: 2}}>
                            {aviso}
                        </Alert>
                    )}
                    {error && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    )}
                    <center className='mt-3'>
                        {!formEnviado && (
                            <Button variant='contained' sx={{ mr: "2em" }} style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white' }}
                                onClick={handleLogin} disabled={formEnviado} hidden={formEnviado}>Enviar</Button>
                        )}
                        {formEnviado && (
                            <Button variant='contained' sx={{ mr: "2em" }} style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white' }}
                                onClick={handleVerification}>Verificar</Button>
                        )}
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
