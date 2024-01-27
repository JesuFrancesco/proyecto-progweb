
const Detalle = (props) => {
  return (
    <div className="contenido_salas">
      <div className="mb-2">
        <button type="button" className="boton_abre">
          {props.abrevia}
        </button>
        &nbsp;
        <b style={{fontSize: "20px", fontFamily:"Roboto"}}>{props.sala}</b>
      </div>
      <p style={{fontSize: "16px", fontFamily:"Roboto"}}>{props.descripcion}</p>
      <p>
        {props.horarios.map((horario, index) => (
          <button key={index} className="horarios">
            {horario}
          </button>
        ))}
      </p>
    </div>
  );
};

export default Detalle;
