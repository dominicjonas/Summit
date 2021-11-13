from django.db import models
from django import forms

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(verbose_name='email',
                              max_length=50, unique=True)
    # need help with making a better password field
    password = models.CharField(max_length=50, default='password')
    # password = forms.CharField(widget=forms.PasswordInput)


# class Group(models.Model):

class Exercise(models.Model):

    exercise_name = models.CharField(max_length=50, blank=True)
    exercise_weight = models.IntegerField(default=0)
