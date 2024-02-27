import Detalle from "./Detalle";
import Typography from "@mui/material/Typography";
import {useState } from "react";
import { Alert } from "@mui/material";

const Salas = (props) => {
  const [contadorSala] = useState(1);
  return (
    <div className="peli">
      <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
        <b style={{ marginLeft: "10px" }}>Salas disponibles</b>
      </Typography>

      {props.salas.length === 0 ? (
        <Alert style={{marginTop : "20px"}} severity="error">No hay funciones disponibles</Alert>
      ) : (
        props.salas.map((detalle, index) => (
          <Detalle
            abrevia={`S${contadorSala + index}`}
            key={index}
            sala={detalle.name}
            horarios={detalle.hour}
            fechas={detalle.date}
            titulo={props.titulo}
            path={props.path}
            imagen={props.url}
            usuario_obj7={props.usuario_obj6}
            id={detalle.funcion_id}
          />
        ))
      )}
    </div>
  );
};

export default Salas;

