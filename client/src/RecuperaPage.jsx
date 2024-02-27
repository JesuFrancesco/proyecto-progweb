import PantallaRecupera from './componentes-recuperarContra/PantallaRecupera'
import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { temaLogin } from './theme/Temas.jsx'
import './componentes-formulario/estilos_login.css'

const RecuperaPage = () => {

  return (
    <ThemeProvider theme={temaLogin}>
      <CssBaseline />
      <div className="container" id="login">
        <h1 id="titulo_front">Salas de Cine ULIMA</h1>
        <PantallaRecupera />
      </div>
    </ThemeProvider>
  )
}

export default RecuperaPage;
