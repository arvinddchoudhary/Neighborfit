# NeighborFit 🏙️

NeighborFit is a full-stack Django web application that recommends the best neighborhoods based on user preferences for factors like safety, schools, parks, nightlife, transit, and income levels.

---

## 🚀 Features

- 🌆 Personalized neighborhood recommendations
- 📊 Preference-based scoring
- 🗂️ City & area filtering
- 💾 Save your favorite neighborhoods
- 📱 Responsive multi-page frontend (Home, Preferences, Results, About, Contact)

---

## 🛠️ Built With

- **Backend:** [Django](https://www.djangoproject.com/)
- **API:** Django REST Framework
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (can be changed)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/neighborfit.git
cd neighborfit

2.Create Virtual Environment

python -m venv env
source env/bin/activate      # On Windows: env\Scripts\activate

3.Install Dependencies

pip install -r requirements.txt
If requirements.txt doesn't exist yet, run:
pip install django djangorestframework

4.Run Migrations
python manage.py migrate

5.Load Sample Data
Place your neighborhoods.csv file in the project root (or matcher/ folder) and use a custom management command or Django admin to import it.
Example snippet (you can use in shell or script):

# Load data from neighborhoods.csv into Neighborhood model
import csv
from matcher.models import Neighborhood, Area, City

with open('neighborhoods.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        city, _ = City.objects.get_or_create(name=row['city'])
        area, _ = Area.objects.get_or_create(name=row['area'], city=city)
        Neighborhood.objects.create(
            name=row['name'],
            description=row['description'],
            highlights=row['highlights'],
            parks=int(row['parks']),
            schools=int(row['schools']),
            safety_score=int(row['safety_score']),
            transit_score=int(row['transit_score']),
            nightlife_score=int(row['nightlife_score']),
            income=int(row['income']),
            area=area
        )

6.Run Server
python manage.py runserver
Visit http://localhost:8000 in your browser.

📂 Project Structure

neighborfit/
├── matcher/             # Django app with views, models, APIs
├── templates/           # HTML files (results, preferences, about, contact)
├── static/              # CSS, JS, images
├── neighborhoods.csv    # Sample neighborhood dataset
├── manage.py
└── README.md

📄 License
This project is open-source under the MIT License.


---

Let me know if you also want:
- A `requirements.txt` file
- GitHub repo setup help
- Auto-import command for the CSV via a custom Django management command


