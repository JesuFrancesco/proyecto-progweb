import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import imag from "./ubicacion.png";
import poraho from "./imagenporahora.png"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ReservaDialog from "./ReservaDialog";

export default function Reserva(props)
{
    const [reserva, setReserva] = useState({
        nombre: "Invitado",
        apellido: "",
        codigo: "20210983",
        cantidad: 1,
    })
    
    // const [nombre,setNombre] = useState("TARTARIANIEL")
    // const [apellido,setApellido] = useState("Taype Rojas")
    // const [codigo,setCodigo] = useState("20210983")
    // const [cantidad,setCantidad] = useState(1)

    const location = useLocation()
    console.log(location.state)

    
    const InsertarNombre = (event) => {
        setReserva({...reserva, nombre: event.target.value})
    }
    const InsertarApellido = (event) => {
        setReserva({...reserva, apellido: event.target.value})
    }
    const InsertarCodigo = (event) => {
        setReserva({...reserva, codigo: event.target.value})
    }
    const InsertarCantidad = (event) => {
        if (event.target.value <= 0) return
        setReserva({...reserva, cantidad: event.target.value})
    }

    const qx = {
        marginLeft : "60px"
    }

    const carta ={
        border : "0px",
        boxShadow: "0px 2px 5px -2px"
    }

    return <div id="todo">
        <h2 className="border-bottom">Reserva</h2>
        <div className="row">
            <div className="col-8 mt-4">
                <div style={ qx }>
                    <div style={ {marginLeft : "20px", marginBottom : "10px"} }>
                        <h2>{location.state.titulo}</h2>
                        <div >
                            <AccessTimeIcon /><span className="sali">&nbsp;1hrs 30min</span>
                            <LocationOnIcon /><span className="sali">&nbsp;{location.state.sala}</span>
                        </div>
                    </div>
                    <div className="card" style={carta}>
                        <div className="card-body">
                            <h6 className="card-title">Información de Reserva</h6>
                            <span>Hora: </span> <b>{location.state.hora}</b>
                            <div className="border-bottom mb-4 mt-2"></div>
                            <div className="card-text">
                                <input type="text" 
                                    className="form-control mb-3 d-grid gap-2 cajate" 
                                    placeholder="Nombre"
                                    //disabled readonly  
                                    value={reserva.nombre}
                                    onChange={InsertarNombre}/>
                                <input type="text" 
                                    className="form-control mb-3 cajate" 
                                    placeholder="Apellido"
                                    //disabled readonly
                                    value={reserva.apellido}
                                    onChange={InsertarApellido}/>
                                <input type="text" 
                                    className="form-control mb-3 cajate" 
                                    placeholder="Código"
                                    disabled readonly
                                    value={reserva.codigo}
                                    onChange={InsertarCodigo}/>
                                <input type="number" 
                                    className="form-control cajate" 
                                    placeholder="Cantidad"
                                    
                                    value={reserva.cantidad}
                                    onChange={InsertarCantidad}/>
                                <ReservaDialog
                                    nombrese={reserva.nombre}
                                    apellidose={reserva.apellido}
                                    codigose={reserva.codigo}
                                    cantidadse={reserva.cantidad}/> 
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div style={{marginTop:"100px"}}>
                    <img src={location.state.imagen} id="img" alt=""/>
                </div>
            </div>
        </div>
    </div>
}
