"""summit URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.conf.urls import url, include
from django.urls import path
from .views import index, ExerciseListView, UserListView, dashboard, RegisterPage, LoginPage
# from .views import index, ExerciseListView, UserListView, dashboard, register

urlpatterns = [
    path("", index),
    path("user/", UserListView.as_view()),
    path("dashboard/", dashboard, name="dashboard"),
    path('register/', RegisterPage.as_view()),
    path('login/', LoginPage.as_view()),
    # this gives access to login, logout, pswd change/reset, rest done - very useful for easy user management
    # url(r"^accounts/", include("django.contrib.auth.urls")),
    # url(r"^register/", register, name="register"),
    path("exercise-list/", ExerciseListView.as_view()),
]
