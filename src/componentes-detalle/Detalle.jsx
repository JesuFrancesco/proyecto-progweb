
const Detalle = (props) => {
  return (
    <div className="contenido_salas">
      <div className="mb-2">
        <button type="button" className="btn btn-secondary">
          {props.abrevia}
        </button>
        &nbsp;
        <b>{props.sala}</b>
      </div>
      <p>{props.descripcion}</p>
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
