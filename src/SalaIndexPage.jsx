// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Sala index
import SalaIndex from './componentes-salas/SalaIndex.jsx'
import './componentes-buscador/estilos-buscador.css'
import './componentes-salas/estilos_salas.css'
import { useLocation } from 'react-router-dom'

const SalaIndexPage = () => {
    const ruta = useLocation();
    console.log((ruta.state.usuario_codigo)? ruta.state.usuario_codigo : "guest");

    return <>
        <Header />
        <div className='container'>
        
            <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>
                <SalaIndex/>
            </div>
        
            <Footer />
        </div>
    </>
}

export default SalaIndexPage