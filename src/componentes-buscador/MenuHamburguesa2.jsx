import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Card, CardContent, CardActions } from "@mui/material"
import { Container, ListItemIcon } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";

import Sidebar from "../../componentes/Sidebar";
// es con el componente de Side bar de jesu 
// aun falta
const MenuHamburguesa2 = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onMenuClose = () => {
        setDrawerOpen(false)
    }

    return <Box>
        <AppBar position="static" sx={{ backgroundColor: '#ffa500' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={ onMenuIconClick }
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Salas de cine Ulima
                </Typography>

            </Toolbar>
        </AppBar>
        <Drawer
            variant="temporary"
            anchor="left"
            onClose={onMenuClose}
            open={drawerOpen}
            ModalProps={{ keepMounted: true, BackdropProps: { invisible: true } }}
            sx={{
                width: 250,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 350,
                    top: '64px' 
                }
            }}
        >
            <Sidebar/> 
        </Drawer>
    </Box>
}

export default MenuHamburguesa2