import { createHashRouter } from "react-router-dom"

// Import de los react de otras paginas
import SalaIndexPage from "../SalaIndexPage"
import SalaItemPage from "../SalaItemPage"
import PeliculasIndexPage from "../PeliculasIndexPage"
import PeliculasDetallePage from "../PeliculasDetallePage"
import ReservaPage from "../ReservaPage"
import MenuPage from "../MenuPage"
import LoginPage from "../LoginPage"
import RegistroPage from "../RegistroPage"
import RecuperaPage from "../RecuperaPage"

const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            element: <LoginPage />
        },
        {
            path: "/recuperacion-correo",
            element: <RecuperaPage />
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
            path: "/peliculas-index/",
            element: <PeliculasIndexPage />
        },
        {
            path: "/peliculas-index/:pagina",
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
        {
            path : "/reserva/:movie",
            element: <ReservaPage/>
        }
    ])
}
export default Rutas