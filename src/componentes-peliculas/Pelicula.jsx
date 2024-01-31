import { useLocation, useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
const Pelicula = (props) => {

    const ruta = useLocation();
    //const rutaDetalles = `/peliculas-detalle/${props.id}`;
    console.log("--- Pelicula.jsx")
    console.log(ruta.state.usuario_obj)

    const navigate = useNavigate();
    function clickruta(){
        navigate(`/peliculas-detalle/${props.id}`, {
            state : {
                usuario_obj : ruta.state.usuario_obj
            }
        })
    }
    return (
        <div className="card" id={props.id} style={{ textAlign: "inherit" }} >
                <img 
                    onClick={clickruta}
                    src={props.url}
                    alt="portada-peli"
                    className="card-img-top w-100"
                    style={{ width: "415px", height: "400px", cursor : "pointer"}} 
                />
            
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
