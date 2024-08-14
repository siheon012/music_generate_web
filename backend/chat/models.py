from django.db import models
from django.conf import settings

class Chat(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='chats')
    prompt = models.TextField()
    response = models.TextField(null=True, blank=True)  # AI 모델의 응답을 저장
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Chat {self.id} by {self.user.username}"
