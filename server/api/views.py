from django.shortcuts import render
from django.http import *
from .models import *
from django.views.decorators.csrf import csrf_exempt #
from django.core.handlers.wsgi import WSGIRequest as RequestType
from django.core import serializers
import json

@csrf_exempt
def obtenerSalasPreview(request: RequestType):
    if request.method == "GET":
        # Retorno
        response = lambda dictionary, code = 200: HttpResponse(json.dumps(dictionary), content_type="application/json", status=code)

        try:
            array_salas = []
            # formato de sala a retornar
            to_sala_json = lambda sala: {
                "name": sala.name,
                "phoneNumber": sala.phoneNumber,
                "emailAddress": sala.emailAddress,
                "address": sala.address,
                "secondAddress": sala.secondAddress,
                "city": sala.city,
                "description": sala.description,
                "path": sala.path,
                "img": sala.img,
                "formats": list(sala.formats.values()),
            }

            if not request.GET.get("name") and not request.GET.get("format"):
                array_salas = [to_sala_json(sala) for sala in Sala.objects.all() ]
                respDict = {
                    "msg" : "",
                    "salas": array_salas
                }
                return response(respDict)
            
            # Obtención de filtros
            nombre_filter = request.GET.get("name")
            format_filter = request.GET.get("format")
            if format_filter and not format_filter.isdigit(): raise Exception("El format debe ser la id (integer) de formato de sala")

            if not nombre_filter:
                array_salas = [to_sala_json(sala) for sala in Sala.objects.all() ]
            else:
                array_salas = [to_sala_json(sala) for sala in Sala.objects.filter(name__icontains=nombre_filter) ]

            if format_filter:
                existeSala = lambda list_formatos: any(list(map(lambda formato: formato["id"] == int(format_filter), list_formatos))) # i luv programacion funcional
                array_salas = list(filter(lambda sala: existeSala(sala["formats"]), array_salas))

            respDict = {
                "msg" : "",
                "salas": array_salas
            }
            return response(respDict)
        
        except Exception as err:
            return response({"msg": str(err)}, 400)
        
@csrf_exempt
def obtenerSalaItem(request: RequestType, salapath: str):
    if request.method == "GET":
        # Retorno
        response = lambda dictionary, codigo = 200: HttpResponse(json.dumps(dictionary), content_type="application/json", status=codigo)

        try:
            # formato de ventana a retornar
            to_window_json = lambda window: {
                "date": str(window.date),
                "hour": str(window.hour),
            }

            # formato de funcion a retornar
            to_movie_json = lambda movie: {
                "title": movie.title,
                "year": movie.year,
                "extract": movie.extract,
                "thumbnail": movie.thumbnail,
                "cast": [Cast.objects.get(pk=movie_cast["cast_id"]).name for movie_cast in Movie_Cast.objects.filter(movie=movie.pk).values()],
                "genres": [Genre.objects.get(pk=movie_genre["genre_id"]).name for movie_genre in Movie_Genre.objects.filter(movie=movie.pk).values()],
                "path": movie.path
            }

            # formato de funcion a retornar
            to_funcion_json = lambda funcion: {
                "movie": to_movie_json(Movie.objects.get(pk=funcion.movie.pk)),
                "window": to_window_json(Window.objects.get(pk=funcion.window.pk)),
            }

            # formato de sala a retornar
            to_sala_json = lambda sala, funciones: {
                "name": sala.name,
                "phoneNumber": sala.phoneNumber,
                "emailAddress": sala.emailAddress,
                "address": sala.address,
                "secondAddress": sala.secondAddress,
                "city": sala.city,
                "description": sala.description,
                "path": sala.path,
                "img": sala.img,
                "formats": [formato_obj["format"] for formato_obj in sala.formats.values()],
                "funciones": list(funciones),
            }

            # Obtener la sala (lanza DoesNotExist excepcion)
            sala = Sala.objects.get(path=salapath)

            # Obtener las funciones relacionadas con la sala y agregarlas a cada sala
            funciones = Funcion.objects.filter(sala=sala.pk)
            salaDict = to_sala_json(sala=sala, funciones=[to_funcion_json(funcion=funcion) for funcion in funciones])

            respDict = {
                "msg" : "",
                "sala": salaDict
            }
            return response(respDict)
        
        except Sala.DoesNotExist:
            return response({"msg": "No existe la sala buscada"}, 400)
        
        except Exception as err:
            print(err.with_traceback())
            return response({"msg": "Algo salio mal."}, codigo=500)


