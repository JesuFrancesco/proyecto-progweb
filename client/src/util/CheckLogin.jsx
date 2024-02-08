export function checkLogin() {    
    if (!sessionStorage.getItem('usuario_objeto')) { 
        return false;
    }
    return true;
}
export function checkLoginInForm() {
    
    if (sessionStorage.getItem('usuario_objeto')) { 
        return true;
    }
    return false;
}