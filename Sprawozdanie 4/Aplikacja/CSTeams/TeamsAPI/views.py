from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from .models import Team
from .serializers import TeamSerializer
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def team_list(request):
    if request.method == 'GET':
        teams = Team.objects.all()
        serializer = TeamSerializer(teams, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TeamSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)  # 201 = created status
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def team_detail(request, pk):
    try:
        team = Team.objects.get(pk=pk)

    except Team.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TeamSerializer(team)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TeamSerializer(team, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        team.delete()
        return HttpResponse(status=204)
