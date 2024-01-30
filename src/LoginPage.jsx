import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './componentes-login/estilos_a.css'

const LoginPage = () => {
  const [codigo, setCodigo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  document.body.classList.add("fondo-body")

  const handleLogin = (event) => {
    event.preventDefault()
    
    try {
      const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || { users: [] }
      const usuariosJSON = require('./data/usuarios.json');
      const todosLosUsuarios = [...usuariosGuardados.users, ...usuariosJSON.users]
      const user = todosLosUsuarios.find((usuario) => usuario.codigo === codigo && usuario.contrasena === contrasena)

      if (user) {
        navigate('/menu')
        document.body.classList.remove("fondo-body")
      } else {
        setError('Usuario o contraseña incorrectos')
      }
    } 
    catch (error) {
      console.error('Error al procesar el inicio de sesión:', error)
      setError('Error al procesar el inicio de sesión')
    }
  }

  return (
    <div className="container" id="login">
      <h1 id="titulo_front">SALAS DE CINE ULIMA</h1>

      <div className="formulario">
        <form className="form needs-validation">
          <div className="mb-3">
            <label className="form-label">
              Código
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputCodigo"
              aria-describedby="codigoHelp"
              placeholder="Ingresa tu código"
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Ingresa tu contraseña"
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <center>
            <button
              id="boton_especial"
              className="btn btn-primary boton-form"
              onClick={handleLogin}
            >
              Ingresar
            </button>
            <Link to="/registro" className="boton-form btn btn-light">
              Registrarse
            </Link>
          </center>
          <center>
            <p className="links">
              <Link className="text-decoration-none">
                ¿Te olvidaste tu contraseña?
              </Link>
            </p>
          </center>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;
