import React from 'react'
import FormularioRegister from './componentes-formulario/FormularioRegister';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { temaLogin } from './theme/Temas.jsx'
import './componentes-formulario/estilos_registro.css'

const RegistroPage = () => {
  return <>
      <ThemeProvider theme={temaLogin}>
        <CssBaseline />
        <div className="container" id="register">
          <h1 id="titulo_front">Salas de Cine ULIMA</h1>
          <FormularioRegister />
        </div>
      </ThemeProvider>
    </>
}

export default RegistroPage
