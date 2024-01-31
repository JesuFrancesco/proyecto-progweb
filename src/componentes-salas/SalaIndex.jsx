import { useState, useEffect } from "react";
import Sala from "./Sala"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
// import { salas } from "./Salas.js"; 

const SalaIndex = () => {
    const [salas, setSalas] = useState([]);
    const [salasExtra, setSalasExtra] = useState([]);

    const obtenerSalasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/JesuFrancesco/proyecto-progweb/main/public/salas.json");
        const json = await response.json();
        setSalas(json);
    }

    const obtenerSalasExtraHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/salas.json");
        const json = await response.json();
        setSalasExtra(json.buildings);
    }

    useEffect(() => {
        obtenerSalasHTTP();
        obtenerSalasExtraHTTP();
    }, []);

    const filtrarCartas = (keyword) => {
        const esVacio = (valor) => valor.length === 0;
        for(let i = 0; i < salas.length; i++){
            const coincide = (new RegExp(keyword, 'i').test(salas[i]["salaName"]))? true : false;
            console.log(`sala ${salas[i]["salaName"].replace(/\s/g, "-")}: ${coincide}`)
            document.getElementById(salas[i].salaName.replace(/\s/g, "-"))
            .setAttribute("style", `display: ${coincide? "inline-block" : esVacio(keyword)? "inline-block" : "none"};`);
            
        }
    }

    const handleInputChange = (evt) => {
        evt.preventDefault();

        setFiltro(evt.target.value)
        
        filtrarCartas(evt.target.value);
    }

    const [filtro, setFiltro] = useState("");

    return <>
            <div style={ {textAlign: "center"} }>
                <LocationCityIcon />
                <h2>Salas</h2>
                <FilterAltIcon style={ {marginRight: "0.5em"} }/>
                <input type="text" className="form-control my-3" placeholder="Filtrar por nombre" id="filtrarInput"
                value={ filtro } onChange={ handleInputChange } style={ { display: "inline-block", width: "80%"} }/>

                <div id="tarjetas" className="card-deck">
                    {
                        salas.map((sala, i) =>
                            <Sala salaName={sala.salaName} 
                                salaAddress={sala.salaAddress} // cambiar por salaAddress
                                salaTimes={sala.salaTimes} 
                                url={ sala.url } 
                                id={ sala.salaName.replace(/\s/g, "-") }
                            />
                        )
                    }
                    {
                        salasExtra.map(sala =>
                            <Sala salaName={sala.name} 
                                salaAddress={sala.address} 
                                salaTimes={sala.available_times} 
                                url={ "https://placehold.co/600x400" } 
                                id={ sala.name.replace(/\s/g, "-") }
                            />
                        )
                    }
                </div>
            </div>
    </>
}

export default SalaIndex