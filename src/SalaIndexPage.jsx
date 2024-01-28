// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Sala index
import SalaIndex from './componentes-salas/SalaIndex.jsx'
import './componentes-buscador/estilos-buscador.css'
import './componentes-salas/estilos.css'

const SalaIndexPage = () => {
    return <div className='container'>
        <Header />
        
        <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>  
            <SalaIndex/> 
        </div>
        
        <Footer />
    </div>
}

export default SalaIndexPage