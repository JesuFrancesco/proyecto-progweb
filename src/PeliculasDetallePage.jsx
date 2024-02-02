// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Pelicula index

import './componentes-buscador/estilos-buscador.css'
import DetalleIndex from './componentes-detalle/DetalleIndex.jsx'
import './componentes-detalle/estilos.css'

const PeliculasDetallePage = () => 
{
    return <>
        <Header />
        <div className='container' style={ { padding: "4em 0" }}>
            <div className="mt-4 mx-auto" style={ {marginLeft: "100", float: "none"} }>
                <DetalleIndex />
            </div>
            <Footer />
        
        </div>
    </>
}

export default PeliculasDetallePage
