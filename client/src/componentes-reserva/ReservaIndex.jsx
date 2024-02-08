import { Link, useLocation } from "react-router-dom"
import Reserva from "./Reserva"

function ReservaIndex(){
    const ruta = useLocation();
    if(!ruta.state) return <div>No has iniciado sesion. Retorna a <Link style={ {backgroundColor: "orange"} } to={"/"}>login</Link></div>
    return <Reserva/>
}

export default ReservaIndex