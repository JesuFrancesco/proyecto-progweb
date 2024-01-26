import React, { useState } from "react";
import Detalle from "./Detalle";
import ubi from "./ubicacion.png";
import Chip from '@mui/material/Chip';

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
    <div className="row">
      <div style={{ borderBottom: "solid 2px rgb(196, 196, 196)", width: "960px" }}>
        <h1 className="mt-4">Películas</h1>
      </div>
      <div className="mt-4 titu">
        <div style={{ fontSize: "34px" }}>Beekeper Sentencia de Muerte</div>
        <div className="mb-3">
          <div className="ubi">
            <img src={ubi} alt="ubicacion" />
            &nbsp;
            <a>1hrs 50min</a>
            &nbsp;&nbsp;
            <img src={ubi} alt="ubicacion" />
            &nbsp;
            <a>David Ayer</a>
          </div>
        </div>
      </div>
      <div className="col sinopsis">
        <div className="card" style={{ width: "35rem"}}>
            <iframe
              width="110%"
              height="320"
              src="https://www.youtube.com/embed/J2pWkhP3ou0"
              allowFullScreen>
            </iframe>
        </div>
      </div>


      <div className="col">
        <div className="card" style={{ width: "17rem", height: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title mb-3" style={{fontSize: "24px"}}>Sinopsis</h5>
            <p className="card-text" style={{fontSize: "16px"}}>
              La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores"
            </p>
            <Chip label="Acción"/>
            &nbsp;
            <Chip label="+14" />
          </div>
        </div>
      </div>
      <p></p>
      <div>
        <h2>Salas disponibles</h2>
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
