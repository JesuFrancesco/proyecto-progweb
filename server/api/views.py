from django.shortcuts import render
from django.http import *
from .models import *
from django.views.decorators.csrf import csrf_exempt #
from django.core.handlers.wsgi import WSGIRequest as RequestType
from datetime import datetime
import locale
import json
import os 
import resend 
import random

# Formato de retorno
response = lambda dictionary, code = 200: HttpResponse(json.dumps(dictionary), content_type="application/json", status=code)

@csrf_exempt
def obtenerSalasPreview(request: RequestType):
    if request.method == "GET":

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
            # Establecer la configuración regional en español
            #locale.setlocale(locale.LC_TIME, 'es_ES.UTF-8')

            # Obtener la fecha de pc local
            #fecha_actual = datetime.now()

            # formato de ventana a retornar
            to_window_json = lambda window: {
            #    "date": fecha_actual.strftime("%A, %d de %B"),
                "dateStr": str(window.date),
                "hour": window.hour.strftime("%H:%M"),
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
        # Establecer la configuración regional en español
        #locale.setlocale(locale.LC_TIME, 'es_ES.UTF-8')

        # Obtener la fecha de pc local
        #fecha_actual = datetime.now()

        pathFiltro = request.GET.get("path")

        if pathFiltro == "":
            listaMovieFiltrada = Movie.objects.all()
        else:
            listaMovieFiltrada = Movie.objects.filter(path=pathFiltro)

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
                "salas": [{
                    "name": Sala.objects.get(pk=funcion["sala_id"]).name, 
                    "hour": Window.objects.get(pk=funcion["window_id"]).hour.strftime("%H:%M"), 
                    "date": Window.objects.get(pk=funcion["window_id"]).date.strftime("%Y-%m-%d")} for funcion in Funcion.objects.filter(movie=movie.pk).values()]
            })

        return HttpResponse(json.dumps(dataResponse))


def obtenerFuncionesPreview(request):
    if request.method == "GET":
        # limitar busqueda a un numero de funciones random
        num = request.GET.get("num")

        try:
            funciones = [{
                "id": funcion.pk,

                "sala": (lambda sala: {"name": sala.name}) (Sala.objects.get(pk=funcion.sala.pk)),

                "movie": (lambda pelicula: {
                    "title": pelicula.title, 
                    "extract": pelicula.extract, 
                    "thumbnail" : pelicula.thumbnail,
                    "path" : pelicula.path if not "/" in pelicula.path else pelicula.path.replace("/", "-")
                }) (Movie.objects.get(pk=funcion.movie.pk)),

                "window": (lambda ventana: {
                    "hour": ventana.hour.strftime("%H:%M"), 
                    "date": str(ventana.date)
                }) (Window.objects.get(pk=funcion.window.pk))
            } for funcion in Funcion.objects.all()]

            funcionesRnd = None
            if num:
                # validacion de integer
                if not num.isdigit(): raise ValueError("el numero debe ser de tipo integer.")
                num = int(num)
                if num > len(funciones): raise ValueError("el numero no puede ser mayor a la longitud de funciones")
                
                from random import sample
                ids_pivot = sample(list(map(lambda o: o["id"], funciones)), num)
                # print(ids_pivot)
                funcionesRnd = list(filter(lambda dict: dict["id"] in ids_pivot, funciones))

            respDict = {
                "msg" : "",
                "funciones" : funciones if not funcionesRnd else funcionesRnd
            }
            # print(respDict)
            return response(respDict)
        
        except ValueError as err:
            return response({"msg": str(err)}, code=400)

def obtenerPeliculas(request):
    if request.method == "GET":
        filtroNombre = request.GET.get("nombre")

        if not filtroNombre or filtroNombre == "":
            listaMovieFiltrada = Movie.objects.all()[:100]
        else:
            listaMovieFiltrada = Movie.objects.filter(title__icontains=filtroNombre)[:100]

        dataResponse = []
        for movie in listaMovieFiltrada:
            generos = Movie_Genre.objects.filter(movie=movie.pk)
            generos_lista = [genre.genre.name for genre in generos]
            #salas=[]
            #salas=list([{"name": Sala.objects.get(pk=funcion["sala_id"]).name, "hour": Window.objects.get(pk=funcion["window_id"]).hour.strftime("%H:%M:%S")} for funcion in Funcion.objects.filter(movie=movie.pk).values()])
            #if len(salas)!=0:
            dataResponse.append({
                "title": movie.title,
                "year": movie.year,
                "extract": movie.extract,
                "thumbnail": movie.thumbnail,
                "path": movie.path if not "/" in movie.path else movie.path.replace("/", "-"),
                "genres":generos_lista
            })

        return HttpResponse(json.dumps(dataResponse),content_type="application/json")

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
                    "msg" : "¡Error en login! Revisa tus credenciales e inténtalo de nuevo."
                }
                return HttpResponse(json.dumps(respuesta), status=400)
            
        except ValueError:
            if not codigo.isdigit():
                return response({"msg": "El campo código debe ser un número de 8 dígitos."}, code=400)
        
        except Exception:
            return response({"msg": "¡Error en el login!"}, code=400)

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

#@csrf_exempt
def registroReserva (request):
    if request.method == "POST":
        try:
            reservaPython = json.loads(request.body)

            # por completar xd
            # reservaORM = Reserva(
            #     fecha = reservaPython["fecha"],
            #     entradas = reservaPython[],
            #     funcion = reservaPython[],
            #     usuario = reservaPython[],
            # )
            # reservaORM.save()

            return response({"msg": ""})

        except Exception as err:
            return response({"msg": str(err)}, code=400)


