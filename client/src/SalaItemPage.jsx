// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Sala item
import SalaItem from './componentes-salas/SalaItem.jsx'
// import { salas } from './componentes-salas/Salas.js'

import './componentes-buscador/estilos-buscador.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Alert, Button, Box } from '@mui/material'

const SalaItemPage = () => {
    const navigate = useNavigate();
    const { id: salapath } = useParams();
    const [sala, setSala] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    
    useEffect(() => {
        const obtenerSala = async () => {
            setLoading(true)
            const response = await fetch(`http://localhost:8000/api/sala/${salapath}`);
            const data = await response.json();
            setLoading(false)
            // console.log(data)
            if (!data.msg)
                setSala(data.sala);
            else
                setError(data.msg);
        }

        obtenerSala();
    }, [salapath]);

    if(error){
        return <Box sx={{display: "block", justifyContent: "center"}} >
            <img src="https://http.cat/images/404.jpg" alt="" />
            <Alert sx={{mt:"1em"}} severity="error">{error}</Alert>
            <Button variant='contained' onClick={() => navigate("/")} > Ir a menu </Button>
        </Box>
    }
    
    return <>
        <Header />
        <div className='container' style={ { padding: "5em 0" } }>
        
            {
                // si no encuentra deja un div en blanco
                (sala)? <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>
                    <SalaItem sala={ sala }/>
                </div> : <div />   
            }
        
        <Footer />
        </div>
    </>

}

export default SalaItemPage