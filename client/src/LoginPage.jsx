import FormularioLogin from './componentes-formulario/FormularioLogin'
import React, { useEffect } from 'react'
import { checkLoginInForm } from './util/CheckLogin.jsx'
import { useNavigate } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { temaLogin } from './theme/Temas.jsx'
import './componentes-formulario/estilos_login.css'

const LoginPage = () => {
  const navegar = useNavigate()
  useEffect(() => {
    if(checkLoginInForm()){
      navegar("/menu")
    }
  })

  return (
    <ThemeProvider theme={temaLogin}>
      <CssBaseline />
      <div className="container" id="login">
        <h1 id="titulo_front">Salas de Cine ULIMA</h1>
        <FormularioLogin />
      </div>
    </ThemeProvider>
  )
}

export default LoginPage;
