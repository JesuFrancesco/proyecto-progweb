import { useState } from "react";
import { Box } from "@mui/material"
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';

import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';
import CambiarContraseña from "./CambiarContra";
import CambiarNombres from "./CambiarNombres";
import Historial from "./Historial";

const ConfiguracionIndex = () => {
    const [open, setOpen] = useState(true);
    const [seccionActual, setSeccionActual] = useState(<></>);

    return <Box className="container" sx={{mt:"7em"}}>

        <Box className="row">
            {/* Sidebar */}
            <Box className="col-sm-4" >

                <List 
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="subtitulo"
                    subheader={
                    <ListSubheader sx={{color: "text.primary"}} component="div" id="subtitulo">
                        Lista de configuraciones
                    </ListSubheader>
                    }
                >
                    {/* Cuenta label */}
                    <ListItemButton onClick={() => setOpen(!open)}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Cuenta" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    {/* Dentro de cuenta label */}
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => setSeccionActual(<CambiarNombres />)} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <BadgeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cambiar nombre o apellidos" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => setSeccionActual(<CambiarContraseña />)} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cambiar contraseña" />
                            </ListItemButton>
                        </List>

                        <List component="div" disablePadding>
                            <ListItemButton onClick={() => setSeccionActual(<Historial />)} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <HistoryRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Historial de reservas" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List> 

            </Box>
            
            <Box className="col">
                {/* Elem */}
                {
                    seccionActual
                }
            </Box>
            
        </Box>

    </Box>
}

export default ConfiguracionIndex