import { Link } from "react-router-dom"
import { LocationCity } from "@mui/icons-material"
import PanelHistoria from "./PanelHistoria";
import TarjetaPelicula from './TarjetaPelicula';

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
                        <h3 className="mb-3" style={ {fontWeight: "600"} }>
                            Películas disponibles
                        </h3>
                        {
                            sala.salaMovies.map((movie, index) => 
                                <TarjetaPelicula 
                                    index={index} 
                                    title={movie.title} 
                                    synopsis={movie.synopsis} 
                                    schedules={movie.schedules} />
                            )
                        }
                    </div>
                </div>

            </div>

            {/* panel historia */}
            <div className="col-md">
                <PanelHistoria texto={sala.salaHistory} />
            </div>

        </div>  
    );
}

export default SalaItem