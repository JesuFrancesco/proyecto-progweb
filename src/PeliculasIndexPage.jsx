// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

import './componentes-buscador/estilos-buscador.css'
import PeliculaIndex from './componentes-peliculas/PeliculaIndex.jsx'
import './componentes-peliculas/estilopeli.css'
import { useLocation } from 'react-router-dom'



const PeliculaIndexPage = () => 
{
    const ruta = useLocation();
    
    console.log(`Codigoo peli: ${(ruta.state.usuario_obj2)? ruta.state.usuario_obj2 : "no hayyy"}`)
    return <>
            <Header />
        <div className='container'>
            <div className="mt-4 mx-auto mb-4" style={ {margin: "0 auto", float: "none"} }>
                <PeliculaIndex
                    usuario_obj3={ruta.state.usuario_obj2}/>
            </div>
            <Footer/>
        
        </div>
    </>
}

export default PeliculaIndexPage