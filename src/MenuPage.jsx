import * as React from 'react';
import { Stack, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const MenuPage = () => {
  return (
    <div className='container'>
      <div
        style={{
          backgroundImage: `url('https://www.elespectador.com/resizer/ALZbDVzMdpJ_jmvg-88B8cNROTg=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/EELZVZRRJNAFDD2SMMUSB6RXZI.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            color: 'white',
          }}
        >
          <h2 style=
          {{ margin:"10px", fontFamily: "Road Rage, Roboto", fontSize: "64px"}}>EL NIÑO Y LA GARZA</h2>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            color: 'white',
          }}
        >
          <Link to="/reserva">
            <Button
            variant="outlined"
            style={{ margin:"10px" ,width: '230px',
              fontSize: '16px', color: 'white' ,
              borderColor: "white",
              borderWidth: "2px",}}>
              comprar tickets
            </Button>
          </Link>
        </div>
      </div>

      <div className='mt-3' style={{ textAlign: 'center' }}>
        <div>
          <TextField label="Búsqueda" variant="standard" size="medium"

          className="form-control my-3"
          placeholder="Busca por título, actores, actrices, género, etc"
          style={{width:"700px"}}
        />


        </div>
        
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
/*/* El niño y la garza */

/* El niño y la garza */

/* El niño y la garza */





