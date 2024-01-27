import { Link } from "react-router-dom"
const Sala = (props) => {
    return (
    <div className="card" id={"sala_" + props.id} style={ {textAlign: "inherit"} }>
        <Link to={ `./${props.id+1}`}>
            <img src= {props.url} alt="portada-sala" className="card-img-top" style={ {"maxHeight": "100%"} }/>
        </Link>

        <div className="card-body">
            <p className="horario">{props.salaSchedule}</p>
            <Link>
                <h4 className="card-title mb-3">{props.salaName}</h4>
            </Link>
            <div className="card-footer">
                { 
                    props.salaTimes.map(
                        (time) => <button className="btn rounded-pill py-0">{time}</button>
                    ) 
                }
            </div>
        </div>
    </div>
            );
}

export default Sala