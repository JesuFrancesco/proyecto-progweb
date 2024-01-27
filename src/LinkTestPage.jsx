import { Link } from "react-router-dom"
import { useEffect } from "react";

const estilos = [
    "background-image: url(https://i.ytimg.com/vi/gWGceG9oMKg/maxresdefault.jpg)",
    "background-position: center",
    "background-repeat: no-repeat",
    "background-size: contain",
    "background-attachment: fixed"
];

const LinkTestPage = () => {
    useEffect(()=>{
        document.body.setAttribute("style", estilos.join('; '));
    });

    return <div style={ {textAlign: "center"} }>
        <Link onClick={ ()=> document.body.setAttribute("style", "") } style={ {backgroundColor: "blue"} } className="btn btn-primary" to={ "salas-index" }>
            Salas index page
        </Link>

        <Link onClick={ ()=> document.body.setAttribute("style", "") } style={ {backgroundColor: "blue"} } className="btn btn-primary" to={ "peliculas-index" }>
            Peliculas index page
        </Link>

        <Link onClick={ ()=> document.body.setAttribute("style", "") } style={ {backgroundColor: "blue"} } className="btn btn-primary" to={ "peliculas-detalle" }>
            Peliculas detalle page
        </Link>
        <Link onClick={ ()=> document.body.setAttribute("style", "") } style={ {backgroundColor: "blue"} } className="btn btn-primary" to={ "menu" }>
            Menu page
        </Link>
    </div>
}

export default LinkTestPage