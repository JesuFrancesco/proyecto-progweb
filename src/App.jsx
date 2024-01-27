import { RouterProvider, createHashRouter } from "react-router-dom"

// Import de los react de otras paginas
import SalaIndexPage from "./SalaIndexPage"
import SalaItemPage from "./SalaItemPage"
import PeliculasIndexPage from "./PeliculasIndexPage"
import PeliculasDetallePage from "./PeliculasDetallePage"
import LinkTestPage from "./LinkTestPage"
import MenuPage from "./MenuPage"

const router = createHashRouter([
    {
        path: "/",
        // element: <AutenticacionPage /> ?? un redirect a la pagina de autenticacion antes de ir al menu (o al reves)
        element: <LinkTestPage />
    },
    {
        path: "/sala",
        element: <SalaIndexPage />
    },
    {
        path: "/sala/:id",
        element: <SalaItemPage />
    },
    {
        path: "/peliculas-index",
        element: <PeliculasIndexPage />
    },
    {
        path: "/peliculas-detalle",
        element: <PeliculasDetallePage />
    },
    {
        path: "/menu",
        element: <MenuPage/>
    },
    {
        path: "/autenticacion",
        // element: <AutenticacionPage />
    }
    
])

const App = () => {
    // buscar forma de pasar de un jsx a otro...
    return <RouterProvider router={ router } />
}

export default App