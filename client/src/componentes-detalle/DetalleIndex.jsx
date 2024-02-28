import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import DetalleTitulo from "./DetalleTitulo";
import DetalleImagen from "./DetalleImagen";
import DetalleSala from "./DetalleSala";
import DetalleSinopsis from "./DetalleSinopsis";

const DetalleIndex = () => {
  const { pathFiltro } = useParams(); // Obtiene el parámetro de la URL
  const [pelicula, setPelicula] = useState([]);

  useEffect(() => {
    const obtenerDetalleHTTP = async () => {
        const response = await fetch(`https://pweb2024-api.azurewebsites.net/api/detalle?path=${pathFiltro}`);
        const json = await response.json();
        setPelicula(json);
    };
    obtenerDetalleHTTP();
  }, [pathFiltro]);

  return (
    <div className="row">
      
      <div className="peli">
        <div style={{ borderBottom: "solid 2px rgb(196, 196, 196)", width: "96%" }}>
          <Typography className="mt-3" style={{ fontFamily: "Roboto", fontSize: "45px" }}>
            Películas
          </Typography>
        </div>
      </div>
      {pelicula.map(peli => 
          <DetalleTitulo titulo={peli.title} year={peli.year} cast={peli.cast}/> 
      )}
      
      <div className="col-md-7">
      {pelicula.map(peli => <DetalleImagen url={peli.thumbnail}/>)
      }
        <p></p>
      {pelicula.map(peli => <DetalleSala titulo={peli.title} path={peli.path} url={peli.thumbnail} salas={peli.salas} key={peli.title}/>)
      }     
      </div>

      {pelicula.map(peli => <DetalleSinopsis extracto={peli.extract} generos={peli.genres}/>)
      }  
    </div>
  );
};

export default DetalleIndex;
