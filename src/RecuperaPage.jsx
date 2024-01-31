import PantallaRecupera from './componentes-recuperarContra/PantallaRecupera'
import React from 'react'

import './componentes-login/estilos_login.css'

const RecuperaPage = () => {

  return (
    <div className="container" id="login">
      <h1 id="titulo_front">Salas de Cine ULIMA</h1>
      <PantallaRecupera />
    </div>
  )
}

export default RecuperaPage;
