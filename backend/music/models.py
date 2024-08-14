from django.db import models
from django.conf import settings

class Music(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='music_list')
    title = models.CharField(max_length=255)
    file = models.FileField(upload_to='music_files/')
    created_at = models.DateTimeField(auto_now_add=True)
    duration = models.DurationField(null=True, blank=True)  # 음악의 길이
    genre = models.CharField(max_length=100, null=True, blank=True)  # 음악의 장르
    description = models.TextField(null=True, blank=True)  # 음악에 대한 설명

    def __str__(self):
        return f"{self.title} by {self.user.username}"
