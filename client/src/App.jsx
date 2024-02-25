import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from "@mui/material"
import { temaClaro, temaOscuro } from "./theme/Temas"
import Rutas from "./router/Rutas"
import useLocalStorage from 'use-local-storage'


const App = () => {
    const [tema, _] = useLocalStorage('usuario_tema', temaClaro)

    // Tema claro por defecto
    return <ThemeProvider theme={tema === 'dark'? temaOscuro: temaClaro}>
        <CssBaseline />
        <RouterProvider router={ Rutas() } />
    </ThemeProvider>
}

export default App