from django.conf.urls import url
from . import views

urlpatterns = [
    url('calculate', views.calculate)
]