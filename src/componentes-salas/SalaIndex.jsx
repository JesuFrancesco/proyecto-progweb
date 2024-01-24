import { useState } from "react";
import Sala from "./Sala"
import filterIcon from "./filter-icon.png"

const SalaIndex = () => {
    const salas = [
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala A", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala B", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala C", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala D", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala E", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala F", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]}
    ];
    
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
        <div className="border-bottom">
            <img src= { filterIcon } alt="filter" style={ {marginRight: "1em"} }/>
            <input type="text" className="form-control my-3" style={ {display: "inline-block", width: "50%"} } placeholder="Filtrar por nombre" id="filtrarInput" 
                    value={ filtro } onChange={ handleInputChange }/>
            <h2>Salas</h2>
            <div id="tarjetas" className="card-deck">
                { 
                    salas.map((sala, i) => 
                        <Sala salaName={sala.salaName} salaSchedule={sala.salaSchedule} salaTimes={sala.salaTimes} url={ sala.url } id={ "sala_"+i }/>
                    ) 
                }
            </div>

        </div>
    </>
}

export default SalaIndex