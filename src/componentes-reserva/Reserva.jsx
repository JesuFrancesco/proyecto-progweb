import ReservaMod from "./ReservaMod"
import imagen from "./ubicacion.png";
import poraho from "./imagenporahora.png"

function Reserva(props)
{
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
                                <input type="text" className="form-control mb-3" id="cajate" placeholder="Nombre"  />
                                <input type="text" className="form-control mb-3" id="cajate" placeholder="Apellido"  />
                                <input type="text" className="form-control mb-3" id="cajate" placeholder="Código"  />
                                <input type="text" className="form-control " id="cajate" placeholder="Cantidad"  />
                                 <ReservaMod/> 
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

