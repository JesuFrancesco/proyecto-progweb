import estrella from './media/estreblanca.png'
import menuHam from './media/menuHambur.png'

import MenuHamburguesa from './MenuHamburguesa'

const Header = () => {

    return <>
        <div className="header1 d-flex align-items-center justify-content-between">
        <span id="cabecera">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuHamburguesa" aria-controls="menuHamburguesa" aria-label="Toggle navigation">
                <img src={ menuHam } id="hamburguesa"/>
            </button>

            {/* menu hamburguesa !!!!!!!!!!!!!!!!!!! */}
            <MenuHamburguesa/>
            &nbsp; &nbsp; &nbsp; Salas de Cine Ulima
        </span>

        <span id="Estrellas">
            { Array(5).fill(<span><img src={ estrella } style={ {"margin-right" : "10px"} }/></span>) }
        </span>
    </div>
    </>
}

export default Header