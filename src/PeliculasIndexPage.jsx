// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'
import Sidebar from './componentes-buscador/Sidebar.jsx'

// Pelicula index


// import filtroNombre from './componentes-salas/FiltrarSalas.js'

import './componentes-buscador/estilos-buscador.css'
import PeliculaIndex from './componentes-peliculas/PeliculaIndex.jsx'

const PeliculaIndexPage = () => {
    return <div className='container'>
        <Header />
        <div className="mt-4 mx-auto mb-4" style={ {margin: "0 auto", float: "none"} }>  
           <PeliculaIndex/> 
        </div>
        <Footer/>
        
        {/* <script src= { filtroNombre } ></script> */}
    </div>
}

export default PeliculaIndexPage