from django.urls import path
from .views import crearVehiculo,listarVehiculos

urlpatterns=[
    
    path('',listarVehiculos,name = 'listar_vehiculos'),
    path('agregar/', crearVehiculo,name='crearVehiculo'),
    #path('editar/<int:id_vehiculo>', editarVehiculo,name='crearVehiculo')
]