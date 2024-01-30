import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert'
import InputFormulario from './InputFormulario'
import Button from '@mui/material/Button'

// Verificaciones de registro
const FormularioRegister = () => {
  
  const [usuarioRegister, setusuarioRegister] = useState({
    nombre: "",
    apellido: "",
    codigo: "",
    contrasena: "",
  })

  
  const [usuariosData, setUsuariosData] = useState([])
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const obtenerUsuarios = async () => {    
    const response = await fetch("http://localhost:3000/proyecto-progweb/usuarios.json")
    const data = await response.json()
    setUsuariosData(data)
  }

  const handleRegistrarse = () => {
    // validaciones
    if (!usuarioRegister.nombre || !usuarioRegister.apellido || !usuarioRegister.codigo || !usuarioRegister.contrasena) {
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
    
    // si el usuario es válido, guardar en el navegador el nuevo usuario
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
    const nuevosUsuarios = { users: [...usuariosGuardados.users, usuarioRegister] }
    localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios))
  
    // Después de registrar, se envia al login 
    navigate('/')
  }

  // llamada http
  useEffect(() => {obtenerUsuarios();}, [])

  return <div className="formulario">
          <form className="form">
          <InputFormulario title={"Nombre"} objeto={usuarioRegister} llave={"nombre"} setFn={setusuarioRegister} />
          <InputFormulario title={"Apellido"} objeto={usuarioRegister} llave={"apellido"} setFn={setusuarioRegister} />
          <InputFormulario title={"Codigo"} objeto={usuarioRegister} llave={"codigo"} setFn={setusuarioRegister} />
          <InputFormulario variante="password" title={"Contraseña"} objeto={usuarioRegister} llave={"contrasena"} setFn={setusuarioRegister} />
      
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
            <Button variant='contained' onClick={handleRegistrarse}>
              Registrarse
            </Button>
          </center>
          </form>
        </div>;
}

export default FormularioRegister