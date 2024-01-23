import logo from './assets/logo.png'

const Sidebar = () => {
    return <>
        <div>
                <div className="text-center">
                    <img src={ logo } id="logo" />
                    <div>
                        <input type="text" className="mb-4 mt-3" placeholder="Filtrar" id="buscador" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Películas</span></li>
                        <li><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sala</span></li>
                    </ul>
                </div>
        </div>
    </>
}

export default Sidebar