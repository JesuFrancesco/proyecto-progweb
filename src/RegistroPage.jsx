import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './componentes-registro/estilos.css'
import usuariosData from './data/usuarios.json'

const RegistroPage = () => {
  const navigate = useNavigate()
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [codigo, setCodigo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')

  const handleRegistrarse = () => {

    if (!nombre || !apellido || !codigo || !contrasena) {
      setError('Por favor, completa todos los campos.')
      return
    }
    if (codigo.length !== 8 || isNaN(codigo)) {
      setError('El código debe ser un número de 8 dígitos.')
      return
    }
    if (usuariosData.users.some((usuario) => usuario.codigo === codigo)) {
      setError('El código ingresado ya existe. Por favor, ingrese uno diferente.')
      return
    }
    
    const nuevoUsuario = {
      nombre,
      apellido,
      codigo,
      contrasena,
    }

    
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
    const nuevosUsuarios = { users: [...usuariosGuardados.users, nuevoUsuario] }
    localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios))

    // Después de registrar, se envia al login 
    navigate('/')
  }

  return (
    <div className="container" id="register">
      <h1 id="titulo_front">SALAS DE CINE ULIMA</h1>

      <div className="formulario">
        <form className="form">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Código</label>
            <input
              type="text"
              className="form-control"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <center>
            <button
              type="button"
              className="boton-form btn btn-outline-warning"
              onClick={handleRegistrarse}
            >
              Registrarse
            </button>
          </center>
        </form>
      </div>
    </div>
  )
}

export default RegistroPage
