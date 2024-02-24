import { Chip } from "@mui/material";
import { Link } from "react-router-dom"
const Sala = (props) => {

    return <>
        <div className="index-card card" id={props.id} style={ {textAlign: "inherit"} }>
            {/* Imagen vinculada */}
            <Link to={ `./${props.id}` } >
                <img src= {props.url} alt="" className="card-img-top" style={ {"maxHeight": "100%"} }/>
            </Link>

            {/* contenido */}
            <div className="card-body">
                <div className="horario" style={ {marginBottom: "0.5em"} }>{props.salaAddress}</div>
                <Link to={`./${props.id}`}>
                    <h4 className="card-title mb-1">{props.salaName}</h4>
                </Link>
            </div>

            {/* horarios */}
            <div className="card-footer p-3">
                { 
                    (props.salaFormats.length < 5)?
                    props.salaFormats.map(
                        (formato) => <Chip variant="filled" label={formato.format} color="secondary" sx={{marginRight: "1em"}} /> 
                    ) : <Chip variant="filled" label={props.salaFormats.length + " formatos"} color="secondary" sx={{marginRight: "1em"}} />
                }
            </div>
        </div>
    </>
}

export default Sala