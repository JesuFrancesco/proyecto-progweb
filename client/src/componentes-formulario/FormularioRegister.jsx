import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Alert from '@mui/material/Alert'
import InputFormulario from './InputFormulario'
import Button from '@mui/material/Button'

// Verificaciones de registro
const FormularioRegister = () => {
  const [usuarioRegister, setusuarioRegister] = useState({
    nombres: "",
    apellidos: "",
    codigo: "",
    contrasenha: "",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()
  
  const subirUsuario = async (usuario) => {
    const res = await fetch("https://pweb2024-api.azurewebsites.net/api/register", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        method: "POST",
        body: JSON.stringify(usuario)
    });
    const data = await res.json();

    if(!data.msg){
      alert("Usuario registrado");
      return true;
    } else {
      setError(data.msg);
      return false;
    }
  }
  
  const handleRegistrarse = async () => {
    const res = await subirUsuario(usuarioRegister)
    if (res)
      navigate('/')

  }

  return <Box className="formulario-center">
          <form className="form-register">
          <InputFormulario title={"Nombre"} objeto={usuarioRegister} llave={"nombres"} setFn={setusuarioRegister} />
          <InputFormulario title={"Apellido"} objeto={usuarioRegister} llave={"apellidos"} setFn={setusuarioRegister} />
          <InputFormulario title={"Codigo"} objeto={usuarioRegister} llave={"codigo"} setFn={setusuarioRegister} />
          <InputFormulario title={"Contraseña"} objeto={usuarioRegister} llave={"contrasenha"} setFn={setusuarioRegister} variante="password" />
      
          {error && (
            () => {
            if (error) {
              return <Alert severity="error" 
              sx={{mt: 2}}>
                {error}
              </Alert>;
            }}
            )()
          }

          <center>
            <Button 
              variant='contained' 
              sx={{ fontSize: '16px', color: 'white', px: 2 }} 
              onClick={handleRegistrarse}
            >
              Registrarse
            </Button>
          </center>
          </form>
        </Box>;
}

export default FormularioRegister