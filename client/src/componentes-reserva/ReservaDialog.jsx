import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box  } from '@mui/material';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ReservaDialog(props) 
{
  const [open, setOpen] = useState(false);
  const { loading, setLoading } = props.loadingbar

  const botoni={
      borderRadius: "5px",
      border: "0px",
      backgroundColor: "primary",
      color: "white",
      fontFamily: "Roboto",
      py: "8px",
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
  }

  const handleClickOpen = async () => {
    if(props.nombrese !== "" && props.apellidose !== "" && props.codigose !== "" && (props.cantidadse  > 0 ))
    {
      // empezar reserva
      setLoading(true);
      const res = await props.reservaHTTP({
        codigo: props.codigose,
        funcion: props.id,
        entradas: props.cantidadse,
      });

      if(res) {
        // alert("¡Reserva realizada con éxito!")
        setOpen(true);
      } else {
        alert("Algo salio mal, intente de nuevo más tarde.")
      }
      
      setLoading(false);
    }
    else {
        alert("Rellenar todo los datos")
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={style}>
      <Box className="d-grid gap-2">
        <Button disabled={loading} variant='contained' 
        onClick={handleClickOpen} sx={botoni}>
          RESERVAR
          <ShoppingCartIcon sx={{ml: "0.5em"}} /> 
        </Button>
      </Box>

      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description">
        
        {/* Título */}
        <DialogTitle sx={{pr : "200px"}}>
            <b>Reserva Confirmada</b>
        </DialogTitle>

        {/* Contenido */}
        <DialogContent>
        <Box sx={ cuadro }>
              <Box>Nombre: {props.nombrese}</Box>
              <Box>Apellidos: {props.apellidose}</Box>
              <Box>Codigo: {props.codigose}</Box>
              <Box>Cantidad de entradas: {props.cantidadse}</Box>
              <Box>---------------------</Box>
              <Box>Precio: {props.cantidadse * 15} soles</Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button sx={{ml : "auto"}} variant="text" onClick={handleClose}>ENTENDIDO</Button>
        </DialogActions>
      </Dialog>


    </Box>

  );
}