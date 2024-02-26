import { Alert, Box, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const CambiarContraseña = () => {
    const navegacion = useNavigate()
    const usu = sessionStorage.getItem("usuario_objeto")
    const usuario = JSON.parse(usu)

    const [alert, setAlert] = useState('')
    const [contra, setContra] = useState('')
    const [contraConfirma, setContraConfirma] = useState('')

    const handleCambioContrasenha = () => {
        if(contra !== contraConfirma) {
            setAlert('¡Las contraseñas no coinciden!')
            return;
        }

        const hacerCambio = async () => {
            const res = await fetch("http://localhost:8000/api/cambio-contrasenha", 
                {
                    method: "PUT",
                    body: JSON.stringify({
                        codigo: usuario.codigo,
                        contrasenha: contra,
                    })
                }
            )
            const data = await res.json()

            if (!data.msg) {
                window.alert("Contrasenha actualizada correctamente!")
                sessionStorage.clear()
                navegacion("/")
            }
        }
        hacerCambio()
    }

    return <>
        <h2>Ingrese su nueva contraseña</h2> <br />

        <Box sx={{mb: 3}}>
            <Typography>Contraseña</Typography>
            <TextField 
                type="password"
                value={contra}
                onChange={e => setContra(e.target.value)}
                sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: "75%"}}  // remover label
                variant="outlined"  />
        </Box>

        <Box sx={{mb: 3}}>
            <Typography>Confirme contraseña</Typography>
            <TextField 
                type="password"
                value={contraConfirma}
                onChange={e => setContraConfirma(e.target.value)}
                sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 }, width: "75%"}}  // remover label
                variant="outlined"  />
        </Box>

        <Button variant="contained" onClick={handleCambioContrasenha}>
            <Typography color={"text.primary"}>Cambiar la contraseña</Typography>
        </Button>

        {
            (() => {
                if(alert){
                    return <Alert sx={{mt:"2em"}} severity="error">
                        {alert}
                    </Alert>
                }
            })()
        }

        
    </>
}

export default CambiarContraseña