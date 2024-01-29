import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Detalle from "./Detalle";
import ubi from "./ubicacion.png";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { peliculas, Salas_dispo } from "./Detalles";

const DetalleIndex = () => {
  const location = useLocation();
  const [peliculaActual, setPeliculaActual] = useState({
    titulo: "",
    hora: "",
    director: "",
    trailer: "",
    etiqueta1: "",
    etiqueta2: "",
  });

  useEffect(() => {
    const rutaActual = location.pathname;

    for (let i = 0; i < peliculas.length; i++) {
      if (rutaActual.includes(`/peli_${i}`)) {
        setPeliculaActual({
          titulo: peliculas[i].peliName,
          hora: peliculas[i].peliHora,
          etiqueta1: peliculas[i].peliEtiqueta[0],
          etiqueta2: peliculas[i].peliEtiqueta[1],
          trailer: peliculas[i].trailer,
          director: peliculas[i].director,
        });
        break;
      }
    }
  }, [location.pathname, peliculas]);

  return (
    <div className="row" style={{paddingLeft: "30px", paddingRight: "30px"}}>
      <div style={{ borderBottom: "solid 2px rgb(196, 196, 196)", width: "1180px" }}>
        <Typography variant="h1" className="mt-3" style={{ fontFamily: "Roboto", fontSize: "45px" }}>
          <b>Películas</b>
        </Typography>
      </div>
      <div className="mt-4 titu">
        <div style={{ fontSize: "40px", fontFamily: "Roboto" }}>{peliculaActual.titulo}</div>
        <div className="mb-3">
          <div className="ubi">
            <img src={ubi} alt="ubicacion" />
            &nbsp;
            <a>{peliculaActual.hora}</a>
            &nbsp;&nbsp;
            <img src={ubi} alt="ubicacion" />
            &nbsp;
            <a>{peliculaActual.director}</a>
          </div>
        </div>
      </div>
      <div className="col sinopsis" style={{ paddingLeft: "30px" }}>
        <div className="card" style={{ width: "700px", height: "400px" }}>
          <iframe height="400" src={peliculaActual.trailer} allowFullScreen />
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "300px", height: "400px" }}>
          <div className="card-body">
            <Typography variant="h5" className="card-title mb-3" style={{ fontSize: "30px" }}>
              Sinopsis
            </Typography>
            <Typography variant="body1" className="card-text" style={{ fontSize: "20px", fontFamily: "Roboto", marginBottom: "15px" }}>
              La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores"
            </Typography>
            <Chip label={peliculaActual.etiqueta1} />
            &nbsp;
            <Chip label={peliculaActual.etiqueta2} />
          </div>
        </div>
      </div>
      <p></p>
      <div style={{ paddingLeft: "30px" }}>
        <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
          <b>Salas disponibles</b>
        </Typography>
      </div>
      <div className="col-7">
        {Salas_dispo.map((detalle) => (
          <Detalle abrevia={detalle.abrevia} sala={detalle.sala} descripcion={detalle.descripcion} horarios={detalle.horarios} />
        ))}
      </div>
    </div>
  );
};

export default DetalleIndex;

