import { createHashRouter } from "react-router-dom"

// Import de los react de otras paginas
import SalaIndexPage from "../SalaIndexPage"
import SalaItemPage from "../SalaItemPage"
import PeliculasIndexPage from "../PeliculasIndexPage"
import PeliculasDetallePage from "../PeliculasDetallePage"
import LinkTestPage from "../LinkTestPage"

const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            // element: <AutenticacionPage /> ?? un redirect a la pagina de autenticacion antes de ir al menu (o al reves)
            element: <LinkTestPage />
        },
        {
            path: "/salas",
            element: <SalaIndexPage />
        },
        {
            path: "/salas/:id",
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
            path: "/autenticacion",
            // element: <AutenticacionPage />
        },
        {
            path: "/menu",
            // element: <MenuPage />
        }
    ])
}
export default Rutas