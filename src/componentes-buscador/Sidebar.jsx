import logo from './assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react';

const Sidebar = () => {
    // enlaces a distintas secciones de la pagina web
    const enlaces = [
        {ruta: "/menu", label: "Menu page"},
        {ruta: "/salas", label: "Salas"},
        {ruta: "/peliculas-index", label: "Peliculas"}
    ]

    // obtiene el usuario_obj mediante 'ruta.state'
    const ruta = useLocation();

    const [valorInput, setValorInput] = useState();
    const [enlacesVisibles, setEnlacesVisibles] = useState(enlaces);

    const filtrarLinks = (keyword) => {
        // si es vacio muestra todo
        if (keyword.length === 0) setEnlacesVisibles(enlaces);
        // y si no lo es, filtra enlaces con la keyword
        else setEnlacesVisibles(enlaces.filter(enlace => new RegExp(keyword, "i").test(enlace.label)));
    };

    const handleInputChange = (evt) => {
        setValorInput(evt.target.value);
        filtrarLinks(evt.target.value);
    }

    return <>
            <div className="text-center">
                {/* Logo */}
                <a href='https://www.ulima.edu.pe/'>
                    <img src={ logo } id="logo" alt='' className='mt-3'/>
                </a>

                {/* Buscador / filtro */}
                <div>
                    <input type="text" className="my-4" placeholder="Buscar" id="buscador" 
                    value={ valorInput } onChange={ handleInputChange } />
                </div>
            </div>

            {/* Conjunto de links */}
            <div>
                <ul className='link-lateral'>
                    {
                        enlacesVisibles.map((enlace, i) => 
                            <li key={i} ><Link to={ enlace.ruta } state={ {usuario_obj: ruta.state.usuario_obj} }>{enlace.label}</Link></li>    
                        )
                    }
                </ul>
            </div>
        </>
}

export default Sidebar
