import { Link, useLocation } from "react-router-dom"
import Reserva from "./Reserva"

export default function ReservaIndex(){
    const ruta = useLocation();
    const usu = sessionStorage.getItem("usuario_objeto");
    const retorno = (usu)? "/menu" : "/";
    const retornoStr = (usu)? "menu" : "login";
    const msg = (usu)? "No se registró correctamente la reserva" : "No has iniciado sesión";

    if(!ruta.state) return <div>
        {msg}. Retorna a <Link style={ {backgroundColor: "orange"} } to={retorno}>{retornoStr}</Link>
    </div>

    return <Reserva/>
}