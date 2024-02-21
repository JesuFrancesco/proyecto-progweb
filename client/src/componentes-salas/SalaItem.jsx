import { Link } from "react-router-dom"
import { LocationCity } from "@mui/icons-material"
import PanelHistoria from "./PanelHistoria";
import TarjetaFuncion from './TarjetaFuncion';
import { Alert } from "@mui/material";

const SalaItem = (props) => {
    // dependiendo de la sala que mediante el params proporcionado por el componente padre
    const sala = props.sala;
    const funciones = sala.funciones;

    return <>
        <div className="row">
            {/* titulo y banner */}
            <div>
                <h2 style={ {fontWeight: "600"} }>{sala.name}</h2>
            </div>
            
            <div className="mb-3">
                <div id="ubi">
                    <LocationCity sx={ {mr: 1} }/>
                    <Link className="text-decoration-none" to={ sala.img }>
                        {sala.city}, {sala.address}
                    </Link>
                </div>
            </div>

            <div className="col-md-8">
                
                <div style={ {textAlign: "center"} } className="mb-5">
                    <img src={sala.img} className="w-100" style={ {borderRadius: "7px", width: "100%"} } alt="" />
                </div>
                
            
                {/* peliculas */}
                <h3 className="mb-3" style={ {fontWeight: "600"} }>
                    Películas disponibles
                </h3>
                {
                    (funciones)? (funciones.length !== 0)? funciones.map((funcion, index) =>
                            <div className="my-3">
                                <TarjetaFuncion
                                    index={index}
                                    sala_obj={ sala }
                                    funcion_obj={ funcion } />
                            </div>
                    ) : <Alert severity="info">Esta sala no cuenta con funciones.</Alert> : <></>
                }
            </div>
        

            {/* panel historia */}
            <div className="col-md">
                <PanelHistoria location={sala.city} 
                    texto={`${sala.description}. ${sala.address}, ${sala.secondAddress}. ${sala.phoneNumber}`} 
                    chips={(sala.formats)? sala.formats : null}
                    phone={sala.phoneNumber}/>
            </div>
        </div>
    </>
}

export default SalaItem