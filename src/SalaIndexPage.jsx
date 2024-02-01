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
    console.log("--- SalaIndexPage")
    console.log((ruta.state.usuario_obj)? ruta.state.usuario_obj : "guest");

    return <>
        <Header />
        <div className='container'>
        
            <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>
                <SalaIndex state={{
              usuario_obj: ruta.state.usuario_codigo
            }}/>
            </div>
        
            <Footer />
        </div>
    </>
}

export default SalaIndexPage