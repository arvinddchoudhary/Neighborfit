// City and Area Data
const cityAreaData = {
    delhi: [
        'Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'South Extension',
        'Dwarka', 'Rohini', 'Pitampura', 'Janakpuri', 'Vasant Kunj',
        'Greater Kailash', 'Defence Colony', 'Nehru Place'
    ],
    mumbai: [
        'Bandra', 'Andheri', 'Juhu', 'Powai', 'Worli', 'Lower Parel',
        'Colaba', 'Byculla', 'Dadar', 'Goregaon', 'Malad', 'Borivali'
    ],
    bengaluru: [
        'Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City',
        'Marathahalli', 'BTM Layout', 'Jayanagar', 'Malleshwaram',
        'HSR Layout', 'Banashankari', 'Yelahanka', 'Hebbal'
    ],
    chennai: [
        'T. Nagar', 'Adyar', 'Velachery', 'OMR', 'Anna Nagar',
        'Mylapore', 'Besant Nagar', 'Porur', 'Tambaram', 'Chrompet',
        'Guindy', 'Nungambakkam'
    ],
    hyderabad: [
        'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City',
        'Kondapur', 'Madhapur', 'Begumpet', 'Secunderabad', 'Kukatpally',
        'Miyapur', 'Uppal', 'LB Nagar'
    ],
    jaipur: [
        'C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar',
        'Jagatpura', 'Tonk Road', 'Ajmer Road', 'Sodala', 'Bani Park',
        'Civil Lines', 'Shyam Nagar', 'Jhotwara'
    ]
};

