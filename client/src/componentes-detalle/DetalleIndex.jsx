import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DetalleImagen from "./DetalleImagen";
import DetalleTitulo from "./DetalleTitulo";
import DetalleSala from "./DetalleSala";
import DetalleSinopsis from "./DetalleSinopsis";

const DetalleIndex = () => {
  
  const [pelicula, setPelicula] = useState([]);
  const [filtro, setFiltro] = useState("");

  const errorComponent = <>
    <img src="https://http.cat/images/404.jpg" alt="" />
  </>

  const [error, setError] = useState(false);
  useEffect(() => {
    const obtenerDetalleHTTP = async () => {
      const response = await fetch(`http://localhost:8000/api/detalle/${filtro}`);
      const json = await response.json();
      setPelicula(json);
    }
    obtenerDetalleHTTP();
  }, [filtro])
  


  /*const movie = useParams();
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
  const [error, setError] = useState(false);*/
  
  
  // Buscar peliculas...
  /*useEffect(() => {
    const buscarPeliculasHTTP = async () => {
      const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/peliculas_limpio.json");
      const peliculas = await response.json();
      const path = movie.id
      
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
    buscarPeliculasHTTP();
  }, [movie]);*/

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

    <DetalleTitulo titulo={pelicula.title} year={pelicula.year} /*cast={peliculaActual.cast}*//> 
      
      <div className="col-md-7">
        <DetalleImagen url={pelicula.thumbnail}/>
        <p></p>
        <DetalleSala titulo={pelicula.title} path={pelicula.path} url={pelicula.thumbnail}/>
      </div>

    {/*<DetalleSinopsis extracto={pelicula.extract} generos={pelicula.generos}/> */} 
    </div>
  );
};

export default DetalleIndex;
