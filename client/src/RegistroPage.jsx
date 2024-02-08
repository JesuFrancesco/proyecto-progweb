import React from 'react'
import './componentes-formulario/estilos_registro.css'
import FormularioRegister from './componentes-formulario/FormularioRegister';


const RegistroPage = () => {
  return <>
      <div className="container" id="register">
        <h1 id="titulo_front">SALAS DE CINE ULIMA</h1>
        <FormularioRegister />
      </div>
    </>
}

export default RegistroPage
