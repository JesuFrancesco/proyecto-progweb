import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box  } from '@mui/material';

export default function ReservaDialog(props) 
{
    const botoni={
        borderRadius: "5px",
        border: "0px",
        backgroundColor: "#FA7525",
        color: "white",
        fontFamily: "Arial",
        paddingTop: "8px",
        paddingBottom: "8px",
        boxShadow: "0px 2px 5px -2px rgb(0, 0, 0,7)"
      };

    const cuadro ={
      border : "1px dashed #ff6200",
      backgroundColor: "#FA75250A",
      borderRadius: "7px",
      paddingLeft: "40px",
      paddingTop: "8px",
      paddingBottom: "8px",
      color: "#FA7525"
    };

    const style = {
      mt: "1em",
      paddingLeft : "40em"
    }

  const [open, setOpen] = React.useState(false);
  const [] = useState()

//    const RegistrarReserva = async (reserva) =>{
//        const reser = await fetch("http://127.0.0.1:8000/api/reserva-register", {
//            method: "POST",
//            body: JSON.stringify({})
//        });
//        const data = await reser.json();
//    }

  const handleClickOpen = () => {
    if(props.nombrese !== "" && props.apellidose !== "" && props.codigose !== "" && (props.cantidadse  > 0 ))
    {
        setOpen(true);
    }
    else{
        alert("Rellenar todo los datos")
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={style}>
      <div className="d-grid gap-2">
        <button type= "button" onClick={handleClickOpen} style={botoni}>
          RESERVAR
        </button>
      </div>

      <Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description">
        <DialogTitle style={{paddingRight : "200px"}}>
            <b>Reserva Confirmada</b>
        </DialogTitle>
        <DialogContent>
        <div style={ cuadro }>
              <div>Nombre: {props.nombrese}</div>
              <div>Apellidos: {props.apellidose}</div>
              <div>Codigo: {props.codigose}</div>
              <div>Cantidad de entradas: {props.cantidadse}</div>
              <div>---------------------</div>
              <div>Precio: {props.cantidadse * 15} soles</div>
            </div>
        </DialogContent>
        <DialogActions>
            <Button style={{marginLeft : "auto"}} variant="text" onClick={handleClose}>ENTENDIDO</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}