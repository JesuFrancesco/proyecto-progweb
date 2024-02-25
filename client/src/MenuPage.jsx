import { useState, useEffect } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { Stack, Button, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';

import { checkLogin } from './util/CheckLogin';
import Header from './componentes-buscador/Header'
import Footer from './componentes-buscador/Footer';
import Carrusel from './componentes-menu/Carrusel';

// ==
const MenuPage = () => {
  const navegacion = useNavigate();
  
  const [funcionesPreview, setFuncionesPreview] = useState([]);

  const [usuario, setUsuario] = useState({});
  const [funciones, setFunciones] = useState([]);
  const [open, setOpen] = useState(false);
  const cargando = open && funciones.length === 0;

  
  useEffect(() => {
    const usu = sessionStorage.getItem('usuario_objeto');
    // const usuario = (usu)? JSON.parse(usu) : {};
    if(usu){
      setUsuario(JSON.parse(usu))
    }
  }, [])

  // para el login
  useEffect(() => {
    if (!checkLogin()) {
      alert("No has iniciado sesión.");
      navegacion("/");
    }
  });
  
  // para el carousel
  useEffect(() => {
    const obtenerPreviewFuncionesHTTP = async () => {
      const res = await fetch(`http://localhost:8000/api/funciones?num=5`);
      const data = await res.json();

      if(!data.msg){
        setFuncionesPreview(data.funciones);
      }
    }
    obtenerPreviewFuncionesHTTP();

  }, []);

  // para la busqueda
  useEffect(() => {
    const obtenerAllFuncionesHTTP = async () => {
      const res = await fetch(`http://localhost:8000/api/funciones`);
      const data = await res.json();

      if(!data.msg){
        setFunciones(data.funciones);
      }
    }

    obtenerAllFuncionesHTTP();

  }, [cargando]);

  // para la asincronia en busqueda
  useEffect(() => {
    if (!open) setFunciones([])
  }, [open])

  return <>
    <Header title={`Bienvenido ${usuario.nombres} (${usuario.codigo})`} />

    <Box sx={{py: "4em"}}>
      <Carrusel funciones={ funcionesPreview } />

      {/* Elementos debajo del carrusel */}
      <Box className='mt-3' sx={{ textAlign: 'center' }}>
        
        {/* Buscador */}
        <Box sx={{display: "flex", justifyContent: "center"}}>

          {/* icono buscador */}
          <Box sx={{p: "1em"}}>
            <SearchIcon color='inherit' />
          </Box>
          
          {/* autocomplete input */}
          <Autocomplete
            id="autocompletado-async"
            sx={{ width: "40%", mb: "1em" }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            onChange={
              (_, value) => navegacion(`/reserva/${value.path}`, {state: value.state})
            }
            isOptionEqualToValue={(op, valor) => op.label === valor.label}
            getOptionLabel={op => op.label}
            options={
              (funciones.map(funcion => 
                  {
                    return {
                      label: `${funcion.movie.title} | ${funcion.sala.name} ${funcion.window.date} @ ${funcion.window.hour}`, 
                      path: funcion.movie.path,
                      state: {       
                        sala : funcion.sala.name,
                        hora : funcion.window.hour,
                        fecha : funcion.window.date,
                        titulo : funcion.movie.title,
                        imagen : funcion.movie.thumbnail
                      }
                    }
                  }
                )
              )
            }

            loading={cargando}
            loadingText="Cargando funciones..."
            renderInput={(params) => (
              <TextField
                {...params}
                label="Búsqueda"
                InputLabelProps={{ sx: {color: "text.primary"} }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {cargando ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />

        </Box>
      
        {/* Botóones de sala y película */}
        <Box display="flex" justifyContent="center">
          <Stack spacing={14} direction="row">

              <Link to={"/peliculas-index/1"}>
                <Button
                  color='primary'
                  variant="contained" sx={{ fontSize: '16px', color: 'white', width: '7rem' }}>
                  Películas
                </Button>
              </Link>

            <Link to="/salas">
              <Button 
                color='primary'
                variant="contained" sx={{ fontSize: '16px', color: 'white', width: '7rem' }}>
                Salas
              </Button>
            </Link>

          </Stack>
        </Box>
      </Box>
    </Box>

    <Footer />
  </>
};

export default MenuPage;