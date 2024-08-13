from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Music

class MusicAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'user')
    search_fields = ('title', 'user__email')

admin.site.register(Music, MusicAdmin)