// Mock neighborhood data for recommendations
const mockNeighborhoods = {
    delhi: [
        {
            name: 'Greater Kailash',
            description: 'Upscale residential area with excellent shopping and dining options.',
            highlights: ['🏞️ Parks', '🎓 Schools', '🛡️ Safety', '🏪 Shopping'],
            category: 'families'
        },
        {
            name: 'Connaught Place',
            description: 'Central business district with vibrant nightlife and entertainment.',
            highlights: ['🎭 Nightlife', '🚇 Transit', '🏢 Business', '🍽️ Dining'],
            category: 'nightlife'
        },
        {
            name: 'Vasant Kunj',
            description: 'Peaceful residential area with green spaces and family amenities.',
            highlights: ['🏞️ Parks', '🏫 Schools', '🏥 Healthcare', '🔇 Quiet'],
            category: 'quiet'
        },
        {
            name: 'Dwarka',
            description: 'Well-planned modern township with excellent connectivity.',
            highlights: ['🚇 Metro', '🏪 Malls', '🏫 Schools', '🏥 Hospitals'],
            category: 'families'
        },
        {
            name: 'Karol Bagh',
            description: 'Commercial hub with great shopping and food options.',
            highlights: ['🛍️ Shopping', '🍽️ Food', '🚇 Transit', '💰 Affordable'],
            category: 'nightlife'
        }
    ],
    mumbai: [
        {
            name: 'Bandra',
            description: 'Trendy suburb known for its cafes, restaurants, and nightlife.',
            highlights: ['🎭 Nightlife', '🍽️ Dining', '🎬 Entertainment', '🚇 Transit'],
            category: 'nightlife'
        },
        {
            name: 'Powai',
            description: 'IT hub with beautiful lake views and modern amenities.',
            highlights: ['🏢 IT Companies', '🏞️ Lake', '🏪 Malls', '🏫 Schools'],
            category: 'families'
        },
        {
            name: 'Juhu',
            description: 'Beachside locality popular among celebrities and families.',
            highlights: ['🏖️ Beach', '🎬 Bollywood', '🏫 Schools', '🍽️ Restaurants'],
            category: 'families'
        },
        {
            name: 'Lower Parel',
            description: 'Business district with high-end shopping and dining.',
            highlights: ['🏢 Business', '🛍️ Luxury Shopping', '🍽️ Fine Dining', '🎭 Culture'],
            category: 'nightlife'
        },
        {
            name: 'Goregaon',
            description: 'Residential area with good connectivity and peaceful environment.',
            highlights: ['🚇 Metro', '🏞️ Parks', '🏫 Schools', '🔇 Quiet'],
            category: 'quiet'
        }
    ],
    bengaluru: [
        {
            name: 'Koramangala',
            description: 'Popular among young professionals with great pub culture.',
            highlights: ['🎭 Pubs', '🍽️ Restaurants', '🏢 Startups', '🚇 Metro'],
            category: 'nightlife'
        },
        {
            name: 'Whitefield',
            description: 'Major IT hub with excellent infrastructure and amenities.',
            highlights: ['🏢 IT Parks', '🏪 Malls', '🏫 Schools', '🏥 Hospitals'],
            category: 'families'
        },
        {
            name: 'Indiranagar',
            description: 'Vibrant area known for its shopping and nightlife.',
            highlights: ['🛍️ Shopping', '🎭 Nightlife', '🍽️ Dining', '🎵 Music'],
            category: 'nightlife'
        },
        {
            name: 'Jayanagar',
            description: 'Traditional residential area with parks and cultural centers.',
            highlights: ['🏞️ Parks', '🎭 Culture', '🏫 Schools', '🔇 Peaceful'],
            category: 'quiet'
        },
        {
            name: 'HSR Layout',
            description: 'Well-planned layout popular among IT professionals.',
            highlights: ['🏢 IT Hub', '🏞️ Parks', '🏪 Shopping', '🍽️ Cafes'],
            category: 'families'
        }
    ],
    chennai: [
        {
            name: 'T. Nagar',
            description: 'Major commercial hub known for shopping and textiles.',
            highlights: ['🛍️ Shopping', '🏪 Markets', '🚇 Transit', '🍽️ Food'],
            category: 'nightlife'
        },
        {
            name: 'Adyar',
            description: 'Upscale residential area with cultural significance.',
            highlights: ['🏞️ Beach', '🎭 Culture', '🏫 Schools', '🏥 Healthcare'],
            category: 'families'
        },
        {
            name: 'OMR',
            description: 'IT corridor with modern infrastructure and amenities.',
            highlights: ['🏢 IT Companies', '🏪 Malls', '🏫 Schools', '🏥 Hospitals'],
            category: 'families'
        },
        {
            name: 'Mylapore',
            description: 'Cultural heart of Chennai with temples and heritage.',
            highlights: ['🏛️ Temples', '🎭 Culture', '🛍️ Traditional', '🔇 Heritage'],
            category: 'quiet'
        },
        {
            name: 'Besant Nagar',
            description: 'Coastal area popular among young professionals.',
            highlights: ['🏖️ Beach', '🍽️ Seafood', '🎵 Music', '🏃 Sports'],
            category: 'nightlife'
        }
    ],
    hyderabad: [
        {
            name: 'Banjara Hills',
            description: 'Posh locality with high-end restaurants and entertainment.',
            highlights: ['🍽️ Fine Dining', '🎭 Entertainment', '🏪 Shopping', '🛡️ Safety'],
            category: 'nightlife'
        },
        {
            name: 'Gachibowli',
            description: 'Major IT hub with modern amenities and infrastructure.',
            highlights: ['🏢 IT Companies', '🏪 Malls', '🏫 Schools', '🏥 Healthcare'],
            category: 'families'
        },
        {
            name: 'Hitech City',
            description: 'Technology hub with excellent connectivity and facilities.',
            highlights: ['🏢 Tech Parks', '🚇 Metro', '🏪 Malls', '🍽️ Restaurants'],
            category: 'families'
        },
        {
            name: 'Jubilee Hills',
            description: 'Upscale residential area with parks and cultural venues.',
            highlights: ['🏞️ Parks', '🎭 Culture', '🏫 Schools', '🛡️ Safety'],
            category: 'quiet'
        },
        {
            name: 'Kondapur',
            description: 'Growing residential area with good connectivity.',
            highlights: ['🏢 Offices', '🏪 Shopping', '🏫 Schools', '🚇 Metro'],
            category: 'families'
        }
    ],
    jaipur: [
        {
            name: 'C-Scheme',
            description: 'Central business district with shopping and dining.',
            highlights: ['🏢 Business', '🛍️ Shopping', '🍽️ Dining', '🚇 Transport'],
            category: 'nightlife'
        },
        {
            name: 'Malviya Nagar',
            description: 'Upscale residential area with excellent amenities.',
            highlights: ['🏫 Schools', '🏥 Healthcare', '🏪 Shopping', '🏞️ Parks'],
            category: 'families'
        },
        {
            name: 'Vaishali Nagar',
            description: 'Well-planned residential area popular among families.',
            highlights: ['🏫 Schools', '🏞️ Parks', '🏪 Markets', '🔇 Peaceful'],
            category: 'quiet'
        },
        {
            name: 'Mansarovar',
            description: 'Residential area with good connectivity and amenities.',
            highlights: ['🏫 Schools', '🏪 Shopping', '🚇 Transport', '🏥 Healthcare'],
            category: 'families'
        },
        {
            name: 'Jagatpura',
            description: 'Modern residential area with educational institutions.',
            highlights: ['🏫 Colleges', '🏪 Malls', '🏥 Hospitals', '🚇 Metro'],
            category: 'families'
        }
    ]
};

// Initialize preferences page
function initializePreferences() {
    const citySelect = document.getElementById('city');
    const areaSelect = document.getElementById('area');
    const form = document.getElementById('preferences-form');
    
    // City change handler
    if (citySelect) {
        citySelect.addEventListener('change', function() {
            const selectedCity = this.value;
            updateAreaOptions(selectedCity);
        });
    }
    
    // Initialize sliders
    initializeSliders();
    
    // Form submission handler
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Filter buttons
    initializeFilters();
}

