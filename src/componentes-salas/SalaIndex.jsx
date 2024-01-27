import { useState } from "react";
import Sala from "./Sala"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { salas } from "./Salas.js"; // potencialmente cambiado por json (kms)

const SalaIndex = () => {
    
    const filtrarCartas = (keyword) => {
        const esVacio = (valor) => typeof valor === "string" && valor.length === 0;
        for(let i = 0; i < salas.length; i++){
            const coincide = (new RegExp(keyword, 'i').test(salas[i]["salaName"]))? true : false;
            // console.log(`sala ${salas[i]["salaName"]}: ${coincide}`)
            document.getElementById("sala_"+i)
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
                <h2>Salas</h2>
                <FilterAltIcon style={ {marginRight: "0.5em"} }/>
                <input type="text" className="form-control my-3" placeholder="Filtrar por nombre" id="filtrarInput"
                value={ filtro } onChange={ handleInputChange } style={ { display: "inline-block", width: "80%"} }/>

                <div id="tarjetas" className="card-deck">
                    {
                        salas.map((sala, i) =>
                            <Sala salaName={sala.salaName} 
                                salaSchedule={sala.salaSchedule} 
                                salaTimes={sala.salaTimes} 
                                url={ sala.url } 
                                id={ i }
                            />
                        )
                    }
                </div>
            </div>
    </>
}

export default SalaIndex