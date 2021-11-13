from rest_framework import serializers
from .models import Exercise, User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    # programmes = serializers.ReadOnlyField(
    #     source="build_user_programme")
    class Meta:
        model = User

        fields = ('id', 'username', 'password')
        # fields = ('id', 'username', 'password', 'programmes')


class ExerciseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'exercise_name', 'exercise_weight')
