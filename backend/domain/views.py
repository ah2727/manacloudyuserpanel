import requests
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.conf import settings

# Create your views here.



@method_decorator(csrf_exempt, name='dispatch')  # Exempt CSRF for API posting
class PostToApiView(View):
    def post(self, request, *args, **kwargs):
        try:
            # Extract data from the request body
            data = request.POST

            # Validate input data
            required_fields = ['domain']
            for field in required_fields:
                if field not in data:
                    return JsonResponse({'error': f'Missing field: {field}'}, status=400)
            print(settings.WHMCS_PASSWORD)
            # Prepare the payload for the API
            payload = {
                'username': settings.WHMCS_USERNAME,
                'password': settings.WHMCS_PASSWORD,
                'action': "DomainWhois",
                'responsetype': "JSON",
                'domain': data['domain'],
            }

            # Define the target API URL
            api_url = settings.API_WHMCS_URL  # Replace with your API endpoint

            # Send POST request to the external API
            response = requests.post(api_url, data=payload)

            # Check the response status
            if response.status_code == 200:
                return JsonResponse({'success': True, 'response': response.json()}, status=200)
            else:
                return JsonResponse(
                    {'success': False, 'error': response.text},
                    status=response.status_code,
                )

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)