from django.db import models
from django.contrib.auth.models import User

# Create your models here.
#Creacion de modelos asociados a lso vehiculos

'''
class Marca(models.Model):
    nombreMarca = models.CharField(max_length=45,blank=False)

class TipoVehiculo(models.Model):
    detalleTipoVehiculo = models.CharField(max_length=45,blank=False)

class Combustible(models.Model):
    detalleCombustible = models.CharField(max_length=45, blank=False)

class TipoTransmision(models.Model):
    detalleTrasmision = models.CharField(max_length=45, blank=False)

class EstadoUso(models.Model):
    detalleUso = models.CharField(max_length=45,blank=False)

class Vehiculo(models.Model):
    #Heredados
    foto = models.FileField()
    marca = models.ForeignKey(Marca, on_delete=models.CASCADE)
    tipoVehiculo= models.ForeignKey(TipoVehiculo, on_delete=models.CASCADE)
    combustible = models.ForeignKey(Combustible, on_delete=models.CASCADE)
    transmision = models.ForeignKey(TipoTransmision, on_delete=models.CASCADE)
    uso=models.ForeignKey(EstadoUso,on_delete=models.CASCADE)

    #Propios
    modelo =  models.CharField(max_length=45, blank=False)
    precio = models.IntegerField()

    #Padre
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)

'''

class Vehiculo(models.Model):
    marca = models.CharField(max_length=45, blank=False)
    modelo =  models.CharField(max_length=45, blank=False)
    tipoVehiculo= models.CharField(max_length=45, blank=False)
    combustible = models.CharField(max_length=45, blank=False)
    transmision = models.CharField(max_length=45, blank=False)
    precio = models.PositiveIntegerField()
    uso=models.CharField(max_length=45, blank=False) 
    foto = models.ImageField(upload_to='imagens')

    #Padre
    #usuario = models.OneToOneField(User, on_delete=models.CASCADE)


