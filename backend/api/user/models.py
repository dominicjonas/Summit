from django.db import models

# Create your models here.


class Exercise(models.Model):

    exercise_name = models.CharField(max_length=50, blank=True)
    exercise_weight = models.IntegerField(default=0)
