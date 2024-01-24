import estrella from './assets/estreblanca.png'
import menuHam from './assets/menuHambur.png'

import MenuHamburguesa from './MenuHamburguesa'

const Header = () => {

    return <header>
        <div className="header-ulima d-flex align-items-center justify-content-between">
            <span id="header-ulima-title">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuHamburguesa" aria-controls="menuHamburguesa" aria-label="Toggle navigation">
                    <img src={ menuHam } id="hamburguesa"/>
                </button>

                <MenuHamburguesa/> &nbsp; &nbsp; Salas de Cine Ulima
            </span>

            <span>
                { Array(5).fill(<span><img className='estrellas' src={ estrella } style={ {"margin-right" : "10px"} }/></span>) }
            </span>
        </div>
    </header>
}

export default Header