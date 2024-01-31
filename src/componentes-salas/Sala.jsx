import { Link } from "react-router-dom"
const Sala = (props) => {
    return (
    <div className="card" id={props.id} style={ {textAlign: "inherit"} }>
        <Link to={ `./${props.id}` }>
            <img src= {props.url} alt="portada-sala" className="card-img-top" style={ {"maxHeight": "100%"} }/>
        </Link>

        <div className="card-body">
            <p className="horario">{props.salaSchedule}</p>
            <Link to={`./${props.id}`}>
                <h4 className="card-title mb-3">{props.salaName}</h4>
            </Link>
        </div>
        <div className="card-footer p-3">
            { 
                (props.salaTimes.length < 5)?
                props.salaTimes.map(
                    (time) => <button className="btn rounded-pill py-0">{time}</button> 
                ) : <button className="btn rounded-pill py-0">{props.salaTimes.length} horarios</button>
            }
        </div>
    </div>
            );
}

export default Sala