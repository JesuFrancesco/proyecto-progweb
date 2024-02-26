from django.db import models

# == Tablas sin FK
# Usuarios
class Usuario(models.Model):
    nombres = models.CharField(max_length=70)
    apellidos = models.CharField(max_length=70)
    contrasenha = models.CharField(max_length=70)
    codigo = models.IntegerField()
    
    def __str__(self) -> str:
        return f"{self.nombres}, {self.apellidos}"

class Format(models.Model):
    format = models.CharField(max_length=30)
    def __str__(self) -> str:
        return f"{self.format}"

class Window(models.Model):
    date = models.DateField()
    hour = models.TimeField()
    def __str__(self) -> str:
        return f"{self.date}, {self.hour}"

# Relativos a sala
class Sala(models.Model):
    name = models.CharField(max_length=50)
    phoneNumber = models.IntegerField()
    emailAddress = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    secondAddress = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    path = models.CharField(max_length=150)
    img = models.CharField(max_length=150)
    formats = models.ManyToManyField("Format", through="Sala_Format")
    def __str__(self) -> str:
        return self.name
    
# Relativos a pelicula
class Movie(models.Model):
    title = models.CharField(max_length=100) # el mayor tiene 68 caracteres
    year = models.IntegerField()
    href = models.CharField(max_length=60) # el mayor tiene 56 caracteres
    extract = models.CharField(max_length=1400) # el mayor tiene 1389 caracteres...............
    thumbnail = models.CharField(max_length=200) # el mayor tiene 164 caracteres
    thumbnail_width = models.IntegerField()
    thumbnail_height = models.IntegerField()
    path = models.CharField(max_length=120) # el mayor tiene 66 caracteres
    # cast = models.ManyToManyField("Format", through="Sala_Format")
    # genres = models.ManyToManyField("Format", through="Sala_Format")
    def __str__(self) -> str:
        return self.title
    
class Cast(models.Model):
    name = models.CharField(max_length=80)
    def __str__(self) -> str:
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=80)
    def __str__(self) -> str:
        return self.name

# == One to many
class Funcion(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    sala = models.ForeignKey(Sala, on_delete=models.CASCADE)
    window = models.ForeignKey(Window, on_delete=models.CASCADE)
    def __str__(self) -> str:
        return f"{self.movie}: {self.sala} @ {self.window}"

from datetime import datetime
class Reserva(models.Model):
    fecha = models.DateTimeField(default=datetime.now())
    entradas = models.IntegerField()
    funcion = models.ForeignKey(Funcion, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

# == Many to many
class Sala_Format(models.Model):
    sala = models.ForeignKey(Sala, on_delete=models.CASCADE)
    format = models.ForeignKey(Format, on_delete=models.CASCADE)

class Movie_Cast(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    cast = models.ForeignKey(Cast, on_delete=models.CASCADE)

class Movie_Genre(models.Model):
    
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    
class Code(models.Model):
    codigo=models.CharField(max_length=6)
    user = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    