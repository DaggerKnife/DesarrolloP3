from django.shortcuts import render, redirect
from .forms import FormPublicaciones
from django.contrib import messages
from .models import Publicacion
# Create your views here.


def agregarPublicacion(request):
    formulario = FormPublicaciones()
    if request.method == 'POST':
        formulario = FormPublicaciones(request.POST, request.FILES)
        if formulario.is_valid():
            publicacionNueva = formulario.save(commit=False)
            publicacionNueva.usuario = request.user
            publicacionNueva.save()
            messages.add_message(
                request,
                messages.SUCCESS,
                'Publicación creada!!!'
            )
            return redirect('/perfil/')
    context = {
        'formulario': formulario
    }
    return render(
        request,
        'publicacion/agregar.html',
        context
    )


def editarPublicacion(request, id_publicacion):
    publicacionEncontrada = Publicacion.objects.get(pk=id_publicacion)
    formulario = None

    if request.method == 'POST':
        formulario = FormPublicaciones(request.POST,  request.FILES, instance=publicacionEncontrada)
        if formulario.is_valid():
            formulario.save()
            return redirect('/perfil/')
    else:
        formulario = FormPublicaciones(instance=publicacionEncontrada)
    context = {
        'titulo': 'Modificar Publicacion',
        'formulario': formulario
    }

    return render(
        request,
        'publicacion/modificar_publicacion.html',
        context
    )

def eliminarPublicacion(request, id_publicacion):
    publicacionEncontrada = Publicacion.objects.get(pk=id_publicacion)
    publicacionEncontrada.delete()

    return redirect('/inicio')