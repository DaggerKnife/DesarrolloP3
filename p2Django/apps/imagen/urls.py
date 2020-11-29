from django.urls import path
from .views import agregarPublicacion,editarPublicacion,eliminarPublicacion
urlpatterns = [
    path('agregar/',agregarPublicacion,name='agregarPublicacion'),
    path('editar/<int:id_publicacion>',editarPublicacion, name='editar_publicacion'),
    path('eliminar/<int:id_publicacion>',eliminarPublicacion, name='eliminar_publicacion')
]