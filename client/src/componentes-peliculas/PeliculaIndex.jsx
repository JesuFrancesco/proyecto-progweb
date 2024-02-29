import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Pelicula from "./Pelicula";

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Pagination from '@mui/material/Pagination';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { Typography, Box, TextField, CircularProgress } from "@mui/material";

const PeliculaIndex = () => {
    const navegar = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [filtroNombre, setFiltroNombre] = useState("");
    const [peliculasJSON, setPeliculasJSON] = useState([]);
    const [peliS,setPeli]=useState([])
    
    const filtrarPeliculas = (keyword) => {
        const peliculasJSON = peliS //cada vez que se filtre lo hace desde la lista orginal ,de esta manera se vuelve a filtra cuando borras un caracter que ese era el problema xd
        const peliculasFiltradas = peliculasJSON.filter(
            peli => peli.title.toLowerCase().includes(keyword.toLowerCase())
        );
        return peliculasFiltradas;
    };
    
    useEffect(() => {
        const obtenerPeliculasHTTP = async () => {
            setLoading(true)
            const response = await fetch(`http://localhost:8000/api/peliculas`);
            if (response.ok) {
                const data = await response.json();
                setPeliculasJSON(data);
                setPeli(data);
                // Guardar los datos en sessionStorage
                sessionStorage.setItem("peliculasJSON", JSON.stringify(data));
            } else {
                setLoading(false)
                throw new Error("Error al obtener las películas");
            }  
            setLoading(false)
        };
        obtenerPeliculasHTTP();
    },[]);

    const handleInputChange = (evt) => {
        const keyword = evt.target.value;
        setFiltroNombre(keyword);
        const peliculasFiltradas = filtrarPeliculas(keyword);
        setPeliculasJSON(peliculasFiltradas);
    };

    const handlePageChange = (_, valor) => {       
        setPagina(valor);
        navegar(`/peliculas-index/${valor}`);
        window.scrollTo(0,0);
    };

    const obtenerPeliculasPaginadas = () => {
        const startIndex = pagina * 12 - 12;
        const endIndex = startIndex + 12;
        return peliculasJSON.slice(startIndex, endIndex);
    };
    
    return (
        <div style={{ textAlign: "center" }}>
            <LocalMoviesIcon />
            <h2>Peliculas</h2>

            {
                loading && <CircularProgress />

            }
            <Box sx={{my: "2em"}}>
                <FilterAltIcon sx={{ mt:1, fontSize: "2em", marginRight: "0.5em" }} />
                <TextField
                    type="text"
                    placeholder="Filtrar por nombre"
                    value={filtroNombre}
                    onChange={handleInputChange}
                    sx={{ width: "80%" }}
                    />
            </Box>

            <div id="tarjetas" className="row row-cols-1 row-cols-md-3 g-4">
                {obtenerPeliculasPaginadas().map((peli, i) => (
                    <div key={i} className="col">
                        <div key={i} className={`col`}>
                            <Pelicula
                                peliName={peli.title} peliHora={"1hrs 30min"} peliGenres={peli.genres} url={peli.thumbnail} id={peli.path} />
                        </div>
                    </div>
                ))}
            </div>

            <Typography sx={ {my: "1em"} }>Pagina: {pagina}</Typography>
            <Pagination count={Math.ceil(peliculasJSON.length/12)} page={pagina} onChange={handlePageChange} />
        </div>
    );
};

export default PeliculaIndex;
