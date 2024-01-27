import React, { useState } from "react";
import { Link } from "react-router-dom";

import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

import Detalle from "./Detalle";
import ubi from "./ubicacion.png";

const DetalleIndex = () => {
  const [filtro] = useState("");
  const Salas_dispo = [
    { abrevia: "S1", sala: "Sala A", descripcion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at itslayout", horarios: ["15:00", "17:00"]},
    { abrevia: "S2", sala: "Sala B", descripcion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at itslayout", horarios: ["16:00", "18:00"] },
    { abrevia: "S3", sala: "Sala C", descripcion: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at itslayout", horarios: ["20:00", "22:00"] }
  ];

  const salasFiltradas = Salas_dispo.filter((sala) =>
    sala.sala.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="row contenido">
      <div style={{borderBottom: "solid 2px rgb(196, 196, 196)", width: "960px"}}>
        <Typography variant="h1" className="mt-3" style={{ fontFamily: "Roboto", fontSize: "34px" }}>Películas</Typography>
      </div>
      <div className="mt-4 titu">
        <div style={{ fontSize: "34px", fontFamily: "Roboto"}}>Beekeper Sentencia de Muerte</div>
          <div className="mb-3">
            <div className="ubi">
              <img src={ubi} alt="ubicacion" />
              &nbsp;
              <Link>1hrs 50min</Link>
              &nbsp;&nbsp;
              <img src={ubi} alt="ubicacion" />
              &nbsp;
              <Link>David Ayer</Link>
            </div>
          </div>
        </div>
      <div className="col sinopsis" style={{paddingLeft: "30px"}}>
        <div className="card" style={{ width: "546px",height:"286px"}}>
          <iframe
            title="video"
            height="286"
            src="https://www.youtube.com/embed/J2pWkhP3ou0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "290px", height: "284px" }}>
          <div className="card-body">
            <Typography variant="h5" className="card-title mb-3" style={{ fontSize: "24px" }}>Sinopsis</Typography>
            <Typography variant="body1" className="card-text" style={{ fontSize: "16px", fontFamily: "Roboto", marginBottom:"15px"}}>
              La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores"
            </Typography>
            <Chip label="Acción"/>
            &nbsp;
            <Chip label="+14"/>
          </div>
        </div>
      </div>
      <p></p>
      <div style={{paddingLeft: "30px"}}>
        <Typography variant="h2" style={{fontSize: "34px", fontFamily: "Roboto"}}>Salas disponibles</Typography>
      </div>
      <div className="col-6">
        {salasFiltradas.map((detalle, i) => (
          <Detalle key={i} abrevia={detalle.abrevia} sala={detalle.sala} descripcion={detalle.descripcion} horarios={detalle.horarios} />
        ))}
      </div>
    </div>
  );
};

export default DetalleIndex;
