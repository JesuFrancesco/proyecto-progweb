import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PeliculaCard = () => {
    const [state, setState] = useState({
        cargando: true,
        resultado: '',
    });
    
    const queryUrl = ` https://pweb2024-api.azurewebsites.net/api/peliculas`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(queryUrl);
                const data = await response.json();
                const rndIndex = Math.floor(Math.random() * data.length);

                if (data) {
                    setState({ cargando: false, resultado: data[rndIndex] });
                } else {
                    setState({ cargando: false, resultado: '-' });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setState({ cargando: false, resultado: 'Error fetching data.' });
            }
        };

        fetchData();
    }, [queryUrl]);

    const { cargando, resultado } = state;

    return (
        <Box>
            Te recomiendo ver... 
            { cargando ? "cargando..." : 
                <Link to={`/peliculas-detalle/${resultado.path}`}>
                    <Box sx={{backgroundColor: "primary.main", textAlign: "center"}}>
                        {resultado.title}
                        <img style={{width: "100%"}} src={resultado.thumbnail} alt="" />
                    </Box>
                </Link>
            }
            

            <br />
            Su sinopsis es...
            {
                cargando ? "cargando..." : <Typography>{resultado.extract}</Typography>
            }
        </Box>
    );
};

export default PeliculaCard;
