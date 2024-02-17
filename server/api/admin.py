from django.contrib import admin
# from import_export import resources
# from import_export.admin import ImportExportModelAdmin
from .models import *

# Admin
# class WindowResource(resources.ModelResource):
#     class Meta:
#         model = Window
# class WindowAdmin(ImportExportModelAdmin):
#     resource_class = WindowResource
#     list_display = ["date", "hour"]

class WindowAdmin(admin.ModelAdmin):
    list_display = ["date", "hour"]

class SalaAdmin(admin.ModelAdmin):
    list_display = ["name", "address", "city"]

class MovieAdmin(admin.ModelAdmin):
    list_display = ["title", "year", "id"]

class SFormatAdmin(admin.ModelAdmin):
    list_display = ["sala", "format"]

# Registro de modelos

admin.site.register(Usuario)

admin.site.register(Sala, SalaAdmin)
admin.site.register(Format)
admin.site.register(Sala_Format, SFormatAdmin)

admin.site.register(Window, WindowAdmin)

admin.site.register(Movie, MovieAdmin)
admin.site.register(Cast)
admin.site.register(Genre)
admin.site.register(Movie_Cast)
admin.site.register(Movie_Genre)

admin.site.register(Funcion)
admin.site.register(Reserva)