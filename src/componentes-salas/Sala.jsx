import { Chip } from "@mui/material";
import { Link } from "react-router-dom"
const Sala = (props) => {

    return <>
        <div className="card" id={props.id} style={ {textAlign: "inherit"} }>
            {/* Imagen vinculada */}
            <Link to={ `./${props.id}` } >
                <img src= {props.url} alt="portada-sala" className="card-img-top" style={ {"maxHeight": "100%"} }/>
            </Link>

            {/* contenido */}
            <div className="card-body">
                <div className="horario" style={ {marginBottom: "0.5em"} }>{props.salaAddress}</div>
                <Link to={`./${props.id}`}>
                    <h4 className="card-title mb-3">{props.salaName}</h4>
                </Link>
            </div>

            {/* horarios */}
            <div className="card-footer p-3">
                { 
                    (props.salaTimes.length < 5)?
                    props.salaTimes.map(
                        (time) => <Chip variant="filled" label={time} style={{backgroundColor: "rgb(255, 216, 159)", marginRight: "1em"}} /> 
                    ) : <Chip variant="filled" label={props.salaTimes.length + " horarios"} style={{backgroundColor: "rgb(255, 216, 159)", marginRight: "1em"}} />
                }
            </div>
        </div>
    </>
}

export default Sala