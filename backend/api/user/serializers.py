from rest_framework import serializers
from .models import Exercise


class ExerciseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'programmes', 'exercise_name')
