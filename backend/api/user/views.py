from django.shortcuts import render
from .models import Exercise
from .serializers import ExerciseSerializer

from rest_framework import views, response, status

# Create your views here.


def index(request):
    list = Exercise.objects.all()
    context = {'user': list}
    return render(request, 'index.html', context)


class ExerciseListView (views.APIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

    def get(self, request):
        user = Exercise.objects.all()
        serialized_user = ExerciseSerializer(
            user, many=True, context={'request', request}
        )
        return response.Response(serialized_user.data, status=status.HTTP_200_OK)
