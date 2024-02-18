import { useState, useEffect } from "react";
import Sala from "./Sala"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
// import { salas } from "./Salas.js"; 

const SalaIndex = () => {
    const [salas, setSalas] = useState([]);
    const [filtro, setFiltro] = useState("");

    
    // Método obsoleto: contenido removido / importado al backend
    // const obtenerSalasExtraHTTP = async () => {
    //     const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/salasv2.json");
    //     const json = await response.json();
    //     setSalasExtra(json);
    // }
        
    useEffect(() => {
        // Peticiones HTTP al backend
        const obtenerSalasHTTP = async () => {
            const response = await fetch(`http://localhost:8000/api/salas?name=${filtro}`);
            const json = await response.json();
            setSalas(json);

            // console.log("debug json")
            // console.log(json)
        }
        obtenerSalasHTTP();
    }, [filtro]);

    // Método obsoleto: uso de backend para el filtro
    // const filtrarCartas = (keyword) => {
    //     const esVacio = (valor) => valor.length === 0;
    //     // const salaTotal = [...salas, ...salasExtra]
    //     for(let i = 0; i < salas.length; i++){
    //         const coincide = (new RegExp(keyword, 'i').test(salas[i]["salaName"]))? true : false;
    //         // console.log(salaTotal[i])
    //         console.log(`sala ${salas[i]["salaName"].replace(/\s/g, "-")}: ${coincide}`)
    //         document.getElementById(salas[i].salaName.replace(/\s/g, "-"))
    //         .setAttribute("style", `display: ${coincide? "inline-block" : esVacio(keyword)? "inline-block" : "none"};`);
            
    //     }
    //     for(let i = 0; i < salasExtra.length; i++){
    //         const coincide = (new RegExp(keyword, 'i').test(salasExtra[i]["path"]))? true : false;
    //         // console.log(salaTotal[i])
    //         console.log(`sala ${salasExtra[i].path}: ${coincide}`)
    //         document.getElementById(salasExtra[i].path.replace(/\s/g, "-"))
    //         .setAttribute("style", `display: ${coincide? "inline-block" : esVacio(keyword)? "inline-block" : "none"};`);
            
    //     }
    // }


    return <>
            <div style={ {textAlign: "center"} }>
                <LocationCityIcon />
                <h2>Salas</h2>
                <FilterAltIcon style={ {marginRight: "0.5em"} }/>
                <input type="text" className="form-control my-3" placeholder="Filtrar por nombre" id="filtrarInput"
                value={ filtro } onChange={ e => setFiltro(e.target.value) } style={ { display: "inline-block", width: "80%"} }/>

                <div id="tarjetas" className="card-deck">
                    {
                        salas.map(sala =>
                            <Sala salaName={sala.name} 
                                salaAddress={sala.address}
                                salaFormats={["falta implementar 👍"]}
                                url={ sala.img } 
                                id={ sala.path }
                            />
                        )
                    }
                </div>
            </div>
    </>
}

export default SalaIndex