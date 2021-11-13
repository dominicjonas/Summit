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

# Create your views here.


def index(request):
    list = Exercise.objects.all()
    context = {'user': list}
    return render(request, 'index.html', context)


def dashboard(request):
    return render(request, "users/dashboard.html")


def dashboard(request):
    return render(request, "users/dashboard.html")


def register(request):
    if request.method == "GET":
        return render(
            request, "users/register.html",
            {"form": CustomUserCreationForm}
        )

    elif request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("dashboard"))


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
