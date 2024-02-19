import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert'
import InputFormulario from './InputFormulario'
import Button from '@mui/material/Button'

// Verificaciones de registro
const FormularioRegister = () => {
  
  const [usuarioRegister, setusuarioRegister] = useState({
    nombres: "",
    apellidos: "",
    codigo: "",
    contrasena: "",
  })
  const subirUsuario = async (usuario) => {
    const res = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        body: JSON.stringify(usuario)
    });
    const data = await res.json();

    if(!data.msg){
        alert("usuario registrado")
      
    } else {
        alert(data.msg)
    }
}
  
  const [usuariosData, setUsuariosData] = useState([])
  const [error, setError] = useState("")
  const navigate = useNavigate()
  

  const handleRegistrarse = async() => {
    // validaciones
    if (!usuarioRegister.nombres || !usuarioRegister.apellidos || !usuarioRegister.codigo || !usuarioRegister.contrasena) {
      setError('Por favor, completa todos los campos.')
      return
    }
  
    if (usuarioRegister.codigo.length !== 8 || isNaN(usuarioRegister.codigo)) {
      setError('El código debe ser un número de 8 dígitos.')
      return
    }
  
    if (usuariosData.some((usuario) => usuario.codigo === usuarioRegister.codigo)) {
      setError('El código ingresado ya existe. Por favor, ingrese uno diferente.')
      return
    }
    
   subirUsuario(usuarioRegister)
    // Después de registrar, se envia al login 
    navigate('/')
  }
   
  return <div className="formulario">
          <form className="form">
          <InputFormulario title={"Nombre"} objeto={usuarioRegister} llave={"nombres"} setFn={setusuarioRegister} />
          <InputFormulario title={"Apellido"} objeto={usuarioRegister} llave={"apellidos"} setFn={setusuarioRegister} />
          <InputFormulario title={"Codigo"} objeto={usuarioRegister} llave={"codigo"} setFn={setusuarioRegister} />
          <InputFormulario title={"Contraseña"} objeto={usuarioRegister} llave={"contrasena"} setFn={setusuarioRegister} variante="password" />
      
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
            <Button variant='contained' style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '7rem' }} onClick={handleRegistrarse}>
              Registrarse
            </Button>
          </center>
          </form>
        </div>;
}

export default FormularioRegister