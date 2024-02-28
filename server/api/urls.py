from django.urls import path
from .views import *
urlpatterns = [
    # Login & register urls
    path("login", loginEndPoint),
    path("register", registerEndPoint),
    path("cambio-nombres", cambiarNombre),
    path("cambio-contrasenha", cambiarContrasenha),

    # Salas urls
    path("salas", obtenerSalasPreview),
    path("sala/<str:salapath>", obtenerSalaItem),

    # Pelicula urls
    path("detalle", obtenerPelicula_Detalle),
    path("peliculas", obtenerPeliculas),

    # Funcion url
    path("funciones", obtenerFuncionesPreview),

    # Reserva url
    path("reserva-register", registroReserva),
    path("historial", obtenerReserva),
    # correo
    path("correopostmark", enviarCorreoPostmark),
    path("correoCode",correoXcodigo),
    path("verificacion",verificarCodigo),
    path("verificar-usuario",verificarUsuario)
    
    
]
