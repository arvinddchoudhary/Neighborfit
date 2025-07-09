from rest_framework import serializers # type: ignore
from .models import Neighborhood, City, Area

class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class AreaSerializer(serializers.ModelSerializer):
    city = CitySerializer()

    class Meta:
        model = Area
        fields = '__all__'

class NeighborhoodSerializer(serializers.ModelSerializer):
    area = AreaSerializer()

    class Meta:
        model = Neighborhood
        fields = '__all__'