from django.contrib import admin
from .models import User, Music


admin.site.register(User)

class MusicAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'user')
    search_fields = ('title', 'user__email')

admin.site.register(Music, MusicAdmin)