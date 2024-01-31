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

    const obtenerSalasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/JesuFrancesco/proyecto-progweb/main/public/salas.json");
        const json = await response.json();
        setSalas(json);
    }

    useEffect(() => {
        obtenerSalasHTTP();
    }, []);
    
    const sala = salas.find(sala => sala.salaName === salaName.replace(/-/g, " "));
    
    return <>
        <Header />
        <div className='container'>
        
            {
                (sala)? <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>
                    <SalaItem sala={ sala }/>
                </div> : <div />   
            }
        
        <Footer />
        </div>
    </>

}

export default SalaItemPage