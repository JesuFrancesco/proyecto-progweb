import { useState, useEffect } from 'react';
import { checkLogin } from './util/CheckLogin';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Stack, Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Header from './componentes-buscador/Header'
import Footer from './componentes-buscador/Footer';

import { peliculas } from './componentes-detalle/Detalles';
import Carrusel from './componentes-menu/Carrusel';

const MenuPage = () => {
  const navegacion = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  // const [usuario, setUsuario] = useState((sessionStorage.getItem('usuario_objeto')) ? JSON.parse(sessionStorage.getItem('usuario_objeto')): {});
  const usu = sessionStorage.getItem('usuario_objeto');
  const usuario = (usu)? JSON.parse(usu) : {};
  console.log("--- MenuPage.jsx");
  console.log(usuario);
  const handleInputChange = (event) => {
    setBusqueda(event.target.value);
  };

  useEffect(() => {
    if (!checkLogin()) {
        // alert("No has iniciado sesión.");
        navegacion("/");
    }
})
  console.log(busqueda)

  return <>
    <Header title={"Bienvenido " + usuario.nombre} />
    <div className='py-5'>


      <Carrusel peliculas={peliculas} />

      <div className='mt-3' style={{ textAlign: 'center' }}>
        
        <div>
          <TextField label="Búsqueda" variant="standard" size="medium"

          className="form-control my-3"
          placeholder="Busca por título, actores, actrices, género, etc"
          style={{width:"80%"}}
          value={busqueda}
          onChange={handleInputChange}/>
        </div>
      
        
        <Box display="flex" justifyContent="center">
          <Stack spacing={14} direction="row">

              <Link to={"/peliculas-index/1"}>
                <Button
                  variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '7rem' }}>
                  Películas
                </Button>
              </Link>

            <Link to="/salas">
              <Button variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '7rem' }}>
                Salas
              </Button>
            </Link>

          </Stack>
        </Box>
      </div>
    </div>
    <Footer />
    </>
};

export default MenuPage;