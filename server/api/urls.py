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
    # correo
    path("correo", enviarCorreo),
    path("confirmacion", correoConfirmado)
    
]
