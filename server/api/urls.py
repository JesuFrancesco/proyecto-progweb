from django.urls import path
from .views import *
urlpatterns = [
    path("salas", obtenerSalas),
    path("login", loginEndPoint),
    path("register", registerEndPoint)
]