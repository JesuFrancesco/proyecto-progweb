import { Typography,Button  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Detalle = (props) => 
{
  const navigate = useNavigate();
  const ruta = useLocation();
  console.log("--- Detalle.jsx");
  console.log(ruta.state.usuario_obj);

  function botonreser(horario)
  {
    navigate(`/reserva/${props.id}`, {
      state : {
          usuario_obj: ruta.state.usuario_obj,

          sala : props.sala,
          hora : horario,
          titulo : props.titulo,
          imagen : props.imagen,
          
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
