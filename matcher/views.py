from django.shortcuts import render # type: ignore
from django.views import View # type: ignore
from rest_framework.decorators import APIView  # type: ignore
from rest_framework.response import Response  # type: ignore
from django.views.decorators.csrf import csrf_exempt # type: ignore
from django.utils.decorators import method_decorator # type: ignore

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
        # Store in session
        request.session['preferences'] = {
            "city": request.POST.get("city", ""),
            "area": request.POST.get("area", ""),
            "parks": request.POST.get("parks", ""),
            "schools": request.POST.get("schools", ""),
            "safety": request.POST.get("safety", ""),
            "transit": request.POST.get("transit", ""),
            "nightlife": request.POST.get("nightlife", ""),
            "income": request.POST.get("income", "")
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
        city_name = data.get("city")
        area_name = data.get("area")
        prefs = data

        if not city_name or not area_name:
            return Response({"error": "Both 'city' and 'area' are required."}, status=400)

        neighborhoods = Neighborhood.objects.filter(
            area__city__name__iexact=city_name
        ).exclude(area__name__iexact=area_name)

        if not neighborhoods.exists():
            return Response({"error": "No neighborhoods found in this city."}, status=404)

        results = []
        for n in neighborhoods:
            score = (
                int(prefs.get("parks", 0)) * n.parks +
                int(prefs.get("schools", 0)) * n.schools +
                int(prefs.get("safety", 0)) * n.safety_score +
                int(prefs.get("transit", 0)) * n.transit_score +
                int(prefs.get("nightlife", 0)) * n.nightlife_score +
                int(prefs.get("income", 0)) * n.income
            )
            results.append((score, n))

        top_matches = sorted(results, key=lambda x: x[0], reverse=True)[:5]
        data = NeighborhoodSerializer([r[1] for r in top_matches], many=True).data
        return Response({"recommendations": data})
    

