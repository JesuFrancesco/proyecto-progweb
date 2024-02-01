import { Box, Toolbar, IconButton, Typography, Drawer } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

import Sidebar from "./Sidebar";

const MenuHamburguesa = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onMenuClose = () => {
        setDrawerOpen(false)
    }

    return <Box sx={ {display: "inline-block"} }>

            {/* boton del menu (---)  */}
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2, color: "white" }}
                    onClick={ onMenuIconClick }
                >
                    <MenuIcon />
                </IconButton>

            {/* titulo: salas de cine ulima */}
                <Typography id="header-ulima-title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {(props.title)? props.title : "Salas de Cine Ulima"}
                </Typography>

            </Toolbar>
        
        {/* contenido desplegado */}
        <Drawer
            anchor="left"
            size={'lg'}
            open={drawerOpen}
            onClose={onMenuClose}
        >
            <Sidebar /> 
        </Drawer>
    </Box>
}

export default MenuHamburguesa