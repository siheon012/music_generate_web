from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MusicViewSet, CustomAuthToken, register

router = DefaultRouter()
router.register(r'music', MusicViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', CustomAuthToken.as_view(), name='api_token_auth'),
    path('register/', register, name='register'),
]



