from django.db import models
from django import forms
from django.contrib.auth.models import AbstractUser
# Create your models here.


# class User(models.Model):
class User(AbstractUser):
    # username = models.CharField(max_length=50)
    username = models.CharField(max_length=200, unique=True)
    email = models.EmailField(verbose_name='email',
                              max_length=50)
    # need help with making a better password field
    password = models.CharField(max_length=200, default='password')
    # password = forms.CharField(widget=forms.PasswordInput)

    def __str__(self):
        return f"{self.username}, {self.id}"


# class Group(models.Model):

class Exercise(models.Model):

    exercise_name = models.CharField(max_length=50, blank=True)
    exercise_weight = models.IntegerField(default=0)
