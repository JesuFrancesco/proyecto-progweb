import FormularioLogin from './componentes-formulario/FormularioLogin'
import React, { useEffect } from 'react'
import './componentes-formulario/estilos_login.css'


const LoginPage = () => {

  useEffect(() => {
    document.body.classList.remove("fondo-body")

    // console.log("debug: LoginPage useEffect() => checkLoginForm")
  })

  return (
    <div className="container" id="login">
      <h1 id="titulo_front">Salas de Cine ULIMA</h1>
      <FormularioLogin />
    </div>
  )
}

export default LoginPage;
