// Cabecera y Pie de Pagina
import Footer from "./componentes-buscador/Footer"
import Header from "./componentes-buscador/Header"

//Reserva
import ReservaIndex from "./componentes-reserva/ReservaIndex"
import './componentes-reserva/estilorese.css'

export default function ReservaPage() {
    const subirReservaHTTP = async (reserva) => {
        console.log(JSON.stringify(reserva))
        const res = await fetch("http://127.0.0.1:8000/api/reserva-register", {
            method: "POST",
            body: JSON.stringify(reserva)
        });
        const data = await res.json();

        if (!data.msg)
            return true;
        else 
            return false;
    }

    return <>
        <Header/>
        <div className='container' style={ { padding: "4em 0" }}>
        
            <div className="mt-4 mx-auto mb-4" style={ {margin: "0 auto", float: "none"} }>
                <ReservaIndex reservaHTTP={subirReservaHTTP} />
            </div>
        
        <Footer/>
        </div>
    </>
}
