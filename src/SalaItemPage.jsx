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
    const [salasExtra, setSalasExtra] = useState([]);
    const [peliculas, setPeliculas] = useState([]);

    const obtenerSalasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/JesuFrancesco/proyecto-progweb/main/public/salas.json");
        const json = await response.json();
        setSalas(json);
    }

    const obtenerSalasExtraHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/salasv2.json");
        const json = await response.json();
        setSalasExtra(json);
    }

    const obtenerPeliculasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/peliculas_limpio.json");
        const json = await response.json();
        setPeliculas(json);
    }

    useEffect(() => {
        obtenerSalasHTTP();
        obtenerSalasExtraHTTP();
        obtenerPeliculasHTTP();
    }, []);
    
    const s = salas.find(sala => sala.salaName === salaName.replace(/-/g, " "));
    const s2 = salasExtra.find(sala => sala.path === salaName);
    let sala = (s)? s: (s2)? s2: undefined;
    if(s2){
        sala = {
            salaName: s2.name,
            salaMapsRelativeLocation: s2.img,
            salaAddress: s2.address,
            salaTimes: ["11:00", "17:00", "18:00"],
            salaHistory: (`${s2.description}\nCelular: ${s2.phoneNumber}\nUbicacion: ${s2.city}`),
            url: s2.img
        }
        // {
        //     "ID": 1,
        //     "name": "CP Alcazar",
        //     "phoneNumber": "016194400",
        //     "emailAddress": "",
        //     "address": "Av. Santa Cruz 814-816",
        //     "secondAddress": "Miraflores Lima Lima",
        //     "city": "Lima",
        //     "description": "CINEPLANET ALCAZAR",
        //     "path": "cp-alcazar",
        //     "formats": [
        //         "2D",
        //         "REGULAR",
        //         "3D"
        //     ],
        //     "img": "https://cdn.cineplanet.com.pe/contentAsset/raw-data/b70aa8b9-f9f9-49c5-8f7e-28e6afd5646f"
        // },
    }
    
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