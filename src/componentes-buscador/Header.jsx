import estrella from './assets/estreblanca.png'
import MenuHamburguesa from './MenuHamburguesa'

const Header = () => {

    return <header>
        <div className="header-ulima d-flex align-items-center justify-content-between">
            <span>
                <MenuHamburguesa />
            </span>

            <span style={{marginRight: "10px"}}>
                { Array(5).fill(<span><img alt='' className='estrellas' src={ estrella } style={ {marginRight : "15px"} }/></span>) }
            </span>
        </div>
    </header>
}

export default Header
