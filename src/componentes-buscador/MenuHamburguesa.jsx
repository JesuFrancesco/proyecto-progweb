const MenuHamburguesa = () => {
    return <>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="menuHamburguesa" aria-labelledby="menuHamburguesaLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="menuHamburguesaLabel">Cines ULIMA</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Menu</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>

                {/* <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form> */}
            </div>

        </div>
    </>
}

export default MenuHamburguesa