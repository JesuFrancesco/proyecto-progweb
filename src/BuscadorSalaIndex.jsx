import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'
import Sidebar from './componentes-buscador/Sidebar.jsx'

import SalaIndexPage from './componentes-salas/SalaIndexPage.jsx'

// import filtroNombre from './componentes-salas/FiltrarSalas.js'

import './componentes-buscador/estilos-buscador.css'

const BuscadorSalaIndex = () => {
    return <div className='container'>
        <Header />
        <div className="contenido">
            <div className='row mt-4'>
                <div className="col-md-3"> <Sidebar/> </div>
                <div className="col"> <SalaIndexPage/> </div>
            </div>
        </div>
        <Footer />
        
        {/* <script src= { filtroNombre } ></script> */}
    </div>
}

export default BuscadorSalaIndex