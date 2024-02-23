import Detalle from "./Detalle";
import Typography from "@mui/material/Typography";
import {useState } from "react";

const Salas = (props) => {
/*  const [salas, setSalas] = useState([]);
  const [salasUL, setSalasUL] = useState([]);
  const [contadorSala] = useState(1);

  const obtenerSalas = async () => {
      const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/salasv2.json");
      const data = await response.json();
      setSalas(data);
  };

  const obtenerSalasUL = async () => {
      const response = await fetch("https://raw.githubusercontent.com/JesuFrancesco/proyecto-progweb/main/public/salas.json");
      const data = await response.json();
      setSalasUL(data);
  };

  useEffect(() => {
    obtenerSalas();
    obtenerSalasUL();
  }, []);*/
  const [contadorSala] = useState(1);
  return (
    <div className="peli">
      <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
        <b style={{ marginLeft: "10px" }}>Salas disponibles</b>
      </Typography>
      {/*salasUL.map((detalle, index) => (
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
      ))*/}
      {props.salas.map((detalle, index) => (
        <Detalle
          abrevia={`S${contadorSala + index}`}
          key={index}
          sala={detalle.name}
          horarios={detalle.hour}
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