// Update area dropdown based on selected city
function updateAreaOptions(city) {
    const areaSelect = document.getElementById('area');
    if (!areaSelect) return;
    
    areaSelect.innerHTML = '<option value="">Select an area</option>';
    
    if (city && cityAreaData[city]) {
        areaSelect.disabled = false;
        cityAreaData[city].forEach(area => {
            const option = document.createElement('option');
            option.value = area.toLowerCase().replace(/\s+/g, '_');
            option.textContent = area;
            areaSelect.appendChild(option);
        });
    } else {
        areaSelect.disabled = true;
        areaSelect.innerHTML = '<option value="">Select city first</option>';
    }
}

// Initialize slider functionality
function initializeSliders() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const valueDisplay = document.getElementById(slider.id + '-value');
        
        if (valueDisplay) {
            // Set initial value
            valueDisplay.textContent = slider.value;
            
            // Update value on change
            slider.addEventListener('input', function() {
                valueDisplay.textContent = this.value;
                updateSliderColor(this);
            });
            
            // Initialize color
            updateSliderColor(slider);
        }
    });
}

// Update slider color based on value
function updateSliderColor(slider) {
    const value = parseInt(slider.value);
    const colors = ['#e5e7eb', '#fbbf24', '#f59e0b', '#10b981'];
    slider.style.background = `linear-gradient(90deg, ${colors[value]} 0%, ${colors[value]} ${(value / 3) * 100}%, #e5e7eb ${(value / 3) * 100}%, #e5e7eb 100%)`;
}

// Handle form submission
async function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const preferences = {
        city: formData.get('city'),
        area: formData.get('area'),
        parks: parseInt(formData.get('parks')),
        schools: parseInt(formData.get('schools')),
        safety: parseInt(formData.get('safety')),
        transit: parseInt(formData.get('transit')),
        nightlife: parseInt(formData.get('nightlife')),
        income: parseInt(formData.get('income'))
    };
    
    // Validate form
    if (!preferences.city || !preferences.area) {
        alert('Please select both city and area');
        return;
    }
    
    // Store preferences in localStorage for the results page
    localStorage.setItem('neighborfit-preferences', JSON.stringify(preferences));
    
    // Redirect to results page
    window.location.href = "{% url 'results' %}";
}

// Generate mock results based on preferences
function generateMockResults(preferences) {
    const cityData = mockNeighborhoods[preferences.city] || [];
    
    // Simple scoring algorithm
    const scoredNeighborhoods = cityData.map(neighborhood => {
        let score = 0;
        
        // Weight based on preferences
        if (neighborhood.highlights.some(h => h.includes('Parks'))) score += preferences.parks;
        if (neighborhood.highlights.some(h => h.includes('Schools'))) score += preferences.schools;
        if (neighborhood.highlights.some(h => h.includes('Safety'))) score += preferences.safety;
        if (neighborhood.highlights.some(h => h.includes('Transit') || h.includes('Metro'))) score += preferences.transit;
        if (neighborhood.highlights.some(h => h.includes('Nightlife') || h.includes('Entertainment'))) score += preferences.nightlife;
        if (neighborhood.highlights.some(h => h.includes('Affordable') || h.includes('Business'))) score += preferences.income;
        
        return { ...neighborhood, score };
    });
    
    // Sort by score and return top 5
    return scoredNeighborhoods
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
}

// Show loading state
function showLoading() {
    const loadingContainer = document.getElementById('loading-container');
    const resultsContainer = document.getElementById('results-container');
    
    if (loadingContainer) {
        loadingContainer.style.display = 'block';
        // Smooth scroll to loading
        loadingContainer.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (resultsContainer) {
        resultsContainer.style.display = 'none';
    }
}

// Display results
function displayResults(results) {
    const loadingContainer = document.getElementById('loading-container');
    const resultsContainer = document.getElementById('results-container');
    const resultsGrid = document.getElementById('results-grid');
    
    // Hide loading
    if (loadingContainer) {
        loadingContainer.style.display = 'none';
    }
    
    if (!resultsContainer || !resultsGrid) return;
    
    // Clear previous results
    resultsGrid.innerHTML = '';
    
    if (results.length === 0) {
        resultsGrid.innerHTML = '<p>No recommendations found. Please try different preferences.</p>';
    } else {
        results.forEach((neighborhood, index) => {
            const card = createResultCard(neighborhood, index);
            resultsGrid.appendChild(card);
        });
    }
    
    // Show results
    resultsContainer.style.display = 'block';
    
    // Scroll to results after a brief delay to ensure proper rendering
    setTimeout(() => {
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Create result card
function createResultCard(neighborhood, index) {
    const card = document.createElement('div');
    card.className = 'result-card fade-in';
    card.dataset.category = neighborhood.category;
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <h3>${neighborhood.name}</h3>
        <p>${neighborhood.description}</p>
        <div class="result-highlights">
            ${neighborhood.highlights.map(highlight => 
                `<span class="highlight-tag">${highlight}</span>`
            ).join('')}
        </div>
    `;
    
    return card;
}

// Initialize filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter results
            filterResults(filter);
        });
    });
}

// Filter results
function filterResults(filter) {
    const resultCards = document.querySelectorAll('.result-card');
    
    resultCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePreferences);