import { Link } from "react-router-dom"
import { LocationCity } from "@mui/icons-material"

const SalaItem = (props) => {
    // dependiendo de la sala que mediante el params proporcionado por el componente padre
    const sala = props.sala;

    return (
        <div className="row">
    
            <div className="indent">
                {/* titulo y banner */}
                <div>
                    <h2 style={ {fontWeight: "600"} }>{sala.salaName}</h2>
                </div>

                <div className="mb-3">
                    <div id="ubi">
                        <LocationCity sx={ {mr: 1} }/>
                        <Link className="text-decoration-none" to={ sala.salaMapsRelativeLocation }>
                            {sala.salaLocation}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <div className="indent">
                    <div style={ {textAlign: "center"} } className="mb-5">
                        <img src={sala.url} style={ {borderRadius: "7px", width: "100%"} } alt="" />
                    </div>

                    {/* peliculas */}
                    <div id="peliculas" className="my-3">
                        <h3 className="mb-3" style={ {fontWeight: "600"} }>Películas disponibles</h3>
                        {
                            sala.salaMovies.map((movie, index) => 
                                <div id={"pelicula_"+index} className="pelicula mb-3 card">
                                    <div className="card-body">
                                        <button type="button" className="boton-index btn rounded">
                                            {index + 1}
                                        </button>
                                        <b>{movie.title}</b>

                                        <div className="movie-sinapsis">
                                            {
                                                movie.synopsis
                                            }
                                        </div>
                                    </div>


                                    <div className="border-top movie-footer">
                                        {(movie.schedules.length < 5)? movie.schedules.map(time => 
                                            <button className="boton-hora btn rounded-pill">{time}</button>
                                        ) : <button className="boton-hora btn rounded-pill">{movie.schedules.length} horarios</button>}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

            {/* panel historia */}
            <div className="col-md">
                <div className="card p-4" style={ {backgroundColor: "white"} }>
                    <h4 className="card-title" style={{ fontWeight: 600 }}> Historia </h4>
                    <p style={{ textAlign: "left" }}>
                        {sala.salaHistory}
                    </p>
                </div>
            </div>

        </div>  
    );
}

export default SalaItem