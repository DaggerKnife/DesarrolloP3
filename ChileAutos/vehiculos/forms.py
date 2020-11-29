from django import forms
from .models import Vehiculo


class FormVehiculo(forms.ModelForm):
    class Meta:
        model = Vehiculo
        fields = (
            
            'marca',
            'modelo',
            'tipoVehiculo',
            'combustible',
            'transmision',
            'precio',
            'uso',
            'foto'
            
            
        )


