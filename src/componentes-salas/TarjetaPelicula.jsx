import { Link } from "react-router-dom"

const TarjetaPelicula = (props) => {
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
                {props.schedules.map(time => <Link to="/reserva"><button className="boton-hora btn rounded-pill">{time}</button></Link>)}
            </div>
        </div>;
    </>
}

export default TarjetaPelicula;