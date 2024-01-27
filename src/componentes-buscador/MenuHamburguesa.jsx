import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Card, CardContent, CardActions } from "@mui/material"
import { Container, ListItemIcon } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

import Sidebar from "./Sidebar";
// es con el componente de Side bar de jesu 
// aun falta
const MenuHamburguesa = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onMenuClose = () => {
        setDrawerOpen(false)
    }

    return <Box sx={ {display: "inline-block"} }>
        
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

                <Typography id="header-ulima-title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Salas de Cine Ulima
                </Typography>

            </Toolbar>
        
        <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={onMenuClose}
            size={'lg'}
        >
            <Sidebar/> 
        </Drawer>
    </Box>
}

export default MenuHamburguesa