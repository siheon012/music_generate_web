from django.db import models
from django.db import models
from accounts.models import User

# Create your models here.
class Music(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    file = models.FileField(upload_to='music/')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='music_list')

    def __str__(self):
        return self.title
