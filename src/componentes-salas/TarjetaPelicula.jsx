import { useNavigate } from "react-router-dom"

const TarjetaPelicula = (props) => 
{
    console.log(props.sala_obj)
    console.log(props.schedules)
    const navigate = useNavigate();

    const botonReserva = (time) => {
        navigate(`/reserva/${props.id}`, {
            state : {
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