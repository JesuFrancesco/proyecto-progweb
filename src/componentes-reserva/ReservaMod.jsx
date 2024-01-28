import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: "3px"
};

const cuadro ={
  border : "1px dashed #ff6200",
  backgroundColor: "#FA75250A",
  borderRadius: "7px",
  paddingLeft: "40px",
  paddingTop: "8px",
  paddingBottom: "8px",
  color: "#FA7525",
};

const botoni={
  borderRadius: "5px",
  border: "0px",
  backgroundColor: "rgb(250, 121, 0)",
  color: "white",
  fontFamily: "Arial",
  paddingTop: "8px",
  paddingBottom: "8px",
  boxShadow: "0px 2px 5px -2px rgb(0, 0, 0,7)"
};

export default function ReservaMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div class="d-grid gap-2">
        <button type= "button" onClick={handleOpen} style={botoni}>
          RESERVAR
        </button>
      </div>
      <Modal
        open={open} 
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h1">
            <b>Reserva Confirmada</b>
          </Typography>
          <Typography id="modal-modal-description" >
            <div style={ cuadro }>
              <div>Nombre</div>
              <div>Apellidos</div>
              <div>Codigo</div>
              <div>Cantidad de Pases</div>
            </div>
            <Button style={{marginLeft : "auto"}} variant="text" onClick={handleClose}>ENTENDIDO</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}