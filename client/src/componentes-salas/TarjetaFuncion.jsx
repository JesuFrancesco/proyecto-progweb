import { useNavigate } from "react-router-dom"
import Chip from '@mui/material/Chip'
import { Box } from "@mui/material";
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
                fecha : window.date,
                titulo : movie.title,
                imagen : movie.thumbnail
            }})
    };

    return <>
        <Box id={"pelicula_" + props.index} className="pelicula mb-3 card">
            <img className="carta-img card-img-top" src={movie.thumbnail} alt="" />

            <Box className="card-body">
                <button type="button" className="boton-index btn rounded">
                    {props.index + 1}
                </button>
                <b>{movie.title}</b>
                <Box className="movie-sinapsis">{movie.extract}</Box>

                <Box className="movie-sinapsis">
                    Género &nbsp;
                    {
                        movie.genres.map(genero => 
                            <Chip label={genero} sx={{mr:1}}/>
                            )
                        }
                </Box>
                
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
            </Box>

            <Box className="border-top movie-footer">
                Fecha &nbsp; &nbsp; <Chip clickable color="secondary" onClick={() => botonReserva()} 
                label={`${window.dateStr} @ ${window.hour}`} />
            </Box>
        </Box>
    </>
}

export default TarjetaFuncion;
