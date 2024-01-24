const Sala = (props) => {
    return <div className="card" id={ props.id }>
            <a href="#"><img src= {props.url} alt="portada-sala" className="card-img-top"/></a>
                <div className="card-body">
                    <p className="horario">{props.salaSchedule}</p>
                    <a href="#">
                        <h4 className="card-title mb-3">{props.salaName}</h4>
                    </a>
                    <div className="card-footer">
                        { 
                            props.salaTimes.map(
                                (time) => <a href="#" className="btn rounded-pill py-0">{time}</a>
                            ) 
                        }
                    </div>
                </div>
            </div>
}

export default Sala