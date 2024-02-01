export function checkLogin() {
    
    if (!sessionStorage.getItem('usuario_objeto')) { 
        return false;
    }
    return true;
}