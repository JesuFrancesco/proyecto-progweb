// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'
import './componentes-buscador/estilos-buscador.css'
import PeliculaIndex from './componentes-peliculas/PeliculaIndex.jsx'
import './componentes-peliculas/estilopeli.css'

// usuario_obj3={ruta.state.usuario_obj2}

const PeliculaIndexPage = () => 
{
    
    return <>
            <Header />
        <div className='container'>
            <div className="mt-4 mx-auto mb-4" style={ {margin: "0 auto", float: "none"} }>
                <PeliculaIndex />
            </div>
            <Footer/>
        
        </div>
    </>
}

export default PeliculaIndexPage