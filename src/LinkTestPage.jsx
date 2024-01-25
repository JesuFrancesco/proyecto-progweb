import { Link } from "react-router-dom"

const LinkTestPage = () => {
    return <div>
        <Link className="btn btn-primary" to={ "salas-index" }>Salas index page</Link>
        <Link className="btn btn-primary" to={ "peliculas-index" }>Peliculas index page</Link>

        {/* <Link className="btn btn-primary" to={ "" }>TBD</Link>
        <Link className="btn btn-primary" to={ "" }>TBD</Link>
        <Link className="btn btn-primary" to={ "" }>TBD</Link>
        <Link className="btn btn-primary" to={ "" }>TBD</Link>
        <Link className="btn btn-primary" to={ "" }>TBD</Link> */}
    </div>
}

export default LinkTestPage