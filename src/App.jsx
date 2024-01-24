import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Import de los react de otras paginas
import SalaIndexPage from "./SalaIndexPage"
import PeliculasIndexPage from "./PeliculasIndexPage"

const router = createBrowserRouter([
    {
        path: "/",
        // element: <AutenticacionPage /> ?? un redirect a la pagina de autenticacion antes de ir al menu (o al reves)
        element: <SalaIndexPage />
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
    // {
    //     path: "/peliculas",
    //     element: <PeliculasItemPage /> ??
    // },
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