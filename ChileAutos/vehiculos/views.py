from django.shortcuts import render,redirect
from .forms import FormVehiculo
from .models import Vehiculo
from django.contrib import messages
# Create your views here.

def crearVehiculo(request):
    formulario = FormVehiculo()
    if request.method == 'POST':
        formulario = FormVehiculo(request.POST,request.FILES)
        if formulario.is_valid():
            vehiculoNuevo = formulario.save(commit=False)
            vehiculoNuevo.usuario = request.user
            vehiculoNuevo.save()
            messages.add_message(
                request,
                messages.success,
                'Vehiculo Creado'
            )
            return redirect('/inicio/')
    context = {
        'formulario':formulario
    }
    return render(
        request,
        'vehiculos/agregar_vehiculo.html',
        context
    )


def listarVehiculos(request):
    vehiculos = Vehiculo.objects.all()
    context = {
        'titulo':'Listar vehiculos',
        'vehiculo':vehiculos
    }
    return render(
        request,
        'vehiculos/listar_vehiculo.html',
        context
    )
