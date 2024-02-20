from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin
from .models import *

# Admin usando import_export
# class WindowResource(resources.ModelResource):
#     class Meta:
#         model = Window

# class WindowAdmin(ImportExportModelAdmin):
#     resource_class = WindowResource
#     list_display = ["date", "hour"]

# class MovieResource(resources.ModelResource):
#     class Meta:
#         model = Movie

# class MovieAdmin(ImportExportModelAdmin):
#     resource_class = MovieResource
#     list_display = ["title", "year", "id"]

# class MovieCResource(resources.ModelResource):
#     class Meta:
#         model = Movie_Cast

# class MovieCAdmin(ImportExportModelAdmin):
#     resource_class = MovieCResource
#     list_display = ["movie", "cast"]

# class MovieGResource(resources.ModelResource):
#     class Meta:
#         model = Movie_Genre

# class MovieGAdmin(ImportExportModelAdmin):
#     resource_class = MovieGResource
#     list_display = ["movie", "genre"]

# class CastResource(resources.ModelResource):
#     class Meta:
#         model = Cast

# class CastAdmin(ImportExportModelAdmin):
#     resource_class = CastResource
#     list_display = ["id", "name"]

# class GenreResource(resources.ModelResource):
#     class Meta:
#         model = Genre

# class GenreAdmin(ImportExportModelAdmin):
#     resource_class = GenreResource
#     list_display = ["id", "name"]

# class FuncionResource(resources.ModelResource):
#     class Meta:
#         model = Funcion

# class FuncionAdmin(ImportExportModelAdmin):
#     resource_class = FuncionResource
#     list_display = ["id", "sala", "movie", "window"]

# class SalaResource(resources.ModelResource):
#     class Meta:
#         model = Sala

# class SalaAdmin(ImportExportModelAdmin):
#     resource_class = SalaResource
#     list_display = ["name", "address", "city"]


# Admin regular
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ["id", "codigo", "nombres", "apellidos"]

class SalaAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "address", "city"]

class GenreAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]

class CastAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]
    
class WindowAdmin(admin.ModelAdmin):
    list_display = ["id","date", "hour"]

class MovieAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "year", "id"]

class SFormatAdmin(admin.ModelAdmin):
    list_display = ["id", "sala", "format"]

class MovieCAdmin(admin.ModelAdmin):
    list_display = ["id", "movie", "cast"]

class MovieGAdmin(admin.ModelAdmin):
    list_display = ["id", "movie", "genre"]

class FormatAdmin(admin.ModelAdmin):
    list_display = ["id", "format"]
    
class FuncionAdmin(admin.ModelAdmin):
    list_display = ["id", "sala", "movie", "window"]

class ReservaAdmin(admin.ModelAdmin):
    list_display = ["id", "usuario", "funcion"]

# Registro de modelos

admin.site.register(Sala, SalaAdmin)
admin.site.register(Format, FormatAdmin)
admin.site.register(Window, WindowAdmin)
admin.site.register(Movie, MovieAdmin)
admin.site.register(Cast, CastAdmin)
admin.site.register(Genre, GenreAdmin)

admin.site.register(Sala_Format, SFormatAdmin)
admin.site.register(Movie_Cast, MovieCAdmin)
admin.site.register(Movie_Genre, MovieGAdmin)

admin.site.register(Funcion, FuncionAdmin)
admin.site.register(Reserva, ReservaAdmin)

admin.site.register(Usuario, UsuarioAdmin)