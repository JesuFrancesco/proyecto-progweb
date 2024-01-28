import ReservaMod from "./ReservaMod"
import { Link } from "react-router-dom"
import imagen from "./ubicacion.png";

function Reserva(props)
{
    const quintase ={
        marginLeft : "60px"
    }

    const carta ={
        border : "0px",
        boxShadow: "0px 2px 5px -2px"
    }

    return <div>
        <h2 className="border-bottom">Reserva</h2>
        <div className="row">
            <div className="col-8 mt-4">
                <div style={ quintase }>
                    <div style={ {marginLeft : "20px", marginBottom : "10px"} }>
                        <h2>NOMBRE</h2>
                        <div>
                            <img src={imagen} alt="ubicacion"/>duracion
                            <img src={imagen} alt="ubicacion"/>sala
                        </div>
                    </div>
                    <div className="card" style={carta}>
                        <div className="card-body">
                            <h6 className="card-title">Información de Reserva</h6>
                            <div className="border-bottom mb-4">fecha</div>
                            <div className="card-text">
                                <input type="text" className="form-control mb-3" placeholder="Nombre"  />
                                <input type="text" className="form-control mb-3" placeholder="Apellido"  />
                                <input type="text" className="form-control mb-3" placeholder="Código"  />
                                <input type="text" className="form-control mb-3" placeholder="Cantidad"  />
                               
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
                    IMAGEN
                    <img src="#" alt="#" />
                </div>
            </div>
        </div>
    </div>
}

export default Reserva