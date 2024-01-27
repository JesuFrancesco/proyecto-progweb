import { Link } from "react-router-dom"
import { LocationCity } from "@mui/icons-material"

const SalaItem = (props) => {
    // dependiendo de la sala que mediante el params proporcionado por el componente padre
    const sala = props.sala;

    return (
        <div className="row">
    
            <div className="jul">
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
                <div className="jul">
                    <div style={ {textAlign: "center"} } className="mb-5">
                        <img src={sala.url} style={ {borderRadius: "7px", width: "100%"} } alt="" />
                    </div>

                    {/* peliculas */}
                    <div id="peliculas" className="my-3">
                        <h3 className="mb-3" style={ {fontWeight: "600"} }>Películas disponibles</h3>

                        <div className="pelicula">
                            <div className="mb-2">
                                <button type="button" className="btn btn-secondary">
                                    SA
                                </button>
                                &nbsp; <b>Beekeper Sentencia de Muerte</b>
                            </div>

                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when a looking at is layout
                            </p>

                            <p>
                                <button className="btn btn-primary rounded-pill">15:00</button>
                                <button className="btn btn-primary rounded-pill">17:00</button>
                            </p>
                        </div>

                        <div className="pelicula">
                            <div className="mb-2">
                                <button type="button" className="btn btn-secondary">
                                    SA
                                </button>
                                &nbsp; <b>jack y la maldita caja 3</b>
                            </div>

                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when a looking at is layout
                            </p>

                            <p>
                                <button className="btn btn-primary rounded-pill">15:00</button>
                                <button className="btn btn-primary rounded-pill">17:00</button>
                            </p>
                        </div>

                        <div className="pelicula">
                            <div className="mb-2">
                                <button type="button" className="btn btn-secondary">
                                    SA
                                </button>
                                &nbsp; <b>el niño y la fgarza</b>
                            </div>

                            <p>
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when a looking at is layout
                            </p>

                            <p>
                                <button className="btn btn-primary rounded-pill">15:00</button>
                                <button className="btn btn-primary rounded-pill">17:00</button>
                            </p>
                        </div>

                        
                    </div>
                </div>

            </div>

            {/* panel historia */}
            <div className="col-md">
                <div className="card p-4" style={ {backgroundColor: "rgb(255,235,215)"} }>
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