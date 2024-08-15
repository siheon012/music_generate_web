import json  
from rest_framework import viewsets, status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.settings import api_settings
from music.models import Music
from .serializers import MusicSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model, authenticate
from rest_framework.views import APIView
from rest_framework.decorators import api_view

User = get_user_model()

class MusicViewSet(viewsets.ModelViewSet):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    permission_classes = [IsAuthenticated]

class CustomAuthToken(ObtainAuthToken):
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email
            })
        else:
            return Response({'error': 'Unable to log in with provided credentials.'}, status=400)

class RegisterView(APIView):
    def post(self, request):
        try:
            data = request.data
            username = data.get('username')
            email = data.get('email')
            phone_number = data.get('phone_number')
            password = data.get('password')

            if not username or not email or not phone_number or not password:
                return Response({'error': 'All fields are required'}, status=400)

            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'}, status=400)

            user = User.objects.create(
                username=username,
                email=email,
                phone_number=phone_number,
                password=make_password(password)
            )
            user.save()
            return Response({'message': 'User registered successfully'}, status=201)

        except json.JSONDecodeError:
            return Response({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            print(f"Exception: {str(e)}")
            return Response({'error': str(e)}, status=500)

# APIView로 정의된 경우 URLconf에서 path를 등록하여 직접 호출합니다.
