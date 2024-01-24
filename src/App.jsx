import { RouterProvider, createBrowserRouter } from "react-router-dom"
import BuscadorSalaIndex from "./BuscadorSalaIndex"

const router = createBrowserRouter([
    {
        path: "/",
        element: <BuscadorSalaIndex />
    },
    {
        path: "/salas",
        element: <BuscadorSalaIndex />
    },
    {
        path: "/peliculas",
        element: <BuscadorSalaIndex />
    },
    {
        path: "/autenticacion",
        element: <BuscadorSalaIndex />
    },
    {
        path: "/menu",
        element: <BuscadorSalaIndex />
    }
])

const App = () => {
    // buscar forma de pasar de un jsx a otro...
    return <RouterProvider router={ router } />
}

export default App