#api key :
#re_K1uTZPc7_5v1rNDgCSndewkywKMUxm5zD
#no usar esa es mia xd
#si quieren probar este code creense una cuenta en resend
#creen una api key y pongala como variale de entorno (con nombre RESEND_API_KEY)
#solo les deja enviar a su propio correo xd
def correoConfirmado(request):#query parameter con el usuario
    if request.method == "GET":
        
        #aca se hara el cambio en la base de datos 
        #aunque este metodo es algo inseguro puesto que se muestra la contra en el path 
        
        return HttpResponse("gracias por usar nuestro servicio")
#este sera el oficial
def correoXcodigo(request):
    if request.method == "GET":
        try:
            #codigo_alumno = request.GET.get("codigo")
            codigo_alumno="20211455"
            print(codigo_alumno)
            # Generar un código aleatorio de 6 dígitos
            codigo_aleatorio = ''.join([str(random.randint(0, 9)) for _ in range(6)])
            
            # Buscar al usuario correspondiente
            usuario = Usuario.objects.get(codigo=codigo_alumno)
            
            # Crear una instancia del modelo Code y guardarla en la base de datos
            code = Code(codigo=codigo_aleatorio, user=usuario)
            code.save()
            
            return HttpResponse("Código generado y guardado correctamente")
        
        except Usuario.DoesNotExist:
            return HttpResponse("No se encontró el usuario con el código proporcionado", status=404)
        
        except Exception as e:
            return HttpResponse("Error al generar y guardar el código: " + str(e), status=500)
        
@csrf_exempt
def verificarCodigo(request):
    if request.method == "POST":
        try:
            # Obtener los datos de la solicitud
            data = json.loads(request.body)
            print(data)
            codigo_usuario = data.get("codigo_usuario")
            codigo = data.get("codigo")
            nueva_contrasenha = data.get("nueva_contrasenha")
            

            # Buscar el código en la base de datos
            code = Code.objects.filter(codigo=codigo, user__codigo=codigo_usuario).first()#esta parte esta media xd

            if code:
                # Cambiar la contraseña del usuario
                usuario = Usuario.objects.get(codigo=codigo_usuario)
                usuario.contrasenha = nueva_contrasenha
                usuario.save()
                
                # Eliminar el código utilizado de la tabla Code
                code.delete()

                return HttpResponse("Contraseña cambiada correctamente")
            else:
                return HttpResponse("El código proporcionado no es válido para este usuario", status=400)
        
        except Exception as e:
            return HttpResponse("Error al verificar y cambiar la contraseña: " + str(e), status=500)        

#este es de prueba 
def enviarCorreo(request):
    if request.method == "GET":
        user="20211454"
        resend.api_key = os.environ["RESEND_API_KEY"]
        htmlS="""<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Confirmación de Cambio de Contraseña Cines Ulima</title>
                    </head>
                    <body>
                        <p>Hola {{ nombre_usuario }},</p>
                        <p>Has solicitado cambiar tu contraseña en nuestro sistema. Para confirmar este cambio, por favor haz clic en el siguiente botón:</p>
                        <p>
                            <a href="http://localhost:8000/api/confirmacion?nombre={}" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 10px;">Confirmar Cambio de Contraseña</a>
                        </p>
                        <p>Si no has solicitado este cambio, por favor ignora este mensaje.</p>
                        <p>Gracias,</p>
                        <p>El Equipo de Tu Aplicación</p>
                    </body>
                    </html>""".format(user)
        
        params = {
            "from": "Acme <uLima@resend.dev>",
            "to": ["20211454@aloe.ulima.edu.pe"], #si lo prueban pongan su correo aca xd
            "subject": "hello world",
            "html": htmlS,
            
        }

        email = resend.Emails.send(params)
        print(email)
        return HttpResponse("Exito")
    
# este usa postmark
#
# Request tipo POST
# {
#     "codigo": 12345678
# }
@csrf_exempt
def enviarCorreoPostmark(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            if not data or data == None or data == "": raise Exception("No se ha enviado codigo de usuario.")

            import requests
            url = "https://api.postmarkapp.com/email/withTemplate"
            headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Postmark-Server-Token": "" # completar token jeje
            }
            data = {
                "From": "20210109@aloe.ulima.edu.pe", # no se puede cambiar, solo lo envia desde mi correo
                "To": f"{data['codigo']}@aloe.ulima.edu.pe", # se puede cambiar a destinatarios ulima
                "TemplateId": 35034773, # depende del api key creo
                "TemplateModel": {
                    "name": data["codigo"]
                }
            }

            r = requests.post(url, headers=headers, json=data)
            return response({"msg": "", "data": r.json()}, code=200)

        except Exception as err:
            return response({"msg": str(err)}, code=400)
        

# PUT Requests para el cambio de credenciales
@csrf_exempt
def cambiarNombre(request):
    if request.method == "PUT":
        try:
            from operator import itemgetter
            nombres, apellidos, codigo = itemgetter('nombres', 'apellidos', 'codigo')(json.loads(request.body))

            usuario = Usuario.objects.get(codigo=codigo)
            usuario.nombres = nombres
            usuario.apellidos = apellidos
            usuario.save()

            return response({"msg": ""})
        except Exception as err:
            return response({"msg": str(err)}, code=500)
        
@csrf_exempt
def cambiarContrasenha(request):
    if request.method == "PUT":
        try:
            from operator import itemgetter
            nuevacontrasenha, codigo = itemgetter('contrasenha', 'codigo')(json.loads(request.body))

            usuario = Usuario.objects.get(codigo=codigo)
            usuario.contrasenha = nuevacontrasenha
            usuario.save()

            return response({"msg": ""})
        except Exception as err:
            return response({"msg": str(err)}, code=500)
