
import { Link } from "react-router-dom";
const Detalle = (props) => {
  const rutaReserva = `/reserva`;
  return (
    <div className="contenido_salas">
      <div className="mb-2">
        <button type="button" className="boton_abre">
          {props.abrevia}
        </button>
        &nbsp;
        <b style={{fontSize: "30px", fontFamily:"Roboto"}}>{props.sala}</b>
      </div>
      <p style={{fontSize: "20px", fontFamily:"Roboto"}}>{props.descripcion}</p>
      <p>
        {props.horarios.map((horario) => (
          <Link to={rutaReserva}>
          <button className="horarios">
            {horario}
          </button>
          </Link>
        ))}
      </p>
    </div>
  );
};

export default Detalle;
