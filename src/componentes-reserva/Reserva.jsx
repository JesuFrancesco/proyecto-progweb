import ReservaMod from "./ReservaMod"
import imagen from "./ubicacion.png";
import poraho from "./imagenporahora.png"
import { useState } from "react";

function Reserva(props)
{
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [codigo,setCodigo] = useState("")
    const [cantidad,setCantidad] = useState("")

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
                        <h2>NOMBRE</h2>
                        <div >
                            <img src={imagen} alt="ubicacion"/><span id="sali">duracion</span>
                            <img src={imagen} alt="ubicacion"/><span id="sali">sala</span>
                        </div>
                    </div>
                    <div className="card" style={carta}>
                        <div className="card-body">
                            <h6 className="card-title">Información de Reserva</h6>
                            <div >fecha</div>
                            <div className="border-bottom mb-4 mt-2"></div>
                            <div className="card-text">
                                <input type="text" 
                                    className="form-control mb-3" 
                                    id="cajate" 
                                    placeholder="Nombre" 
                                    value={nombre}
                                    onChange={InsertarNombre}/>
                                <input type="text" 
                                    className="form-control mb-3" 
                                    id="cajate" 
                                    placeholder="Apellido"
                                    value={apellido}
                                    onChange={InsertarApellido}/>
                                <input type="text" 
                                    className="form-control mb-3" 
                                    id="cajate" 
                                    placeholder="Código"
                                    value={codigo}
                                    onChange={InsertarCodigo}/>
                                <input type="text" 
                                    className="form-control " 
                                    id="cajate" 
                                    placeholder="Cantidad"
                                    value={cantidad}
                                    onChange={InsertarCantidad}/>
                                 <ReservaMod 
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
                    <img src={poraho} id="img" alt="imagenporahora" />
                </div>
            </div>
        </div>
    </div>
}

export default Reserva