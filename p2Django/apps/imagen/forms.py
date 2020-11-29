from django import forms
from .models import Publicacion


class FormPublicaciones(forms.ModelForm):
    class Meta:
        model = Publicacion
        fields = (
            'marca',
            'modelo',
            'tipoVehiculo',
            'combustible',
            'transmision',
            'precio',
            'uso',
            'imagen'
        )
