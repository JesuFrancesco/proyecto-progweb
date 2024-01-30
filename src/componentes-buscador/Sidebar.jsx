import logo from './assets/logo.png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return <>
                <div className="text-center">
                    <a href='https://www.ulima.edu.pe/'><img src={ logo } id="logo" alt='' className='mt-3'/></a>
                    <div>
                        <input type="text" className="my-4" placeholder="Buscar" id="buscador" />
                    </div>
                </div>

                <div>
                    <ul className='link-lateral'>
                        <li><Link to={ "/menu" }>Menu page</Link></li>
                        <li><Link to={ "/salas" }>Salas</Link></li>
                        <li><Link to={ "/peliculas-index" }>Películas</Link></li>
                    </ul>
                </div>
        </>
}

export default Sidebar
