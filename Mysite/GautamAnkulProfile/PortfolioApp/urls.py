from django.urls import path
from . import views

urlpatterns = [
    path('', views.contactme, name="index"),
]
