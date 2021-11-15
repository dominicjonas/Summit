from rest_framework import serializers
from .models import Exercise, ExerciseGroup, User
from django.contrib.auth import get_user_model, password_validation
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
User = get_user_model()


# class UserSerializer(serializers.ModelSerializer): - might need to use this?
class UserSerializer(serializers.ModelSerializer):
    # class UserSerializer(serializers.HyperlinkedModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        # remove the password and password confirmation from the request body
        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        # check if the passwords match
        if password != password_confirmation:
            raise ValidationError(
                {'password_confirmation': 'Passwords do not match'})

        # check if the password is valid
        try:
            password_validation.validate_password(password=password)
        except ValidationError as err:
            raise ValidationError({'password': err.messages})

        # hash the password, and add back to the dictionary
        data['password'] = make_password(password)

        return data

    exercise_groups = serializers.ReadOnlyField(
        source="get_groups")
    # exercise_grouping = ExerciseGroupSerializer(
    #     source='get_exercise_group', read_only=True)

    class Meta:
        model = User

        fields = ('id', 'username', 'email',
                  'password', 'password_confirmation', 'exercise_groups')  # exercise_grouping
        #   'password', 'password_confirmation', 'exercise_group')  # exercise_grouping

        depth = 2
        # fields = ('id', 'username', 'password', 'programmes')


class ExerciseGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ExerciseGroup
    # fields = ('exercise_group')
        fields = ('id', 'name', 'user')
    # fields = ('id', 'exercise_group', 'username', 'exercise_name')

    depth = 2


class ExerciseSerializer(serializers.HyperlinkedModelSerializer):
    # exercise_group = ExerciseGroupSerializer(
    #     source='get_exercise_group', read_only=True)

    class Meta:
        model = Exercise
        fields = ('id', 'exercise_name', 'exercise_weight',
                  'user', 'exercise_group', 'date_completed')

        depth = 2
