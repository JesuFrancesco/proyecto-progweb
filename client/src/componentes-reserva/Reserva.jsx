import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinearProgress from '@mui/material/LinearProgress';

import ReservaDialog from "./ReservaDialog";
import { checkLogin } from '../util/CheckLogin';

export default function Reserva(props)
{
    const navegacion = useNavigate();
    const ruta = useLocation();
    // console.log(ruta.state)

    const usu = sessionStorage.getItem("usuario_objeto")
    const usuario = (usu)? JSON.parse(usu) : {};

    useEffect(() => {
        if (!checkLogin(navegacion)) {
            alert("No has iniciado sesión.")
            navegacion("/")
        }
    })

    const [reserva, setReserva] = useState({
        ...usuario,
        cantidad: 1,
    })

    const [loading, setLoading] = useState(false);

    const useLoadingBar = {
        loading,
        setLoading
    }

    
    const InsertarNombre = (event) => {
        setReserva({...reserva, nombres: event.target.value})
    }
    const InsertarApellido = (event) => {
        setReserva({...reserva, apellidos: event.target.value})
    }
    const InsertarCodigo = (event) => {
        setReserva({...reserva, codigo: event.target.value})
    }
    const InsertarCantidad = (event) => {
        if (event.target.value <= 0 || event.target.value >= 100) return
        setReserva({...reserva, cantidad: event.target.value})
    }

    const qx = {
        marginLeft : "60px"
    }

    const carta ={
        border : "0px",
        boxShadow: "0px 2px 5px -2px"
    }

    return <Box id="todo">
        <h2 className="border-bottom">Reserva</h2>
        <Box className="row">
            <Box className="col mt-4">
                <Box sx={ qx }>
                    <Box sx={ {ml : "20px", mb : "10px"} }>
                        <h2>{ruta.state.titulo} | Funcion n° {ruta.state.id}</h2>
                        <Box>
                            <AccessTimeIcon /><Box sx={{display: "inline"}} color={"text.primary"}>&nbsp;1hrs 30min &nbsp;</Box>
                            <LocationOnIcon /><Box sx={{display: "inline"}} color={"text.primary"}>&nbsp;{ruta.state.sala}</Box>
                        </Box>
                    </Box>
                    <Box className="card" sx={carta}>
                        {
                            loading && <LinearProgress />
                        }
                        <Box className="card-body">
                            <Typography color={"text.primary"}>Información de Reserva</Typography >
                            
                            <Typography color={"text.primary"}>
                                {ruta.state.fecha} - {ruta.state.hora} hrs
                            </Typography>
                            
                            <Box className="border-bottom mb-4 mt-2"></Box>
                            
                            <Box className="card-text">
                                <label>Nombre</label>
                                <input type="text" 
                                    className="form-control mb-3 d-grid gap-2 cajate" 
                                    placeholder="Nombre"
                                    //disabled readonly  
                                    value={reserva.nombres}
                                    onChange={InsertarNombre}/>
                                <label>Apellido</label>
                                <input type="text" 
                                    className="form-control mb-3 cajate" 
                                    placeholder="Apellido"
                                    //disabled readonly
                                    value={reserva.apellidos}
                                    onChange={InsertarApellido}/>
                                <label>Código</label>
                                <input type="text" 
                                    className="form-control mb-3 cajate" 
                                    placeholder="Código"
                                    disabled readOnly
                                    value={reserva.codigo}
                                    onChange={InsertarCodigo}/>
                                <label>Cantidad</label>
                                <input type="number" 
                                    className="form-control cajate" 
                                    placeholder="Cantidad"
                                    value={reserva.cantidad}
                                    onChange={InsertarCantidad}/>

                                <ReservaDialog
                                    id={ruta.state.id}
                                    reservaHTTP={props.reservaHTTP}
                                    loadingbar={useLoadingBar}
                                    nombrese={reserva.nombres}
                                    apellidose={reserva.apellidos}
                                    codigose={reserva.codigo}
                                    cantidadse={reserva.cantidad}/> 
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box className="col-md-4">
                <Box style={{marginTop:"100px"}}>
                    <img src={ruta.state.imagen} id="img" alt=""/>
                </Box>
            </Box>
        </Box>
    </Box>
}
