import { Link } from "react-router-dom";

const Pelicula = (props) => {
    return (
        <div className="card" id={props.id} style={{ textAlign: "inherit" }}>
            <Link to="#">
                <img
                    src={props.url}
                    alt="portada-peli"
                    className="card-img-top"
                    style={{ width: "415px", height: "400px" }} 
                />
            </Link>
            <div className="card-body">
                <p className="horario">{props.peliHora}</p>
                <Link to="#">
                    <h4 className="card-title mb-3">{props.peliName}</h4>
                </Link>
                <div className="card-footer">
                    {props.peliTimes.map((time, index) => (
                        <button key={index} className="btn rounded-pill py-0">
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pelicula;
