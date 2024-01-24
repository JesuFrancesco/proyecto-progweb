import logo from './assets/logo.png'

const Sidebar = () => {
    return <>
                <div className="text-center">
                    <img src={ logo } id="logo" />
                    <div>
                        <input type="text" className="mb-4 mt-3" placeholder="Buscar" id="buscador" />
                    </div>
                </div>
                <div>
                    <ul className='link-lateral'>
                        <li><span>Películas</span></li>
                        <li><span>Sala</span></li>
                    </ul>
                </div>
        </>
}

export default Sidebar