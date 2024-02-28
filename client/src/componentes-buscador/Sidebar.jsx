import logo from './assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import ModalDialogChat from '../componentes-chat/ModalDialogChat';
import { Box, TextField, Fab, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './SwitchDark';

import useLocalStorage from 'use-local-storage';

const Sidebar = () => {
    const [tema, setTema] = useLocalStorage('usuario_tema', 'dark')
    const navegar = useNavigate();

    // enlaces a distintas secciones de la pagina web
    const enlaces = [
        {ruta: "/menu", label: "Menu page"},
        {ruta: "/salas", label: "Salas"},
        {ruta: "/peliculas-index", label: "Peliculas"},
        {ruta: "/configuracion", label: "Mi cuenta"}
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


    
    return <>
        <Box sx={{textAlign:"center"}}>
            {/* Logo */}
            <Link to='https://www.ulima.edu.pe/'>
                <img src={ logo } id="logo" alt='' className='mt-3'/>
            </Link>
            {/* Buscador / filtro */}
            <Box>
                <TextField type="text" className="my-4" placeholder="Buscar" id="buscador"
                value={ valorInput } onChange={ handleInputChange } />
            </Box>
        </Box>


        {/* Conjunto de links */}
        <Box>
            <ul className='link-lateral'>
                {
                    enlacesVisibles.map((enlace, i) =>
                        <li key={i} >
                            <Link to={ enlace.ruta } >
                                <Box sx={{display: "inline", color: "text.primary"}} >{enlace.label}</Box>
                            </Link>
                        </li>
                    )
                }
            </ul>
            <Box sx={{textAlign: "left", ml: "3em", float: "left"}}>
                <FormControlLabel
                    control={<MaterialUISwitch checked={tema==='dark'} onChange={() => setTema(tema === 'dark'? 'light': 'dark')} sx={{ m: 1 }} />}
                />
            </Box>

            <Box sx={{textAlign: "right", mr: "2em", float: "right"}}>
                <IconButton  sx={ {mb: "2em"} }>
                    <LogoutIcon sx={{fontWeight: "600"}}
                        color='warning'
                        key={"cerrar-sesion"}
                        onClick={ () => {sessionStorage.clear(); navegar("/")} } >
                            <Link>Logout</Link>
                    </LogoutIcon>
                </IconButton>
            </Box>
        </Box>

        {/*  */}
        <Box className='border mb-4'></Box>
        {/*  */}

        <Box sx={ {textAlign: "center"} }>
            <Box className='mb-2'><b>Chatbot</b></Box>
            <Fab color="primary" className='mb-4' onClick={() => setMostrarChat(!mostrarChat)} >
                <ChatIcon sx={{color: "white"}}/>
            </Fab>
        </Box>

        {
            (mostrarChat)? <ModalDialogChat/> : <></>
        }
        
    </>
}

export default Sidebar
