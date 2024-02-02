import FormularioLogin from './componentes-formulario/FormularioLogin'
import React, { useEffect } from 'react'
import './componentes-formulario/estilos_login.css'
import { checkLoginInForm } from './util/CheckLogin.jsx'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navegar = useNavigate()
  useEffect(() => {
    // document.body.classList.remove("fondo-body")
    if(checkLoginInForm()){
      navegar("/menu")
    }
  })

  return (
    <div className="container" id="login">
      <h1 id="titulo_front">Salas de Cine ULIMA</h1>
      <FormularioLogin />
    </div>
  )
}

export default LoginPage;
