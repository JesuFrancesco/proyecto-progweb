import { Typography,Button  } from "@mui/material";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Detalle = (props) => 
{
  const navigate = useNavigate();

  function botonreser(horario)
  {
    navigate(`/reserva/${props.id}`, {
      state : {
          sala : props.sala,
          hora : horario,
          titulo : props.titulo,
          imagen : props.imagen,
      }})
  }

  return (
    <div className="contenido_salas" style={{ marginBottom: "20px" }}>
      <div className="mb-2" style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{background: "#FA7525"}}
          variant="contained"
          color="primary"    
        >
          {props.abrevia}
        </Button>
        <Typography variant="h5" fontFamily="Roboto" style={{ marginLeft: "8px" }}>
          {props.sala}
        </Typography>
      </div>
          <Typography variant="body1" fontFamily="Roboto" fontSize="20px" marginBottom="15px" marginTop="15px">
            Horarios disponibles:
          </Typography>
          <div style={{ display: "flex" }}>
              <Button
                style={{ marginLeft: "5px"}}
                className="horarios"
                variant="outlined"
                onClick={() => botonreser(props.horarios)}
              >
                {props.horarios}
              </Button>
          </div>
    </div>
  );
};


export default Detalle;
