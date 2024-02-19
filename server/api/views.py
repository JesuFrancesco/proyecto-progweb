from django.shortcuts import render
from django.http import *
from .models import *
from django.views.decorators.csrf import csrf_exempt #
from django.core.handlers.wsgi import WSGIRequest as RequestType
import json

@csrf_exempt
def obtenerSalas(request: RequestType):
    if request.method == "GET":
        if not request.GET.get("name") and not request.GET.get("format"):
            return HttpResponse(json.dumps(list(Sala.objects.all().values())), content_type="application/json")
        
        filtroName = request.GET.get("name")
        if filtroName:
            return HttpResponse(json.dumps(list(Sala.objects.filter(name__contains=filtroName).values())), content_type="application/json")
        filtroFormat = request.GET.get("format")
@csrf_exempt
def loginEndPoint (request): 
      if request.method == "POST":
        data = request.body
        usernameData = json.loads(data)

        codigo = usernameData["codigo"]
        contrasena  = usernameData["contrasenha"]

        # Interactuamos con la bd mediante el modelo (Query)
        listaUsuariosFiltrada = Usuario.objects.filter(
           codigo = codigo, contrasenha = contrasena 
        )

        if len(listaUsuariosFiltrada) > 0 :
            respuesta = {
                "msg" : ""
            }
            return HttpResponse(json.dumps(respuesta))
        else :
            respuesta = {
                "msg" : "Error en el login"
            }
            return HttpResponse(json.dumps(respuesta))
@csrf_exempt
def registerEndPoint (request):
      if request.method == "POST":
        usuarios = request.body
        usuarioDict = json.loads(usuarios)

        if usuarioDict["nombres"] == "" or usuarioDict["apellidos"] == ""  or  usuarioDict["contrasena"]=="":
            errorDict = {
                "msg" : "Debe ingresar los datos completo de usuario"
            }
            return HttpResponse(json.dumps(errorDict))
        # insert usuario
        usuario = Usuario(
            nombres=usuarioDict["nombres"], 
            apellidos = usuarioDict ["apellidos"],
            correo = "correo",
            contrasenha = usuarioDict ["contrasena"],
            codigo = usuarioDict["codigo"],
        )
        print(usuario)
        usuario.save()
     

        respDict = {
            "msg" : ""
        }
        return HttpResponse(json.dumps(respDict))
   