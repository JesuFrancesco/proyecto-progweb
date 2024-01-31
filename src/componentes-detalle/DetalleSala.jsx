import Detalle from "./Detalle"
import { Salas_dispo } from "./Detalles"
import Typography from "@mui/material/Typography";
const Salas = (props) => {
    return <div className="peli">
            
    <Typography variant="h2" style={{ fontSize: "45px", fontFamily: "Roboto" }}>
      <b style={{marginLeft:"10px"}}>Salas disponibles</b>
    </Typography>
  
    {Salas_dispo.map((detalle) => (
        <Detalle 
        abrevia={detalle.abrevia} 
        sala={detalle.sala} 
        descripcion={detalle.descripcion} 
        horarios={detalle.horarios} 
        titulo = {props.titulo}
        id = {props.path}
        imagen ={props.url}
        usuario_obj7={props.usuario_obj6}/>
    ))}
</div>
}

export default Salas