import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReservaDialog from "./ReservaDialog";
import { checkLogin } from '../util/CheckLogin';

export default function Reserva()
{
    const navegacion = useNavigate();
    const ruta = useLocation();

    // console.log("--- debug: Reserva.jsx")
    // console.log(ruta.state) // datos de la reserva
    // console.log(sessionStorage.getItem("usuario_objeto")) // datos usuario

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

    return <div id="todo">
        <h2 className="border-bottom">Reserva</h2>
        <div className="row">
            <div className="col mt-4">
                <div style={ qx }>
                    <div style={ {marginLeft : "20px", marginBottom : "10px"} }>
                        <h2>{ruta.state.titulo}</h2>
                        <div >
                            <AccessTimeIcon /><span className="sali">&nbsp;1hrs 30min</span>
                            <LocationOnIcon /><span className="sali">&nbsp;{ruta.state.sala}</span>
                        </div>
                    </div>
                    <div className="card" style={carta}>
                        <div className="card-body">
                            <h6 className="card-title">Información de Reserva</h6>
                            <span>Hora: </span> <b>{ruta.state.hora}</b>
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
                                    disabled readOnly
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
            <div className="col-md-4">
                <div style={{marginTop:"100px"}}>
                    <img style={ {} } src={ruta.state.imagen} id="img" alt=""/>
                </div>
            </div>
        </div>
    </div>
}
