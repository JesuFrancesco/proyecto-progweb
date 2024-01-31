// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

import './componentes-buscador/estilos-buscador.css'
import PeliculaIndex from './componentes-peliculas/PeliculaIndex.jsx'
import './componentes-peliculas/estilopeli.css'
import { useLocation } from 'react-router-dom'



const PeliculaIndexPage = (props) => 
{
    const ruta = useLocation();
    console.log(`Codigoo peli: ${(ruta.state.usuario_codigo)? ruta.state.usuario_codigo : "no hayyy"}`)
    return <>
            <Header />
        <div className='container'>
            <div className="mt-4 mx-auto mb-4" style={ {margin: "0 auto", float: "none"} }>
                <PeliculaIndex usuario_obj={ruta.state.usuario_codigo}/>
            </div>
            <Footer/>
        
        </div>
    </>
}

export default PeliculaIndexPage