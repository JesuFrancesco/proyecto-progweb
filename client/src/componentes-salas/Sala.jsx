import { Chip, Box } from "@mui/material";
import { Link } from "react-router-dom"
const Sala = (props) => {

    return <>
        <Box className="index-card card border" id={props.id} sx={ {textAlign: "inherit"} }>
            {/* Imagen vinculada */}
            <Link to={ `./${props.id}` } >
                <img src= {props.url} alt="" className="card-img-top" style={ {"maxHeight": "100%"} }/>
            </Link>

            {/* contenido */}
            <Box className="card-body">
                <Box className="horario" sx={ {mb: "0.5em"} }>{props.salaAddress}</Box>
                <Link to={`./${props.id}`}>
                    <h4 className="mb-1">
                        <Box sx={{color: "text.primary"}}>{props.salaName}</Box>
                    </h4>
                </Link>
            </Box>

            {/* horarios */}
            <Box className="card-footer border p-3">
                { 
                    (props.salaFormats.length < 5)?
                    props.salaFormats.map(
                        (formato) => <Chip variant="filled" label={formato.format} color="secondary" sx={{mx: "0.5em"}} /> 
                    ) : <Chip variant="filled" label={props.salaFormats.length + " formatos"} color="secondary" sx={{mx: "0.5em"}} />
                }
            </Box>
        </Box>
    </>
}

export default Sala