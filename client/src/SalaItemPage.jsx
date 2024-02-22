// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Sala item
import SalaItem from './componentes-salas/SalaItem.jsx'
// import { salas } from './componentes-salas/Salas.js'

import './componentes-buscador/estilos-buscador.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Alert } from '@mui/material'

// const error = <><img src="https://http.cat/images/404.jpg" alt="" /></>

const SalaItemPage = () => {
    const { id: salapath } = useParams();
    const [sala, setSala] = useState({});
    const [error, setError] = useState("");

    
    useEffect(() => {
        const obtenerSala = async () => {
            const response = await fetch(`http://pweb2024.azurewebsites.net/api/sala/${salapath}`);
            const data = await response.json();
            console.log(data)
            if (!data.msg)
                setSala(data.sala);
            else
                setError(data.msg);
        }

        obtenerSala();
    }, [salapath]);
    
    return <>
        {
            (() => {
                if(error)
                    return <Alert severity="error">{error}</Alert>
            })()
        }
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