from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username=models.CharField(unique=True,max_length=255)
    email = models.EmailField(unique=True)  # Make email unique
    phonenumber = models.BigIntegerField(
        unique=True, 
        null=True, 
        blank=True  # Allow phonenumber to be optional
    )
    def __str__(self):
        return self.username
