import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
// El React.StrictMode fuerza el renderizado doble de la página
  // - La seccion de peliculas se queda fijado abajo al cambiar la página
  // - El chatbot duplica el numero de respuestas con cada interaccion
  // - Las alertas de login y register salen dos veces
  // etc.
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);