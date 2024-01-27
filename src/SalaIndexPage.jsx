// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'
import Sidebar from './componentes-buscador/Sidebar.jsx'

// Sala index
import SalaIndex from './componentes-salas/SalaIndex.jsx'

// import filtroNombre from './componentes-salas/FiltrarSalas.js'

import './componentes-buscador/estilos-buscador.css'

const SalaIndexPage = () => {
    return <div className='container'>
        <Header />
        
        <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>  
            <SalaIndex/> 
        </div>
        
        <Footer />
        
        {/* <script src= { filtroNombre } ></script> */}
    </div>
}

export default SalaIndexPage