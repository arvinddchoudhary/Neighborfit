from django.urls import path  # type: ignore
from .views import (
    HomeView,
    PreferencesView,
    AboutView,
    ContactView,
    RecommendNeighborhood,
    ResultsView,
)

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('preferences/', PreferencesView.as_view(), name='preferences'),
    path('about/', AboutView.as_view(), name='about'),
    path('contact/', ContactView.as_view(), name='contact'),
    path('recommend/', RecommendNeighborhood.as_view(), name='recommend'),
    path('preferences/results/', ResultsView.as_view(), name='results'),
]
