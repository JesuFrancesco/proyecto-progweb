from django.urls import path
from .views import *
urlpatterns = [
    # =====================
    # Login & register urls
    # =====================

    # POST
    # JSON ({codigo, contrasenha})
    path("login", loginEndPoint), 

    # POST
    # JSON ({codigo, nombres, apellidos, contrasenha})
    path("register", registerEndPoint), 

    # POST
    # JSON ({nombres, apellidos, codigo})
    path("cambio-nombres", cambiarNombre), 

    # POST
    # JSON ({codigo, contrasenha})
    path("cambio-contrasenha", cambiarContrasenha),

    # =====================
    # Salas urls
    # =====================

    # GET
    # Query (name | format | empty)
    path("salas", obtenerSalasPreview), 

    # GET
    # Path (path)
    path("sala/<str:salapath>", obtenerSalaItem),

    # =====================
    # Pelicula urls
    # =====================

    # GET
    # Query (path)
    path("detalle", obtenerPelicula_Detalle),

    # GET
    # Query (path)
    path("peliculas", obtenerPeliculas),

    # =====================
    # Funcion u reserva url
    # =====================
    path("funciones", obtenerFuncionesPreview),
    path("reserva-register", registroReserva),


    # =====================
    # correo urls
    # =====================
    path("correoCode",correoXcodigo),
    path("verificacion",verificarCodigo),
    path("verificar-usuario",verificarUsuario)
    
    
]
