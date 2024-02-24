import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from "@mui/material"
import { temaClaro, temaOscuro } from "./theme/Temas"
import Rutas from "./router/Rutas"

const App = () => {
    return <ThemeProvider theme={temaClaro}>
        <CssBaseline />
        <RouterProvider router={ Rutas() } />
    </ThemeProvider>
}

export default App