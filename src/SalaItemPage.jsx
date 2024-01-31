// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Sala item
import SalaItem from './componentes-salas/SalaItem.jsx'
// import { salas } from './componentes-salas/Salas.js'

import './componentes-buscador/estilos-buscador.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// const error = <><img src="https://http.cat/images/404.jpg" alt="" /></>

const SalaItemPage = () => {
    

    const { id: salaName } = useParams();
    const [salas, setSalas] = useState([]);
    const [peliculas, setPeliculas] = useState([]);

    const obtenerSalasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/JesuFrancesco/proyecto-progweb/main/public/salas.json");
        const json = await response.json();
        setSalas(json);
    }

    const obtenerPeliculasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/peliculas_limpio.json");
        const json = await response.json();
        setPeliculas(json);
    }

    useEffect(() => {
        obtenerSalasHTTP();
        obtenerPeliculasHTTP();
    }, []);
    
    const sala = salas.find(sala => sala.salaName === salaName.replace(/-/g, " "));
    
    return <>
        <Header />
        <div className='container'>
        
            {
                // si no encuentra deja un div en blanco
                (sala)? <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>
                    <SalaItem sala={ sala } peliculas={ peliculas }/>
                </div> : <div />   
            }
        
        <Footer />
        </div>
    </>

}

export default SalaItemPage