from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# 사용자를 가져옵니다
user = User.objects.get(username='uns')

# 토큰을 생성하거나 가져옵니다
token, created = Token.objects.get_or_create(user=user)
print(token.key)
