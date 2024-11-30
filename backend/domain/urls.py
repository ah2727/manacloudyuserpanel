from django.urls import path,include
from .views import *
urlpatterns = [
    path("domainavilabity/",PostToApiView.as_view())
]