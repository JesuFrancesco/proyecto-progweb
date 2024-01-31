import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

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
      const style ={
        paddingLeft : "40em"
      }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment sx={style}>
    <div class="d-grid gap-2">
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
              <div>{props.nombrese}</div>
              <div>{props.apellidose}</div>
              <div>{props.codigose}</div>
              <div>{props.cantidadse}</div>
            </div>
        </DialogContent>
        <DialogActions>
            <Button style={{marginLeft : "auto"}} variant="text" onClick={handleClose}>ENTENDIDO</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}