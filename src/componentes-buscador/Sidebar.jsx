import logo from './assets/logo.png'

const Sidebar = () => {
    return <footer>
                <div className="text-center">
                    <img src={ logo } id="logo" />
                    <div>
                        <input type="text" className="mb-4 mt-3" placeholder="Filtrar" id="buscador" />
                    </div>
                </div>
                <div>
                    <ul className='link-lateral'>
                        <li><span>Películas</span></li>
                        <li><span>Sala</span></li>
                    </ul>
                </div>
        </footer>
}

export default Sidebar