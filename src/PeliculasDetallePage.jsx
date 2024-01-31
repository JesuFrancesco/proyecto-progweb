// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Pelicula index

import './componentes-buscador/estilos-buscador.css'
import DetalleIndex from './componentes-detalle/DetalleIndex.jsx'
import './componentes-detalle/estilos.css'
import { useLocation } from 'react-router-dom'

const PeliculasDetallePage = () => 
{
    const ruta = useLocation();
    return <>
        <Header />
        <div className='container'>
            <div className="mt-4 mx-auto" style={ {marginLeft: "100", float: "none"} }>
                <DetalleIndex usuario_obj={ruta.state.usuario_obj}/>
            </div>
            <Footer />
        
        </div>
    </>
}

export default PeliculasDetallePage
