import { Link } from "react-router-dom"
import { LocationCity } from "@mui/icons-material"
import PanelHistoria from "./PanelHistoria";
import TarjetaPelicula from './TarjetaPelicula';

const SalaItem = (props) => {
    // dependiendo de la sala que mediante el params proporcionado por el componente padre
    const sala = props.sala;
    const peliculas = props.peliculas;

    return <>
        <div className="row">
            {/* titulo y banner */}
            <div>
                <h2 style={ {fontWeight: "600"} }>{sala.salaName}</h2>
            </div>
            
            <div className="mb-3">
                <div id="ubi">
                    <LocationCity sx={ {mr: 1} }/>
                    <Link className="text-decoration-none" to={ sala.salaMapsRelativeLocation }>
                        {sala.salaAddress}
                    </Link>
                </div>
            </div>

            <div className="col-md-8">
                
                <div style={ {textAlign: "center"} } className="mb-5">
                    <img src={sala.url} className="w-100" style={ {borderRadius: "7px", width: "100%"} } alt="" />
                </div>
                
            
                {/* peliculas */}
                <h3 className="mb-3" style={ {fontWeight: "600"} }>
                    Películas disponibles
                </h3>
                {
                    peliculas.map((movie, index) => (index < 10)? <>
                            <div className="my-3">
                                <TarjetaPelicula
                                    sala_obj={ sala }
                                    index={index}
                                    title={movie.title}
                                    synopsis={movie.extract}
                                    thumbnail={movie.thumbnail}
                                    schedules={sala.salaTimes} />
                            </div>
                        </> : <></>
                    )
                }
            </div>
        

            {/* panel historia */}
            <div className="col-md">
                <PanelHistoria texto={sala.salaHistory} />
            </div>
        </div>
    </>
}

export default SalaItem