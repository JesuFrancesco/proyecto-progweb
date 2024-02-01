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
    <div className="contenido_salas" style={{ marginBottom: "40px" }}>
      <div className="mb-2" style={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained" color="primary">
          {props.abrevia}
        </Button>
        <Typography variant="h5" fontFamily="Roboto" style={{ marginLeft: "8px" }}>
          {props.sala}
        </Typography>
      </div>
      <Typography variant="body1" fontFamily="Roboto" fontSize="20px" marginBottom="15px">
        {props.descripcion}
      </Typography>
      {props.horarios.map((horario) => (
        <Button
          style={{marginLeft: "5px"}}
          className="horarios"
          variant="outlined"
          onClick={()=>botonreser(horario)}
        >
          {horario}
        </Button>
      ))}
    </div>
  );
};

export default Detalle;
