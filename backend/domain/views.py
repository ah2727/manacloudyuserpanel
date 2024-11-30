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

            domain = data['domain']
            # Split the domain to get the base (without extension)
            domain_parts = domain.split('.')
            domain_base = '.'.join(domain_parts[:-1])  # Domain without extension

            # Define a list of common domain extensions
            domain_extensions = ['com', 'net', 'org', 'io', 'co']  # Add more extensions as needed

            results = []  # Store the results for each domain extension

            # Loop through domain extensions and check each one
            for ext in domain_extensions:
                full_domain = f"{domain_base}.{ext}"
                payload = {
                    'username': settings.WHMCS_USERNAME,
                    'password': settings.WHMCS_PASSWORD,
                    'action': "DomainWhois",
                    'responsetype': "JSON",
                    'domain': full_domain,
                }

                # Define the target API URL
                api_url = settings.API_WHMCS_URL  # The API URL should be stored in Django settings

                # Send POST request to the external API
                response = requests.post(api_url, data=payload)

                if response.status_code == 200:
                    api_data = response.json()
                    availability = api_data.get('status', 'unknown')  # Check the API's response for availability info
                    results.append({
                        'domain': full_domain,
                        'availability': availability,
                    })
                else:
                    # If the API returns an error, handle it
                    results.append({
                        'domain': full_domain,
                        'error': response.text,
                    })

            # Return the list of results for all domain extensions
            return JsonResponse({'success': True, 'domains': results}, status=200)

        except requests.exceptions.RequestException as e:
            # Handle errors related to the external request (e.g., timeouts, connection errors)
            return JsonResponse({'error': f'External API request failed: {str(e)}'}, status=500)

        except Exception as e:
            # Catch any other exceptions and log/return them
            return JsonResponse({'error': str(e)}, status=500)