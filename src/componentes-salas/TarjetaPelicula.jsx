import { useNavigate } from "react-router-dom"

const TarjetaPelicula = (props) => 
{
    const navigate = useNavigate()

    function botonreser()
    {
        navigate(`/reserva/${props.id}`)
    }
    return <>
        <div id={"pelicula_" + props.index} className="pelicula mb-3 card">
            <div className="card-body">
                <button type="button" className="boton-index btn rounded">
                    {props.index + 1}
                </button>
                <b>{props.title}</b>
                <div className="movie-sinapsis">{props.synopsis}</div>
            </div>
            <div className="border-top movie-footer">
                {props.schedules.map(time => 
                <button className="boton-hora btn rounded-pill" onClick={botonreser}>
                    {time}
                </button>)}
            </div>
        </div>;
    </>
}

export default TarjetaPelicula;