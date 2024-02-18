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

