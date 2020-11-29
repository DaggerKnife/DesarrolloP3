from django.urls import path
from .views import mostarFormularioRegistro,registroUsuario, iniciarSesion,salir,perfil
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('registro/',mostarFormularioRegistro, name="registro"),
    path('crearUsuario/',registroUsuario, name="crear"),
    path('inicio/',iniciarSesion, name='iniciar'),
    path('salir/',salir, name='salir'),
    path('perfil/',perfil,name='misPublicaciones'),
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="contrasena/recuperar.html"), name="reset_password"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(), name="password_reset_complete")
]