import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import Detalle from "./Detalle";
import { Salas_dispo } from "./Detalles";

const DetalleIndex = (props) => {
  const errorComponent = <>
    <img src="https://http.cat/images/404.jpg" alt="" />
  </>

  const location = useParams();
  const [peliculaActual, setPeliculaActual] = useState({
    id: "",
    path: "",
    titulo: "",
    year: "",
    cast: [],
    trailer: "",
    extract: "",
    generos: [],
    url: []
  });
  const [error, setError] = useState(false);

  const buscarPeliculasHTTP = async () => {
    const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/peliculas_limpio.json");
    const peliculas = await response.json();

    // const rutaActual = location.pathname;
    // const path = rutaActual.split("/")[2]

    const path = location.id
    // console.log(path.id)
    
    const peliculaActual = peliculas.find((pelicula) => pelicula.path === path);
    if(peliculaActual){
      setPeliculaActual({
        id: peliculaActual.id,
        path: peliculaActual.path,
        titulo: peliculaActual.title,
        year: peliculaActual.year,
        cast: peliculaActual.cast,
        trailer: peliculaActual.thumbnail,
        extract: peliculaActual.extract,
        generos: peliculaActual.genres,
        url: peliculaActual.thumbnail
      })
    } else {
      setError(true);
    }
  }

  // Buscar peliculas...
  useEffect(() => {
    buscarPeliculasHTTP();
  }, [peliculaActual]);

  if(error === true){
    return errorComponent
  }

  return (
    <div className="row">
      
      <div className="peli">
        <div style={{ borderBottom: "solid 2px rgb(196, 196, 196)", width: "96%" }}>
          <Typography className="mt-3" style={{ fontFamily: "Roboto", fontSize: "45px" }}>
            Películas
          </Typography>
        </div>
      </div>

      <div className="mt-4 titu">
        <div className="peli">
        <div style={{ fontSize: "40px", fontFamily: "Roboto" }}>{peliculaActual.titulo}</div>
          <div className="mb-3">
            <div className="ubi">
            <DateRangeIcon />
            <Link style={ {marginRight: "1em"} }>&nbsp; {peliculaActual.year}</Link>

            <PersonIcon />
            <Link>&nbsp; {peliculaActual.cast[0]}</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-md-7">
        <div className="trailer">
          <img src={peliculaActual.url} alt="" 
          className='w-100' style={ {height: "500px", overflow: "hidden", objectFit: "contain"} }/>
        </div>
        <p></p>
          <div className="peli">
            
              <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
                <b style={{marginLeft:"10px"}}>Salas disponibles</b>
              </Typography>
            
            {Salas_dispo.map((detalle) => (
              <Detalle 
                abrevia={detalle.abrevia} 
                sala={detalle.sala} 
                descripcion={detalle.descripcion} 
                horarios={detalle.horarios} 
                titulo = {peliculaActual.titulo}
                id = {peliculaActual.path}
                imagen ={peliculaActual.url}
                usuario_obj7={props.usuario_obj6}/>
            ))}
          </div>
      </div>

      {/* columna de sinopsis */}
      <div className="col-md">

        <div className="card" style={{ marginLeft: "130px"}}>
          <div className="card-body">
            <Typography variant="h5" className="card-title mb-3" style={{ fontSize: "30px" }}>
              Sinopsis
            </Typography>

            {/* la sinopsis */}
            <Typography variant="body1" className="card-text" style={{ fontSize: "20px", fontFamily: "Roboto", marginBottom: "15px" }}>
              {
                peliculaActual.extract
              }
            </Typography>
            
            {/* los chip */}
            {
              peliculaActual.generos.map( tag => <Chip label={tag} />)
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default DetalleIndex;

