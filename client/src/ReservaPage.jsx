// Cabecera y Pie de Pagina
import Footer from "./componentes-buscador/Footer"
import Header from "./componentes-buscador/Header"

//Reserva
import ReservaIndex from "./componentes-reserva/ReservaIndex"
import './componentes-reserva/estilorese.css'

export default function ReservaPage() {
    
    const subirReservaHTTP = async (reserva) => {
        const res = await fetch("", {
            method: "POST",
            body: JSON.stringify(reserva)
        });
        const data = await res.json();

        if (!data.msg)
            alert("reserva realizada con exito");
        else alert("algo malio sal");
        
    }

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
