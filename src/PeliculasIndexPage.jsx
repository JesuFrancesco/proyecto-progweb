// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'
import Sidebar from './componentes-buscador/Sidebar.jsx'

import './componentes-buscador/estilos-buscador.css'

const PeliculaIndexPage = () => {
    return <div className='container'>
        <Header />
        <div className="contenido">
            <div className='row mt-4'>
                <div className="col-md-3"> <Sidebar/> </div>
                <div className="col"> peliculaaaaaaaaas </div>
            </div>
        </div>
        <Footer />
        
    </div>
}

export default PeliculaIndexPage