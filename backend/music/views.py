from django.shortcuts import render

# Create your views here.
# music/views.py
from rest_framework import viewsets
from .models import Music
from .serializers import MusicSerializer

class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer