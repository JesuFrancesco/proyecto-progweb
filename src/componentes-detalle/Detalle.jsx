
import { Link } from "react-router-dom";
const Detalle = (props) => {
  const rutaReserva = `/reserva/${props.id}`;
  return (
    <div className="contenido_salas">
      <div className="mb-2">
        <button type="button" className="boton_abre">
          {props.abrevia}
        </button>
        &nbsp;
        <b style={{fontSize: "30px", fontFamily:"Roboto"}}>{props.sala}</b>
      </div>
      <div style={{fontSize: "20px", fontFamily:"Roboto"}}>{props.descripcion}</div>
        {props.horarios.map((horario) => (
          <Link to={rutaReserva}>
          <button className="horarios">
            {horario}
          </button>
          </Link>
        ))}
    </div>
  );
};

export default Detalle;
