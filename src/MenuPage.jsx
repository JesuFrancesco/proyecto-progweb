import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Stack, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Header from './componentes-buscador/Header'

import { peliculas } from './componentes-detalle/Detalles';
import Carrusel from './componentes-menu/Carrusel';

const MenuPage = () => {
  const ruta = useLocation();
  const usuario = ruta.state.usuario_obj;

  console.log("--- MenuPage.jsx");
  console.log(usuario);

  return <>
    <Header title={"Bienvenido " + ruta.state.usuario_obj.nombre} />
    <div>

      {/* carrusel de banners */}
      <Carrusel peliculas={peliculas} />

      <div className='mt-3' style={{ textAlign: 'center' }}>
        {/* input de busqueda */}
        <div>
          <TextField label="Búsqueda" variant="standard" size="medium"

          className="form-control my-3"
          placeholder="Busca por título, actores, actrices, género, etc"
          style={{width:"80%"}}/>
        </div>
      
        {/* botones */}
        <Box display="flex" justifyContent="center">
          <Stack spacing={14} direction="row">

            
              <Link to={"/peliculas-index"} state = { {usuario_obj: ruta.state.usuario_obj}}>
                <Button
                  variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '7rem' }}>
                  Películas
                </Button>
              </Link>

            <Link to="/salas" state={{
              usuario_obj: ruta.state.usuario_obj
            }}>
              <Button variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '7rem' }}>
                Salas
              </Button>
            </Link>

          </Stack>
        </Box>
      </div>
    </div>
    </>
};

export default MenuPage;