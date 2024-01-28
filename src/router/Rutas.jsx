import { createHashRouter } from "react-router-dom"

// Import de los react de otras paginas
import SalaIndexPage from "../SalaIndexPage"
import SalaItemPage from "../SalaItemPage"
import PeliculasIndexPage from "../PeliculasIndexPage"
import PeliculasDetallePage from "../PeliculasDetallePage"
import LinkTestPage from "../LinkTestPage"
import MenuPage from "../MenuPage"
import LoginPage from "../LoginPage"
import RegistroPage from "../RegistroPage"

const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            // element: <AutenticacionPage /> ?? un redirect a la pagina de autenticacion antes de ir al menu (o al reves)
            element: <LoginPage />
        },
        {
            path: "/registro",
            element: <RegistroPage />

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
            path: "/peliculas-detalle/:id",
            element: <PeliculasDetallePage />
        },
        {
            path: "/menu",
            element: <MenuPage/>
        },
    ])
}
export default Rutas
