export function checkLogin(navegacion) {
    
    if (!sessionStorage.getItem('usuario_objeto')) { 
        navegacion("/");
        return false;
    }
    return true;
}

export function checkLoginForm(navegacion) {
    
    if (sessionStorage.getItem('usuario_objeto')) { 
        navegacion("/menu")    
    }
}