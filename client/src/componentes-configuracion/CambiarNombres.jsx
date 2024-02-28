import { Box, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'

const CambiarNombres = () => {
    const navegacion = useNavigate()
    const usu = sessionStorage.getItem("usuario_objeto")
    const usuario = JSON.parse(usu)

    const [nombres, setNombre] = useState(usuario.nombres)
    const [apellidos, setApellidos] = useState(usuario.apellidos)

    const handleCambioNombres = async () => {
        const res = await fetch(" https://pweb2024-api.azurewebsites.net/api/cambio-nombres", 
            {
                method: "PUT",
                body: JSON.stringify({
                    codigo: usuario.codigo,
                    nombres: nombres,
                    apellidos: apellidos
                })
            }
        )
        const data = await res.json()

        if (!data.msg) {
            alert("¡Usuario actualizado correctamente!")
            sessionStorage.clear()
            navegacion("/")
        }
    }

    return <>
        <h2>Ingrese los campos a cambiar</h2> <br />

        <Box sx={{mb: 3}}>
            <Typography>Nombre</Typography>
            <TextField 
                value={nombres}
                onChange={e => setNombre(e.target.value)}
                sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: "75%"}}  // remover label
                variant="outlined"  />
        </Box>

        <Box sx={{mb: 3}}>
            <Typography>Apellidos</Typography>
            <TextField 
                value={apellidos}
                onChange={e => setApellidos(e.target.value)}
                sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: "75%"}}  // remover label
                variant="outlined"  />
        </Box>

        <Button variant="contained" onClick={ handleCambioNombres }>
            <Typography color={"text.primary"}>Cambiar datos</Typography>
        </Button>

        
    </>
}

export default CambiarNombres