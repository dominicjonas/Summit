from django.shortcuts import redirect, render
from django.urls import reverse
from django.shortcuts import render
from .models import Exercise, User
from .serializers import ExerciseSerializer, UserSerializer
from rest_framework import response, request
from django.shortcuts import render
from django.contrib.auth import login
from user.templates.users.forms import CustomUserCreationForm
# import requests

from rest_framework import views, response, status


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from datetime import datetime, timedelta
from django.contrib.auth import get_user_model
from django.conf import settings
from .serializers import UserSerializer
import jwt

# Create your views here.

User = get_user_model()


class RegisterPage(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({'message': 'Registration Successful'}, status=status.HTTP_202_ACCEPTED)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginPage(APIView):

    def post(self, request):

        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user_to_login = User.objects.get(username=username)
        except User.DoesNotExist:
            raise PermissionDenied(detail='User does not exist')
        if not user_to_login.check_password(password):
            raise PermissionDenied(detail='password not working')

        dt = datetime.now() + timedelta(days=7)
        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        print(token)
        return Response({'token': token, 'message': f"Welcome back {user_to_login.username}"})


def index(request):
    list = Exercise.objects.all()
    context = {'user': list}
    return render(request, 'index.html', context)


def dashboard(request):
    return render(request, "users/dashboard.html")


def dashboard(request):
    return render(request, "users/dashboard.html")


# def register(request):
#     if request.method == "GET":
#         return render(
#             request, "users/register.html",
#             {"form": CustomUserCreationForm}
#         )

#     elif request.method == "POST":
#         form = CustomUserCreationForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             return redirect(reverse("dashboard"))


class ExerciseListView (views.APIView):
    # queryset = Exercise.objects.all()
    # serializer_class = ExerciseSerializer

    def get(self, request):
        exercise = Exercise.objects.all()
        serialized_exercise = ExerciseSerializer(
            exercise, many=True, context={'request', request}
        )
        return response.Response(serialized_exercise.data, status=status.HTTP_200_OK)

    def post(self, request):
        print(request.data)
        exercise_to_add = ExerciseSerializer(data=request.data)
        if exercise_to_add.is_valid():
            exercise_to_add.save()
            return response.Response(exercise_to_add.data, status=status.HTTP_201_CREATED)

        return response.Response(
            exercise_to_add.errors, status=status.HTTP_400_BAD_REQUEST
        )


class UserListView(views.APIView):
    def get(self, request):
        user = User.objects.all()
        serialized_user = UserSerializer(
            user, many=True, context={'request', request}
        )
        return response.Response(serialized_user.data, status=status.HTTP_200_OK)

    def post(self, request):
        print(request.data)
        user_to_add = UserSerializer(data=request.data)
        if user_to_add.is_valid():
            user_to_add.save()
            return response.Response(user_to_add.data, status=status.HTTP_201_CREATED)

        return response.Response(
            user_to_add.errors, status=status.HTTP_400_BAD_REQUEST
        )
