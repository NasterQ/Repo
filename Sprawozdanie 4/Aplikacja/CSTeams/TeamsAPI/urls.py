from django.urls import path
from .views import team_list, team_detail


urlpatterns = [
    path('teams/', team_list),
    path('team/<int:pk>/', team_detail),
]
