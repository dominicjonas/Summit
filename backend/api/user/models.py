from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    email = models.EmailField(verbose_name='email',
                              max_length=50, unique=True)


# class Group(models.Model):

class Exercise(models.Model):

    exercise_name = models.CharField(max_length=50, blank=True)
    exercise_weight = models.IntegerField(default=0)
