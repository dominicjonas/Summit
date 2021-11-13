from django.shortcuts import render
from .models import Exercise, User
from .serializers import ExerciseSerializer, UserSerializer
from rest_framework import response, request
from django.shortcuts import render
# import requests

from rest_framework import views, response, status

# Create your views here.


def index(request):
    list = Exercise.objects.all()
    context = {'user': list}
    return render(request, 'index.html', context)


def login(request):
    return render(request, "users/login.html")


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

    # def createUser(request):
    #     userName = request.REQUEST.get('username', None)
    #     userPass = request.REQUEST.get('password', None)
    #     userMail = request.REQUEST.get('email', None)

    #     # TODO: check if already existed
    #     if userName and userPass and userMail:
    #         user_created = User.objects.get_or_create(userName, userMail)
    #     if user_created:
    #         # user was created
    #         # set the password here
    #     else:
    #         # user was retrieved
    #     else:
    #         # request was empty

    #     return render(request, 'home.html')
