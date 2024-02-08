import logo from './assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import ModalDialogChat from '../componentes-chat/ModalDialogChat';

const Sidebar = () => {
    const navegar = useNavigate();

    // enlaces a distintas secciones de la pagina web
    const enlaces = [
        {ruta: "/menu", label: "Menu page"},
        {ruta: "/salas", label: "Salas"},
        {ruta: "/peliculas-index", label: "Peliculas"}
    ]

    const [valorInput, setValorInput] = useState();
    const [enlacesVisibles, setEnlacesVisibles] = useState(enlaces);
    const [mostrarChat, setMostrarChat] = useState(false);

    const filtrarLinks = (keyword) => {
        // si es vacio muestra todo
        if (keyword.length === 0) setEnlacesVisibles(enlaces);
        // y si no lo es, filtra enlaces con la keyword
        else setEnlacesVisibles(enlaces.filter(enlace => new RegExp(keyword, "i").test(enlace.label)));
    };

    const handleInputChange = (evt) => {
        setValorInput(evt.target.value);
        filtrarLinks(evt.target.value);
    }

    const buscarPeliculasHTTP = async () => {
        const response = await fetch("https://raw.githubusercontent.com/ulima-pw/data-20240/main/peliculas_limpio.json");
        const json = await response.json();
        sessionStorage.setItem("peliculas", JSON.stringify(json))
    }

    useEffect(() => {
        buscarPeliculasHTTP();
    })

    return <>
        <div className="text-center">
            {/* Logo */}
            <a href='https://www.ulima.edu.pe/'>
                <img src={ logo } id="logo" alt='' className='mt-3'/>
            </a>
            {/* Buscador / filtro */}
            <div>
                <input type="text" className="my-4" placeholder="Buscar" id="buscador"
                value={ valorInput } onChange={ handleInputChange } />
            </div>
        </div>
        {/* Conjunto de links */}
        <div>
            <ul className='link-lateral'>
                {
                    enlacesVisibles.map((enlace, i) =>
                        <li key={i} ><Link to={ enlace.ruta } >{enlace.label}</Link></li>
                    )
                }
            </ul>
            <div style={ {textAlign: "center", display: "block"} } className='mb-5'>
                <button style={ {backgroundColor: "rgb(255, 102, 102)", fontWeight: "600"} } className='btn btn-danger' key={"cerrar-sesion"} onClick={ () => {sessionStorage.clear(); navegar("/")} } ><Link>Logout</Link></button>
            </div>
        </div>

        <div className='border mb-4'></div>

        <div style={ {textAlign: "center"} }>
            <div className='mb-2'><b>Chatbot</b></div>
            <Fab style={ {backgroundColor: "orangered"} } color="primary" aria-label="add" className='mb-4' onClick={() => setMostrarChat(!mostrarChat)} >
                <ChatIcon />
            </Fab>
        </div>

        {
            (mostrarChat)? <ModalDialogChat/> : <></>
        }
        
    </>
}

export default Sidebar
