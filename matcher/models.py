from django.db import models # type: ignore

class City(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Area(models.Model):
    name = models.CharField(max_length=100)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='areas')

    def __str__(self):
        return f"{self.name}, {self.city.name}"

class Neighborhood(models.Model):
    name = models.CharField(max_length=100)
    area = models.ForeignKey(Area, on_delete=models.CASCADE, related_name='neighborhoods', default=1)
    description = models.TextField(blank=True)

    # Scoring criteria
    parks = models.IntegerField()
    schools = models.IntegerField()
    safety_score = models.IntegerField()
    transit_score = models.IntegerField()
    nightlife_score = models.IntegerField()
    income = models.IntegerField()

    def __str__(self):
        return f"{self.name} ({self.area.name}, {self.area.city.name})"

