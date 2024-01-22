const SalaIndexPage = () => {

    return <>
        <div className="border-bottom">
            <h2>Salas</h2>

            <div id="tarjetas" className="card-deck">
                {Array(6).fill(
                    <div className="card">
                        <a href="./infosalicius.html"><img src="https://placehold.co/600x400/EEE/31343C" alt="portada-sala" className="card-img-top"/></a>
                        <div className="card-body">
                            <p className="horario">John Doe • 4 Feb 2024</p>
                            <a href="./infosalicius.html">
                                <h4 className="card-title mb-3">Sala A</h4>
                            </a>
                            <div className="card-footer">
                                <a href="#" className="btn rounded-pill py-0">08:00</a>
                                <a href="#" className="btn rounded-pill py-0">10:00</a>
                                <a href="#" className="btn rounded-pill py-0">12:00</a>
                                <a href="#" className="btn rounded-pill py-0">14:00</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    </>
}

export default SalaIndexPage