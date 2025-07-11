from django.shortcuts import render
from django.views import View
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from .models import Neighborhood
from .serializers import NeighborhoodSerializer

# ------------------ Template Views ------------------ #

class HomeView(View):
    def get(self, request):
        return render(request, 'matcher/index.html')

class PreferencesView(View):
    def get(self, request):
        factors = ['parks', 'schools', 'safety', 'transit', 'nightlife', 'income']
        return render(request, 'matcher/preferences.html', {'factors': factors})

class AboutView(View):
    def get(self, request):
        return render(request, 'matcher/about.html')

class ContactView(View):
    def get(self, request):
        return render(request, 'matcher/contact.html')

class ResultsView(View):
    def post(self, request):
        print("Received POST:", request.POST)
        # Store preferences in session
        request.session['preferences'] = {
            "city": request.POST.get("city", ""),
            "area": request.POST.get("area", ""),
            "parks": request.POST.get("parks", "1"),
            "schools": request.POST.get("schools", "1"),
            "safety": request.POST.get("safety", "1"),
            "transit": request.POST.get("transit", "1"),
            "nightlife": request.POST.get("nightlife", "1"),
            "income": request.POST.get("income", "1")
        }
        return render(request, 'matcher/results.html', request.session['preferences'])

    def get(self, request):
        print("Falling back to GET")
        context = request.session.get('preferences', {
            "city": "",
            "area": "",
            "parks": 1,
            "schools": 1,
            "safety": 1,
            "transit": 1,
            "nightlife": 1,
            "income": 1
        })
        return render(request, 'matcher/results.html', context)

# ------------------ API View ------------------ #

@method_decorator(csrf_exempt, name='dispatch')
class RecommendNeighborhood(APIView):
    def post(self, request):
        data = request.data or request.POST

        # Normalize input
        city_name = data.get("city", "").strip().title()
        area_name = data.get("area", "").strip().title()
        prefs = data

        print("Incoming city:", city_name)
        print("Incoming area:", area_name)

        neighborhoods = Neighborhood.objects.all()

        if city_name:
            neighborhoods = neighborhoods.filter(area__city__name__iexact=city_name)

        if area_name:
            neighborhoods = neighborhoods.exclude(area__name__iexact=area_name)

        if not neighborhoods.exists():
            print("No neighborhoods matched filters. Using fallback.")
            neighborhoods = Neighborhood.objects.all()

        results = []
        for n in neighborhoods:
            try:
                score = (
                    int(prefs.get("parks", 0)) * n.parks +
                    int(prefs.get("schools", 0)) * n.schools +
                    int(prefs.get("safety", 0)) * n.safety_score +
                    int(prefs.get("transit", 0)) * n.transit_score +
                    int(prefs.get("nightlife", 0)) * n.nightlife_score +
                    int(prefs.get("income", 0)) * n.income
                )
                results.append((score, n))
            except Exception as e:
                print(f"Error scoring neighborhood {n.name}: {e}")

        if not results:
            return Response({"error": "No matches found."}, status=404)

        top_matches = sorted(results, key=lambda x: x[0], reverse=True)[:5]
        serialized = NeighborhoodSerializer([r[1] for r in top_matches], many=True).data
        return Response({"recommendations": serialized})
