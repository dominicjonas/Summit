from django.db import models
from django import forms
from django.contrib.auth.models import AbstractUser
from itertools import groupby
# Create your models here.


# class User(models.Model):


# 1 user can have many groups
# 1 group can have many exercises
class User(AbstractUser):
    username = models.CharField(max_length=200, unique=True)
    email = models.EmailField(verbose_name='email',
                              max_length=50)
    # exercise_group = models.CharField(max_length=100, blank=True, null=True)

    def get_groups(self):
        exercise = Exercise.objects.filter(username=self)
        print(exercise)
        # exercise = Exercise.objects.filter(exercise_group__in=exercise_groups)
        # return exercise_group

        serialize_exercises = [
            {
                'exercise_name': x.exercise_name,
                'exercise_weight': x.exercise_weight,
                'exercise_group': x.exercise_group,
            } for x in exercise
        ]

        grouped_logs = groupby(serialize_exercises,
                               lambda x: x['exercise_group'])
        exercise_groupings = {k: list(v) for k, v in grouped_logs}

        return {'Exercises': exercise_groupings}


class ExerciseGroup(models.Model):
    name = models.CharField(
        max_length=50, default='exercise_group')
    # max_length=50, blank=True, null=True, default='exercise_group')
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='exercise_group', blank=True, null=True)  # blank=True, null=True)
    # exercise_name = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    # exercise_name = models.CharField(max_length=50, blank=True)
    # user = models.ForeignKey(
    #     User, on_delete=models.CASCADE, null=True, default=None, related_name='exercise_groups')

    def __str__(self):
        return self.exercise_group

# why is get_groups cycling over nothing? why is it not finding the exercises?
# try filtering on exercise groups to see if that works


class Exercise(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="user", blank=True, null=True)
    exercise_group = models.ForeignKey(
        ExerciseGroup, related_name='exercise', on_delete=models.CASCADE, blank=True, null=True)
    exercise_name = models.CharField(max_length=50, blank=True, null=True)
    date_completed = models.DateTimeField(auto_now=True)
    exercise_weight = models.DecimalField(
        max_digits=6, decimal_places=2, default=0)

# =========================================================================================================


# class User(models.Model):
#     name = models.CharField(max_length=200)
#     email = models.CharField(max_length=200)
#     exercise_group = models.CharField(max_length=100, blank=True, null=True)


# class ExerciseGroup(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     name = models.CharField(max_length=200)


# class Exercise(models.Model):
#     exercise_group = models.ForeignKey(ExerciseGroup, on_delete=models.CASCADE)
#     name = models.CharField(max_length=100)
#     weight = models.DecimalField(max_digits=6, decimal_places=2)
