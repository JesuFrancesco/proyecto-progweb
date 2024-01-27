import { RouterProvider, createHashRouter } from "react-router-dom"

// Import de los react de otras paginas
import SalaIndexPage from "./SalaIndexPage"
import PeliculasIndexPage from "./PeliculasIndexPage"
import PeliculasDetallePage from "./PeliculasDetallePage"
import LinkTestPage from "./LinkTestPage"

const router = createHashRouter([
    {
        path: "/",
        // element: <AutenticacionPage /> ?? un redirect a la pagina de autenticacion antes de ir al menu (o al reves)
        element: <LinkTestPage />
    },
    {
        path: "/salas-index",
        element: <SalaIndexPage />
    },
    // {
    //     path: "/salas",
    //     element: <SalasItemPage /> ??
    // },
    {
        path: "/peliculas-index",
        element: <PeliculasIndexPage />
    },
    {
        path: "/peliculas-detalle",
        element: <PeliculasDetallePage />
    },
    {
        path: "/autenticacion",
        // element: <AutenticacionPage />
    },
    {
        path: "/menu",
        // element: <MenuPage />
    }
])

const App = () => {
    // buscar forma de pasar de un jsx a otro...
    return <RouterProvider router={ router } />
}

export default App