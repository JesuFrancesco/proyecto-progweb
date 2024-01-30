import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
const Pelicula = (props) => {
    const rutaDetalles = `/peliculas-detalle/${props.id}`;

    return (
        <div className="card" id={props.id} style={{ textAlign: "inherit" }}>
            <Link to={rutaDetalles}>
                <img
                    src={props.url}
                    alt="portada-peli"
                    className="card-img-top w-100"
                    style={{ width: "415px", height: "400px" }} 
                />
            </Link>
            <div className="card-body">
                <p className="horario">{props.peliHora}</p>
                    <h4 className="card-title mb-3">{props.peliName}</h4>
                <div className="card-footer">
                    {props.peliGenres.map((time, index) => (
                        <Chip label= {time} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pelicula;
