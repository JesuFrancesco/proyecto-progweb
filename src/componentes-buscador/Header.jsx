import estrella from './assets/estreblanca.png'
import MenuHamburguesa from './MenuHamburguesa'

const estilos = {
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "10"
}

const Header = (props) => {

    return <header style={estilos}>
        <div className="header-ulima d-flex align-items-center justify-content-between">
            <span>
                <MenuHamburguesa title={(props.title)? props.title : null}/>
            </span>

            <span style={{marginRight: "10px"}}>
                { Array(5).fill("").map((_, index) => 
                    <span key={index}><img alt='' className='estrellas' src={ estrella } style={ {marginRight : "15px"} }/></span>
                ) }
            </span>
        </div>
    </header>
}

export default Header
