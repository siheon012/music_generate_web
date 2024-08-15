from django.utils.timezone import activate
from django.utils.deprecation import MiddlewareMixin
from django.conf import settings

#사용자의 시간대에 맞춰 시간 설정해주기
class TimezoneMiddleware(MiddlewareMixin):
    def process_request(self, request):
        timezone = request.session.get('timezone', settings.TIME_ZONE)
        activate(timezone)

class LogRequestMiddleware(MiddlewareMixin):
    #요청 들어올 때
    def process_request(self, request):
        print(f"Request Method: {request.method}, Request Path: {request.path}")

    #요청 완료될 때
    def process_response(self, request, response):
        print(f"Response Status Code: {response.status_code}")
        return response
