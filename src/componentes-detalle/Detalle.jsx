import { useLocation, useNavigate } from "react-router-dom";
const Detalle = (props) => 
{
  const navigate = useNavigate()
  const location = useLocation()
  function botonreser()
  {
    
    navigate(`/reserva/${props.id}`, {
      state : {
          sala : props.sala,
          hora : props.horarios,
          titulo : props.titulo,
          imagen : props.imagen,
          codigoalu : 1 /*location.state.usuario_codigo*/
          
      }})
  }
  

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
          <button className="horarios" onClick={botonreser}>
            {horario}
          </button>
        ))}
    </div>
  );
};

export default Detalle;
