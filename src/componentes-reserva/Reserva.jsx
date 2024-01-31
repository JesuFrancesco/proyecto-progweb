import imag from "./ubicacion.png";
import poraho from "./imagenporahora.png"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ReservaDialog from "./ReservaDialog";

function Reserva(props)
{
    
    const [nombre,setNombre] = useState("TARTARIANIEL")
    const [apellido,setApellido] = useState("Taype Rojas")
    const [codigo,setCodigo] = useState("20210983")
    const [cantidad,setCantidad] = useState(1)


    const location = useLocation()
    console.log(location.state.imagen)
    function InsertarNombre(event)
    {
        setNombre(event.target.value)
    }
    function InsertarApellido(event)
    {
        setApellido(event.target.value)
    }
    function InsertarCodigo(event)
    {
        setCodigo(event.target.value)
    }
    function InsertarCantidad(event)
    {
        setCantidad(event.target.value)
    }

    const qx ={
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
                            <img src={imag} alt="ubicacion"/><span id="sali">1hrs 30min</span>
                            <img src={imag} alt="ubicacion"/><span id="sali">{location.state.sala}</span>
                        </div>
                    </div>
                    <div className="card" style={carta}>
                        <div className="card-body">
                            <h6 className="card-title">Información de Reserva</h6>
                            <div >{location.state.hora}</div>
                            <div className="border-bottom mb-4 mt-2"></div>
                            <div className="card-text">
                                    <input type="text" 
                                    className="form-control mb-3 d-grid gap-2" 
                                    id="cajate" 
                                    placeholder="Nombre"
                                    //disabled readonly  
                                    value={nombre}
                                    onChange={InsertarNombre}/>
                                <input type="text" 
                                    className="form-control mb-3" 
                                    id="cajate" 
                                    placeholder="Apellido"
                                    //disabled readonly
                                    value={apellido}
                                    onChange={InsertarApellido}/>
                                <input type="text" 
                                    className="form-control mb-3" 
                                    id="cajate" 
                                    placeholder="Código"
                                    //disabled readonly
                                    value={codigo}
                                    onChange={InsertarCodigo}/>
                                <input type="number" 
                                    className="form-control " 
                                    id="cajate" 
                                    placeholder="Cantidad"
                                    
                                    value={cantidad}
                                    onChange={InsertarCantidad}/>
                                 <ReservaDialog
                                    nombrese={nombre}
                                    apellidose={apellido}
                                    codigose={codigo}
                                    cantidadse={cantidad}/> 
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

export default Reserva