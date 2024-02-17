import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Pelicula from "./Pelicula"

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Pagination from '@mui/material/Pagination';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Typography } from "@mui/material";

const PeliculaIndex = () => {
    const navegar = useNavigate();
    
    const [filtro, setFiltro] = useState("");
    const [pagina, setPagina] = useState(1);
    
    const id = useParams();
    const pageRef = useRef(id.pagina);

    const [peliculasJSON, setPeliculasJSON] = useState([]);
    const [peliS,setPeli]=useState([]) // esta cosa es para mantener la lista origianl siempre 

    const filtrarPeliculas = (keyword) => {
        const peliculasJSON = peliS //cada vez que se filtre lo hace desde la lista orginal ,de esta manera se vuelve a filtra cuando borras un caracter que ese era el problema xd
        const peliculasFiltradas = peliculasJSON.filter(
            peli => peli.title.toLowerCase().includes(keyword.toLowerCase())
        );
        return peliculasFiltradas;
    };
    
    const handleInputChange = (evt) => {
        evt.preventDefault();
        const keyword = evt.target.value;
        setFiltro(keyword);
        const peliculasFiltradas = filtrarPeliculas(keyword);
        setPeliculasJSON(peliculasFiltradas);
        
    };

    const handlePageChange = (_, valor) => {       
        // console.log("paginaState cambiando a " + valor + "...")
        setPagina(valor);
        navegar(`/peliculas-index/${valor}`);
        window.scrollTo(0,0)
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
        setPeli(json);
    }
    
    useEffect(() => {
        // verificar si no se puso input directo al link, sino que si se ha logeado y ha llegado ahi
        
        // peticion http
        buscarPeliculasHTTP();
        
        const page = pageRef.current;
        console.log("pageParam=" + page)
        console.log("paginaState=" + pagina)
        console.log(typeof page)
        
        if(isNaN(page)) {
            console.log("indefinido, redirigiendo...")
            navegar(`/peliculas-index/1`);
        }
    }, [navegar, pagina])

    return (
        <div style={{ textAlign: "center" }}>
            <LocalMoviesIcon />
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
                                    <Pelicula
                                        peliName={peli.title} peliHora={"1hrs 30min"} peliGenres={peli.genres} url={peli.thumbnail} id={peli.path} />
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