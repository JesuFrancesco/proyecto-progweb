// Compoenentes adheridos
import Header from './componentes-buscador/Header.jsx'
import Footer from './componentes-buscador/Footer.jsx'

// Sala item
import SalaItem from './componentes-salas/SalaItem.jsx'
import { salas } from './componentes-salas/Salas.js'

import './componentes-buscador/estilos-buscador.css'
import { useParams } from 'react-router-dom'

const error = <><img src="https://http.cat/images/404.jpg" alt="" /></>

const SalaItemPage = () => {
    let { id } = useParams();
    const idNum = Number.parseInt(id);
    // console.log(idNum)

    if(isNaN(idNum)) 
        return error;
    
    if(salas[id - 1] === undefined)
        return error;

    const sala = salas[id-1];

    return <div className='container'>
        <Header />
        
        <div className="mt-4 mx-auto" style={ {margin: "0 auto", float: "none"} }>  
            <SalaItem sala={ sala }/>
        </div>
        
        <Footer />

    </div>

}

export default SalaItemPage