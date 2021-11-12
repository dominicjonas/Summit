from django.shortcuts import render
from .models import Exercise
from .serializers import ExerciseSerializer
# import requests

from rest_framework import views, response, status

# Create your views here.


def index(request):
    list = Exercise.objects.all()
    context = {'user': list}
    return render(request, 'index.html', context)


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

# post_data = {'exercise_name': 'Crunches'}
# response_ = requests.post(
#     'http://localhost:8000/user/exercise/', data=post_data)
# content = response.content
