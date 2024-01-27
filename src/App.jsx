import { RouterProvider } from "react-router-dom"

import Rutas from "./router/Rutas"

const App = () => {
    // buscar forma de pasar de un jsx a otro...
    return <RouterProvider router={ Rutas() } />
}

export default App