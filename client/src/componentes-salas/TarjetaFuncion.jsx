import { useNavigate } from "react-router-dom"
import Chip from '@mui/material/Chip'
const TarjetaFuncion = (props) => 
{
    const navigate = useNavigate();

    const sala = props.sala_obj
    const funcion = props.funcion_obj
    const movie = funcion.movie
    const window = funcion.window

    const botonReserva = () => {
        navigate(`/reserva/${movie.path}`, {
            state : {       
                sala : sala.name,
                hora : window.hour,
                titulo : movie.title,
                imagen : movie.thumbnail
            }})
    };

    return <>
        <div id={"pelicula_" + props.index} className="pelicula mb-3 card">
            <img className="carta-img card-img-top" src={movie.thumbnail} alt="" />

            <div className="card-body">
                <button type="button" className="boton-index btn rounded">
                    {props.index + 1}
                </button>
                <b>{movie.title}</b>
                <div className="movie-sinapsis">{movie.extract}</div>

                <div className="movie-sinapsis">
                    Género &nbsp;
                    {
                        movie.genres.map(genero => 
                            <Chip label={genero} sx={{mr:1}}/>
                            )
                        }
                </div>
                
                {
                    (() => {
                        if(movie.cast.length > 0) {
                            return <div className="movie-sinapsis">
                                Actores &nbsp;
                                {
                                    movie.cast.map(actor => 
                                        <Chip label={actor} sx={{mr:1}}/>
                                    )
                                }
                            </div>
                        }
                    })()
                }
            </div>

            <div className="border-top movie-footer">
                <button className="boton-hora btn rounded-pill" onClick={() => botonReserva()}>
                    {window.hour}
                </button>
            </div>
        </div>
    </>
}

export default TarjetaFuncion;