import csv
from django.core.management.base import BaseCommand # type: ignore
from matcher.models import City, Area, Neighborhood

class Command(BaseCommand):
    help = "Import neighborhoods from CSV"

    def handle(self, *args, **kwargs):
        with open('neighborhoods.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                city, _ = City.objects.get_or_create(name=row["city"])
                area, _ = Area.objects.get_or_create(name=row["area"], city=city)
                Neighborhood.objects.get_or_create(
                    name=row["neighborhood"],
                    area=area,
                    defaults={
                        "parks": row["parks"],
                        "schools": row["schools"],
                        "safety_score": row["safety"],
                        "transit_score": row["transit"],
                        "nightlife_score": row["nightlife"],
                        "income": row["income"],
                        "description": f"Auto-generated data for {row['neighborhood']}"
                    }
                )
        self.stdout.write(self.style.SUCCESS("✅ Neighborhoods imported successfully"))
