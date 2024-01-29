import * as React from 'react';
import { Link } from 'react-router-dom';

import { Stack, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';

import { peliculas } from './componentes-detalle/Detalles';
import Carrusel from './componentes-menu/Carrusel';

const MenuPage = () => {
  return (
      <div className='container'>

      {/* carrusel de banners */}
      <Carrusel peliculas={peliculas} />

      <div className='mt-3' style={{ textAlign: 'center' }}>
        {/* input de busqueda */}
        <div>
          <TextField label="Búsqueda" variant="standard" size="medium"

          className="form-control my-3"
          placeholder="Busca por título, actores, actrices, género, etc"
          style={{width:"700px"}}/>
        </div>
      
        {/* botones */}
        <Box display="flex" justifyContent="center">
          <Stack spacing={14} direction="row">

            <Link to="/peliculas-index">
              <Button variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '230px' }}>
                Películas
              </Button>
            </Link>

            <Link to="/salas">
              <Button variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '230px' }}>
                Salas
              </Button>
            </Link>

          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default MenuPage;