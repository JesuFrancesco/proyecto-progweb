import FormularioLogin from './componentes-formulario/FormularioLogin'
import React from 'react'

import './componentes-login/estilos_login.css'

const LoginPage = () => {

  return (
    <div className="container" id="login">
      <h1 id="titulo_front">Salas de Cine ULIMA</h1>
      <FormularioLogin />
    </div>
  )
}

export default LoginPage;
