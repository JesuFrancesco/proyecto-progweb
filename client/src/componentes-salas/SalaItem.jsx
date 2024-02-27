import { Alert } from "@mui/material";
import { LocationCity } from "@mui/icons-material"
import { Box } from "@mui/material";

import PanelHistoria from "./PanelHistoria";
import TarjetaFuncion from './TarjetaFuncion';

const SalaItem = (props) => {
    // dependiendo de la sala que mediante el params proporcionado por el componente padre
    const sala = props.sala;
    const funciones = sala.funciones;

    return <>
        <Box className="row">
            {/* titulo y banner */}
            <Box>
                <h2 style={ {fontWeight: "600"} }>{sala.name}</h2>
            </Box>
            
            <Box className="mb-3">
                <Box color="inherit">
                    <LocationCity sx={ {mr: 1} }/>
                    <>
                        {sala.city}, {sala.address}
                    </>
                </Box>
            </Box>

            <Box className="col-md-8">
                
                <Box style={ {textAlign: "center"} } className="mb-5">
                    <img src={sala.img} className="w-100" style={ {borderRadius: "7px", width: "100%"} } alt="" />
                </Box>
                
            
                {/* peliculas */}
                <h3 className="mb-3" style={ {fontWeight: "600"} }>
                    Películas disponibles
                </h3>
                {
                    (funciones)? (funciones.length !== 0)? funciones.map((funcion, index) =>
                            <Box className="my-3">
                                <TarjetaFuncion
                                    index={index}
                                    sala_obj={ sala }
                                    funcion_obj={ funcion } />
                            </Box>
                    ) : <Alert severity="error">Esta sala no cuenta con funciones.</Alert> : <></>
                }
            </Box>
        

            {/* panel historia */}
            <Box className="col-md">
                <PanelHistoria location={sala.city} 
                    texto={`${sala.description}. ${sala.address}, ${sala.secondAddress}. ${sala.phoneNumber}`} 
                    chips={(sala.formats)? sala.formats : null}
                    phone={sala.phoneNumber}/>
            </Box>
        </Box>
    </>
}

export default SalaItem