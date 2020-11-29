from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Publicacion(models.Model):
    marca = models.CharField(max_length=45,blank=False)
    modelo = models.CharField(max_length=45,blank=False)
    tipoVehiculo= models.CharField(max_length=45, blank=False)
    combustible = models.CharField(max_length=45, blank=False)
    transmision = models.CharField(max_length=45, blank=False)
    precio = models.PositiveIntegerField()
    uso=models.CharField(max_length=45, blank=False) 
    imagen = models.ImageField(upload_to='imagens')
    fechaSubida = models.DateField(auto_now=True)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    
