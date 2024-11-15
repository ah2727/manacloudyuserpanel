from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)  # Make email unique
    phonenumber = models.BooleanField(default=False)  # Indicates if the user is a hosting service provider

    def __str__(self):
        return self.username
