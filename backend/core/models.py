from django.db import models
from django.utils import timezone
from django.conf import settings

# 공통 모델
class CommonFileUpload(models.Model):
    file = models.FileField(upload_to='uploads/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"File uploaded at {self.uploaded_at}"

class LogEntry(models.Model):
    action = models.CharField(max_length=100)
    timestamp = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name='core_log_entries')
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.action} by {self.user} at {self.timestamp}"

# 유틸리티 함수
def convert_to_user_timezone(dt, user_timezone):
    return dt.astimezone(user_timezone)

def save_file(file, path):
    with open(path, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)
