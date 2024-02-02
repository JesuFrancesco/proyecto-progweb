// Cabecera y Pie de Pagina
import Footer from "./componentes-buscador/Footer"
import Header from "./componentes-buscador/Header"

//Reserva
import ReservaIndex from "./componentes-reserva/ReservaIndex"
import './componentes-reserva/estilorese.css'

export default function ReservaPage() {
    
    return <>
        <Header/>
        <div className='container' style={ { padding: "4em 0" }}>
        
            <div className="mt-4 mx-auto mb-4" style={ {margin: "0 auto", float: "none"} }>
                <ReservaIndex/>
            </div>
        
        <Footer/>
        </div>
    </>
}
