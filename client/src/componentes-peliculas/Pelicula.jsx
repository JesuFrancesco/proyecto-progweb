import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";

const Pelicula = (props) => {
    const destino = `/peliculas-detalle/${props.id}`

    return (
        <Box className="card border" id={props.id} color={"text.primary"} sx={{ textAlign: "inherit" }} >
            <Link to={destino} >
                <img 
                    src={props.url}
                    alt="portada-peli"
                    className="card-img-top w-100"
                    style={{ width: "415px", height: "400px" ,cursor : "pointer"}} />
            </Link>
            
            <Box className="card-body">
                <p className="horario">{props.peliHora}</p>
                <h4 className="card-title mb-1">{props.peliName}</h4>
            </Box>

            <Box className="card-footer border p-3">
                    
                    {props.peliGenres.map((time, index) => (
                        <Chip sx={{mx: "0.5em"}} 
                            variant="filled"
                            color="secondary"
                            label= {time} key={index}/>
                    ))}
            </Box>
        </Box>
    );
};

export default Pelicula;
