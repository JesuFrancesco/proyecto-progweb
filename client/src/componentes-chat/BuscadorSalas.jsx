import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SalaCard = () => {
    const [state, setState] = useState({
        cargando: true,
        resultado: '',
    });
    
    const queryUrl = `http://localhost:8000/api/salas`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(queryUrl);
                const data = await response.json();
                const rndIndex = Math.floor(Math.random() * data.salas.length);

                if (!data.msg) {
                    setState({ cargando: false, resultado: data.salas[rndIndex] });
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
        <Box sx={{backgroundColor: "background.default"}}>
            Puedes ir al... 
            { cargando ? "cargando..." : 
                <Link to={`/salas/${resultado.path}`}>
                    <Box sx={{backgroundColor: "primary.main", textAlign: "center"}}>
                        {resultado.name} <br />
                        <img style={{width: "100%"}} src={resultado.img} alt="" />
                    </Box>
                </Link>
            }
            

            <br />
            Se encuentra en ...
            {
                cargando ? "cargando..." : <Typography>{resultado.address}</Typography>
            }
        </Box>
    );
};

export default SalaCard;
