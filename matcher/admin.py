from django.contrib import admin # type: ignore
from .models import Area, City, Neighborhood

admin.site.register(Neighborhood)
admin.site.register(City)
admin.site.register(Area)
