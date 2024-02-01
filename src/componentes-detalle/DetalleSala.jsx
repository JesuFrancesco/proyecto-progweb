import Detalle from "./Detalle";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const Salas = (props) => {
  const [salas, setSalas] = useState([]);
  const [salasUL, setSalasUL] = useState([]);
  const [contadorSala] = useState(1);

  const obtenerSalas = async () => {
      const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/salas.json");
      const data = await response.json();
      setSalas(data.buildings);
  };

  const obtenerSalasUL = async () => {
      const response = await fetch("https://raw.githubusercontent.com/JesuFrancesco/proyecto-progweb/main/public/salas.json");
      const data = await response.json();
      setSalasUL(data);
  };

  useEffect(() => {
    obtenerSalas();
    obtenerSalasUL();
  }, []);

  return (
    <div className="peli">
      <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
        <b style={{ marginLeft: "10px" }}>Salas disponibles</b>
      </Typography>

      {salas.map((detalle, index) => (
        <Detalle
          abrevia={`C${contadorSala + index}`}
          key={index}
          sala={detalle.name}
          horarios={detalle.available_times}
          titulo={props.titulo}
          id={props.path}
          imagen={props.url}
          usuario_obj7={props.usuario_obj6}
        />
      ))}
      {salasUL.map((detalle, index) => (
        <Detalle
          abrevia={`UL${contadorSala + index}`}
          key={index}
          sala={detalle.salaName}
          horarios={detalle.salaTimes}
          titulo={props.titulo}
          id={props.path}
          imagen={props.url}
          usuario_obj7={props.usuario_obj6}
        />
      ))}
    </div>
  );
};

export default Salas;
