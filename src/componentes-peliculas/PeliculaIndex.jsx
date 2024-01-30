import { useEffect, useState } from "react";
import Pelicula from "./Pelicula"

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Pagination from '@mui/material/Pagination';
import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const PeliculaIndex = () => {
    const navegar = useNavigate();

    let { pagina: page } = useParams();
    // console.log(page)
    

    const [filtro, setFiltro] = useState("");
    const [pagina, setPagina] = useState(1);
    const [peliculasJSON, setPeliculasJSON] = useState([]);

    const filtrarCartas = (keyword) => {
        // TODO: CAMBIAR LA LOGICA DEL FILTRAR CARTAS

        // for (let i = 0; i < peliculasJSON.length; i++) {
        //     const coincide = (new RegExp(keyword, 'i').test(peliculasJSON[i]["title"]))? true : false;
        //     document.getElementsByClassName(`peli_${i}`)[0].setAttribute("style", `display: ${coincide? "inline-block" : keyword === ""? "inline-block" : "none"};`);
        // }
    };

    const handleInputChange = (evt) => {
        evt.preventDefault();

        setFiltro(evt.target.value);

        filtrarCartas(evt.target.value);
    };

    const handlePageChange = (_, valor) => {        
        setPagina(valor)
        navegar(`/peliculas-index/${valor}`)
    }

    const obtenerPeliculasPaginadas = () => {
        const startIndex = pagina * 12 - 12
        const endIndex = startIndex + 12
        return peliculasJSON.slice(startIndex, endIndex)
    }
    
    const buscarPeliculasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/peliculas_limpio.json");
        const json = await response.json();
        setPeliculasJSON(json);
    }
    
    useEffect(() => {
        buscarPeliculasHTTP();
        if(isNaN(page)) page = 1;
        else setPagina(Number.parseInt(page));
    }, [])

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Peliculas</h2>
            <FilterAltIcon style={{ marginRight: "0.5em" }} />
            <input
                type="text"
                className="form-control my-3"
                placeholder="Filtrar por nombre"
                id="filtrarInput"
                value={filtro}
                onChange={handleInputChange}
                style={{ display: "inline-block", width: "80%" }}
            />

            <div id="tarjetas" className="row row-cols-1 row-cols-md-3 g-4">
                {
                    (() => {
                        return obtenerPeliculasPaginadas().map((peli, i) => (
                            <div key={i} className="col">
                                <div key={i} className={`col`}>
                                    <Pelicula peliName={peli.title} peliHora={"1hrs 30min"} peliGenres={peli.genres} url={peli.thumbnail} id={peli.path} />
                                </div>
                            </div>
                            )
                        )
                    })()
                }
            </div>

            <Typography style={ {marginTop: "1em"} }>Pagina: {pagina}</Typography>
            <Pagination count={Math.ceil(peliculasJSON.length/12)} page={pagina} onChange={ handlePageChange } />
        </div>
    );
};

export default PeliculaIndex;
