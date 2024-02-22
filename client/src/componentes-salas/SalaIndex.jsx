import { useState, useEffect } from "react";
import Sala from "./Sala"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Alert, Select, MenuItem } from "@mui/material";

const SalaIndex = () => {
    const [salas, setSalas] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState("");
    const [filtroFormat, setFiltroFormat] = useState("");
    const [errorHTTP, setErrorHTTP] = useState("");

    // Método obsoleto: contenido removido / importado al backend
    // const obtenerSalasExtraHTTP = async () => {
    //     const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/salasv2.json");
    //     const json = await response.json();
    //     setSalasExtra(json);
    // }
        
    useEffect(() => {
        // Peticiones HTTP al backend
        const obtenerSalasHTTP = async () => {
            const response = await fetch(`
                http://pweb2024.azurewebsites.net/api/salas?${(filtroNombre)? `name=${filtroNombre}`: ""}&${(filtroFormat)? `&format=${filtroFormat}` : ""}
            `);
            const data = await response.json();
            if (!data.msg)
                setSalas(data.salas);
            else
                setErrorHTTP(data.msg)

            // console.log("debug json")
            // console.log(json)
        }
        obtenerSalasHTTP();
    }, [filtroNombre, filtroFormat]);

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
        {
            (() => {
                if (errorHTTP) {
                    return <Alert>
                        {errorHTTP}
                    </Alert>
                }
            })()
        }
        <div style={ {textAlign: "center"} }>
            <LocationCityIcon />
            <h2>Salas</h2>
            <FilterAltIcon style={ {marginRight: "0.5em"} }/>
            <input type="text" className="form-control my-3" placeholder="Filtrar por nombre" id="filtrarInput"
            value={ filtroNombre } onChange={ e => setFiltroNombre(e.target.value) } style={ { display: "inline-block", width: "50%", marginRight: "1em" } }/>
            <Select label="Año"
                value={ filtroFormat }
                onChange={e => setFiltroFormat(e.target.value) }>
                <MenuItem value={""} >-</MenuItem>
                <MenuItem value={"1"}>2D</MenuItem>
                <MenuItem value={"2"}>3D</MenuItem>
                <MenuItem value={"3"}>XTREME</MenuItem>
                <MenuItem value={"4"}>PRIME</MenuItem>
                <MenuItem value={"5"}>SCREENX</MenuItem>
                <MenuItem value={"6"}>REGULAR</MenuItem>
            </Select>

            <div id="tarjetas" className="card-deck">
                {
                    salas.map(sala =>
                        <Sala salaName={sala.name} 
                            salaAddress={sala.address}
                            salaFormats={sala.formats}
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