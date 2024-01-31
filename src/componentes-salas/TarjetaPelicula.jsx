import { useLocation, useNavigate } from "react-router-dom"

const TarjetaPelicula = (props) => 
{
    const navigate = useNavigate();
    const ruta = useLocation();
    console.log("--- TarjetaPelicula.jsx")
    console.log(ruta.state.usuario_obj)

    const botonReserva = (time) => {
        navigate(`/reserva/${props.title.replace(/\s/g, "-")}`, {
            state : {
                usuario_obj: ruta.state.usuario_obj,
                
                sala : props.sala_obj.salaName,
                hora : time,
                titulo : props.title,
                imagen : props.thumbnail
            }})
    };

    return <>
        <div id={"pelicula_" + props.index} className="pelicula mb-3 card">
            <img className="carta-img card-img-top" src={props.thumbnail} alt="" />
            <div className="card-body">
                <button type="button" className="boton-index btn rounded">
                    {props.index + 1}
                </button>
                <b>{props.title}</b>
                <div className="movie-sinapsis">{props.synopsis}</div>
            </div>
            <div className="border-top movie-footer">
                {
                    props.schedules.map((time) => 
                        <button className="boton-hora btn rounded-pill" onClick={() => botonReserva(time)}>
                            {time}
                        </button>
                    )
                }
            </div>
        </div>
    </>
}

export default TarjetaPelicula;