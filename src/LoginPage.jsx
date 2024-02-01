import FormularioLogin from './componentes-formulario/FormularioLogin'
import React, { useEffect } from 'react'
import { checkLoginForm } from './util/CheckLogin'
import './componentes-formulario/estilos_login.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navegacion = useNavigate();

  useEffect(() => {
    document.body.classList.remove("fondo-body")

    // console.log("debug: LoginPage useEffect() => checkLoginForm")
    checkLoginForm(navegacion);
  })

  return (
    <div className="container" id="login">
      <h1 id="titulo_front">Salas de Cine ULIMA</h1>
      <FormularioLogin />
    </div>
  )
}

export default LoginPage;