def obtenerPelicula_Detalle(request):
    if request.method == "GET":
        pathFiltro = request.GET.get("path")

        if pathFiltro == "":
            listaMovieFiltrada = Movie.objects.all()
        else:
            listaMovieFiltrada = Movie.objects.filter(path__icontains=pathFiltro)

        dataResponse = []
        for movie in listaMovieFiltrada:  
            dataResponse.append({
                "title": movie.title,
                "year": movie.year,
                "extract": movie.extract,
                "thumbnail": movie.thumbnail,
                "path": movie.path,
                "cast": [Cast.objects.get(pk=movie_cast["cast_id"]).name for movie_cast in Movie_Cast.objects.filter(movie=movie.pk).values()],
                "genres": [Genre.objects.get(pk=movie_genre["genre_id"]).name for movie_genre in Movie_Genre.objects.filter(movie=movie.pk).values()],
                "salas": [Sala.objects.get(pk=funcion["sala_id"]).name for funcion in Funcion.objects.filter(movie=movie.pk).values()]
            })

        return HttpResponse(json.dumps(dataResponse))

def obtenerPeliculas(request):
    if request.method == "GET":
        filtroNombre = request.GET.get("nombre")

        if filtroNombre == "":
            listaMovieFiltrada = Movie.objects.all()
        else:
            listaMovieFiltrada = Movie.objects.filter(title__icontains=filtroNombre)

        dataResponse = []
        for movie in listaMovieFiltrada:
            generos = Movie_Genre.objects.filter(movie=movie.pk)
            generos_lista = [genre.genre.name for genre in generos]
            
            dataResponse.append({
                "title": movie.title,
                "year": movie.year,
                "extract": movie.extract,
                "thumbnail": movie.thumbnail,
                "path": movie.path,
                "genres":generos_lista
            })

        return HttpResponse(json.dumps(dataResponse))



@csrf_exempt
def loginEndPoint (request): 
    if request.method == "POST":
        try:
            data = request.body
            usernameData = json.loads(data)

            codigo = usernameData["codigo"]
            contrasenha  = usernameData["contrasenha"]

            # Interactuamos con la bd mediante el modelo (Query)
            listaUsuariosFiltrada = Usuario.objects.filter(
                codigo = codigo, contrasenha = contrasenha 
            )

            if len(listaUsuariosFiltrada) > 0 :
                respuesta = {
                    "msg" : "",
                    "usuario" : list(listaUsuariosFiltrada.values())[0]
                }
                return HttpResponse(json.dumps(respuesta))
            else :
                respuesta = {
                    "msg" : "¡Error en login! Revisa tus credenciales"
                }
                return HttpResponse(json.dumps(respuesta), status=400)
            
        except Exception:
            respuesta = {
                "msg" : "¡Error en el login!"
            }
            return HttpResponse(json.dumps(respuesta), status=400)

@csrf_exempt
def registerEndPoint (request):
    if request.method == "POST":
        usuarios = request.body
        usuarioDict = json.loads(usuarios)

        if not usuarioDict["nombres"] or not usuarioDict["codigo"] or not usuarioDict["apellidos"] or not usuarioDict["contrasenha"]:
            errorDict = {
                "msg" : "Debes completar todos los campos"
            }
            return HttpResponse(json.dumps(errorDict), status=400)
        
        for char in usuarioDict["codigo"]:
            if not char.isdigit():
                errorDict = {
                    "msg" : "El código debe ser un numero de 8 dígitos"
                }
                return HttpResponse(json.dumps(errorDict), status=400)

        if len(usuarioDict["codigo"]) != 8:
            errorDict = {
                "msg" : "El código debe ser un numero de 8 dígitos"
            }
            return HttpResponse(json.dumps(errorDict), status=400)

        # Interactuamos con la bd mediante el modelo (Query)
        listaUsuariosFiltrada = Usuario.objects.filter(codigo = usuarioDict["codigo"])

        if len(listaUsuariosFiltrada) > 0 : 
            return HttpResponse(json.dumps({
                "msg" : "El código ya se encuentra registrado en la página."
            }))
        
        # insertar el usuario
        usuario = Usuario(
            nombres=usuarioDict["nombres"], 
            apellidos = usuarioDict ["apellidos"],
            contrasenha = usuarioDict ["contrasenha"],
            codigo = usuarioDict["codigo"],
        )
        # print(usuario)
        usuario.save()

        respDict = {
            "msg" : ""
        }
        return HttpResponse(json.dumps(respDict))
