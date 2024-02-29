import { useState, useEffect } from "react";
import Sala from "./Sala"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CircularProgress from '@mui/material/CircularProgress';

import { TextField, Box, Alert, Select, MenuItem } from "@mui/material";

const SalaIndex = () => {
    const [loading, setLoading] = useState(false);

    const [salas, setSalas] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState("");
    const [filtroFormat, setFiltroFormat] = useState("");
    const [errorHTTP, setErrorHTTP] = useState("");
        
    useEffect(() => {
        // Peticiones HTTP al backend
        const obtenerSalasHTTP = async () => {
            setLoading(true)
            const response = await fetch(`
                http://localhost:8000/api/salas?${(filtroNombre)? `name=${filtroNombre}`: ""}&${(filtroFormat)? `&format=${filtroFormat}` : ""}
            `);
            const data = await response.json();
            if (!data.msg)
                setSalas(data.salas);
            else
                setErrorHTTP(data.msg)

            setLoading(false)
        }
        obtenerSalasHTTP();
    }, [filtroNombre, filtroFormat]);

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
        <Box style={{textAlign: "center"}}>
            <LocationCityIcon />
            <h2 className="my-1">Salas</h2>

            <Box sx={{my: 2}}>
                <FilterAltIcon style={ {marginRight: "0.5em"} }/>
                <TextField
                    type="text"
                    // className="form-control my-3"
                    placeholder="Filtrar por nombre"
                    // id="filtrarInput"
                    value={ filtroNombre }
                    onChange={ e => setFiltroNombre(e.target.value) }
                    sx={{ width: "50%", marginRight: "1em" }}
                />
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
            </Box>

            {
                loading && <CircularProgress />
            }

            <Box id="tarjetas" className="card-deck">
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
            </Box>
        </Box>
    </>
}

export default SalaIndex