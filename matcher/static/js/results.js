// Mock neighborhood data for recommendations
const mockNeighborhoods = {
    delhi: [
        {
            name: 'Greater Kailash',
            description: 'Upscale residential area with excellent shopping and dining options.',
            highlights: ['🏞️ Parks', '🎓 Schools', '🛡️ Safety', '🏪 Shopping'],
            category: 'families',
            score: 0,
            details: {
                safety: 9,
                schools: 8,
                parks: 9,
                transit: 7,
                nightlife: 6,
                income: 8
            }
        },
        {
            name: 'Connaught Place',
            description: 'Central business district with vibrant nightlife and entertainment.',
            highlights: ['🎭 Nightlife', '🚇 Transit', '🏢 Business', '🍽️ Dining'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 7,
                schools: 6,
                parks: 5,
                transit: 9,
                nightlife: 9,
                income: 7
            }
        },
        {
            name: 'Vasant Kunj',
            description: 'Peaceful residential area with green spaces and family amenities.',
            highlights: ['🏞️ Parks', '🏫 Schools', '🏥 Healthcare', '🔇 Quiet'],
            category: 'quiet',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 9,
                transit: 6,
                nightlife: 4,
                income: 7
            }
        },
        {
            name: 'Dwarka',
            description: 'Well-planned modern township with excellent connectivity.',
            highlights: ['🚇 Metro', '🏪 Malls', '🏫 Schools', '🏥 Hospitals'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 9,
                parks: 7,
                transit: 9,
                nightlife: 5,
                income: 6
            }
        },
        {
            name: 'Karol Bagh',
            description: 'Commercial hub with great shopping and food options.',
            highlights: ['🛍️ Shopping', '🍽️ Food', '🚇 Transit', '💰 Affordable'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 6,
                schools: 6,
                parks: 5,
                transit: 8,
                nightlife: 7,
                income: 8
            }
        }
    ],
    mumbai: [
        {
            name: 'Bandra',
            description: 'Trendy suburb known for its cafes, restaurants, and nightlife.',
            highlights: ['🎭 Nightlife', '🍽️ Dining', '🎬 Entertainment', '🚇 Transit'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 7,
                schools: 7,
                parks: 6,
                transit: 8,
                nightlife: 9,
                income: 7
            }
        },
        {
            name: 'Powai',
            description: 'IT hub with beautiful lake views and modern amenities.',
            highlights: ['🏢 IT Companies', '🏞️ Lake', '🏪 Malls', '🏫 Schools'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 8,
                transit: 7,
                nightlife: 6,
                income: 7
            }
        },
        {
            name: 'Juhu',
            description: 'Beachside locality popular among celebrities and families.',
            highlights: ['🏖️ Beach', '🎬 Bollywood', '🏫 Schools', '🍽️ Restaurants'],
            category: 'families',
            score: 0,
            details: {
                safety: 7,
                schools: 8,
                parks: 7,
                transit: 6,
                nightlife: 7,
                income: 8
            }
        },
        {
            name: 'Lower Parel',
            description: 'Business district with high-end shopping and dining.',
            highlights: ['🏢 Business', '🛍️ Luxury Shopping', '🍽️ Fine Dining', '🎭 Culture'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 8,
                schools: 6,
                parks: 5,
                transit: 9,
                nightlife: 8,
                income: 9
            }
        },
        {
            name: 'Goregaon',
            description: 'Residential area with good connectivity and peaceful environment.',
            highlights: ['🚇 Metro', '🏞️ Parks', '🏫 Schools', '🔇 Quiet'],
            category: 'quiet',
            score: 0,
            details: {
                safety: 8,
                schools: 7,
                parks: 8,
                transit: 8,
                nightlife: 4,
                income: 6
            }
        }
    ],
    bengaluru: [
        {
            name: 'Koramangala',
            description: 'Popular among young professionals with great pub culture.',
            highlights: ['🎭 Pubs', '🍽️ Restaurants', '🏢 Startups', '🚇 Metro'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 7,
                schools: 6,
                parks: 6,
                transit: 7,
                nightlife: 9,
                income: 7
            }
        },
        {
            name: 'Whitefield',
            description: 'Major IT hub with excellent infrastructure and amenities.',
            highlights: ['🏢 IT Parks', '🏪 Malls', '🏫 Schools', '🏥 Hospitals'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 7,
                transit: 6,
                nightlife: 5,
                income: 7
            }
        },
        {
            name: 'Indiranagar',
            description: 'Vibrant area known for its shopping and nightlife.',
            highlights: ['🛍️ Shopping', '🎭 Nightlife', '🍽️ Dining', '🎵 Music'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 7,
                schools: 6,
                parks: 6,
                transit: 7,
                nightlife: 8,
                income: 7
            }
        },
        {
            name: 'Jayanagar',
            description: 'Traditional residential area with parks and cultural centers.',
            highlights: ['🏞️ Parks', '🎭 Culture', '🏫 Schools', '🔇 Peaceful'],
            category: 'quiet',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 9,
                transit: 6,
                nightlife: 4,
                income: 6
            }
        },
        {
            name: 'HSR Layout',
            description: 'Well-planned layout popular among IT professionals.',
            highlights: ['🏢 IT Hub', '🏞️ Parks', '🏪 Shopping', '🍽️ Cafes'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 7,
                parks: 8,
                transit: 6,
                nightlife: 6,
                income: 7
            }
        }
    ],
    chennai: [
        {
            name: 'T. Nagar',
            description: 'Major commercial hub known for shopping and textiles.',
            highlights: ['🛍️ Shopping', '🏪 Markets', '🚇 Transit', '🍽️ Food'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 6,
                schools: 6,
                parks: 5,
                transit: 8,
                nightlife: 7,
                income: 7
            }
        },
        {
            name: 'Adyar',
            description: 'Upscale residential area with cultural significance.',
            highlights: ['🏞️ Beach', '🎭 Culture', '🏫 Schools', '🏥 Healthcare'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 7,
                transit: 7,
                nightlife: 5,
                income: 8
            }
        },
        {
            name: 'OMR',
            description: 'IT corridor with modern infrastructure and amenities.',
            highlights: ['🏢 IT Companies', '🏪 Malls', '🏫 Schools', '🏥 Hospitals'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 6,
                transit: 7,
                nightlife: 5,
                income: 7
            }
        },
        {
            name: 'Mylapore',
            description: 'Cultural heart of Chennai with temples and heritage.',
            highlights: ['🏛️ Temples', '🎭 Culture', '🛍️ Traditional', '🔇 Heritage'],
            category: 'quiet',
            score: 0,
            details: {
                safety: 7,
                schools: 7,
                parks: 6,
                transit: 6,
                nightlife: 3,
                income: 6
            }
        },
        {
            name: 'Besant Nagar',
            description: 'Coastal area popular among young professionals.',
            highlights: ['🏖️ Beach', '🍽️ Seafood', '🎵 Music', '🏃 Sports'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 7,
                schools: 6,
                parks: 7,
                transit: 6,
                nightlife: 8,
                income: 7
            }
        }
    ],
    hyderabad: [
        {
            name: 'Banjara Hills',
            description: 'Posh locality with high-end restaurants and entertainment.',
            highlights: ['🍽️ Fine Dining', '🎭 Entertainment', '🏪 Shopping', '🛡️ Safety'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 9,
                schools: 7,
                parks: 6,
                transit: 7,
                nightlife: 9,
                income: 9
            }
        },
        {
            name: 'Gachibowli',
            description: 'Major IT hub with modern amenities and infrastructure.',
            highlights: ['🏢 IT Companies', '🏪 Malls', '🏫 Schools', '🏥 Healthcare'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 7,
                transit: 8,
                nightlife: 6,
                income: 7
            }
        },
        {
            name: 'Hitech City',
            description: 'Technology hub with excellent connectivity and facilities.',
            highlights: ['🏢 Tech Parks', '🚇 Metro', '🏪 Malls', '🍽️ Restaurants'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 7,
                parks: 6,
                transit: 9,
                nightlife: 6,
                income: 7
            }
        },
        {
            name: 'Jubilee Hills',
            description: 'Upscale residential area with parks and cultural venues.',
            highlights: ['🏞️ Parks', '🎭 Culture', '🏫 Schools', '🛡️ Safety'],
            category: 'quiet',
            score: 0,
            details: {
                safety: 9,
                schools: 8,
                parks: 8,
                transit: 6,
                nightlife: 5,
                income: 8
            }
        },
        {
            name: 'Kondapur',
            description: 'Growing residential area with good connectivity.',
            highlights: ['🏢 Offices', '🏪 Shopping', '🏫 Schools', '🚇 Metro'],
            category: 'families',
            score: 0,
            details: {
                safety: 7,
                schools: 7,
                parks: 6,
                transit: 8,
                nightlife: 5,
                income: 6
            }
        }
    ],
    jaipur: [
        {
            name: 'C-Scheme',
            description: 'Central business district with shopping and dining.',
            highlights: ['🏢 Business', '🛍️ Shopping', '🍽️ Dining', '🚇 Transport'],
            category: 'nightlife',
            score: 0,
            details: {
                safety: 7,
                schools: 6,
                parks: 5,
                transit: 8,
                nightlife: 7,
                income: 7
            }
        },
        {
            name: 'Malviya Nagar',
            description: 'Upscale residential area with excellent amenities.',
            highlights: ['🏫 Schools', '🏥 Healthcare', '🏪 Shopping', '🏞️ Parks'],
            category: 'families',
            score: 0,
            details: {
                safety: 8,
                schools: 9,
                parks: 7,
                transit: 7,
                nightlife: 5,
                income: 7
            }
        },
        {
            name: 'Vaishali Nagar',
            description: 'Well-planned residential area popular among families.',
            highlights: ['🏫 Schools', '🏞️ Parks', '🏪 Markets', '🔇 Peaceful'],
            category: 'quiet',
            score: 0,
            details: {
                safety: 8,
                schools: 8,
                parks: 8,
                transit: 6,
                nightlife: 4,
                income: 6
            }
        },
        {
            name: 'Mansarovar',
            description: 'Residential area with good connectivity and amenities.',
            highlights: ['🏫 Schools', '🏪 Shopping', '🚇 Transport', '🏥 Healthcare'],
            category: 'families',
            score: 0,
            details: {
                safety: 7,
                schools: 8,
                parks: 6,
                transit: 7,
                nightlife: 5,
                income: 6
            }
        },
        {
            name: 'Jagatpura',
            description: 'Modern residential area with educational institutions.',
            highlights: ['🏫 Colleges', '🏪 Malls', '🏥 Hospitals', '🚇 Metro'],
            category: 'families',
            score: 0,
            details: {
                safety: 7,
                schools: 9,
                parks: 6,
                transit: 8,
                nightlife: 5,
                income: 6
            }
        }
    ]
};

// Initialize results page
function initializeResults() {
    console.log('Initializing results page...');
    
    // Get preferences from URL parameters or localStorage
    const preferences = getPreferencesData();
    
    if (!preferences) {
        console.log('No preferences found, redirecting to preferences page');
        // Redirect to preferences page if no data found
        window.location.href = 'preferences.html';
        return;
    }
    
    console.log('Found preferences:', preferences);
    
    // Display preferences summary
    displayPreferencesSummary(preferences);
    
    // Generate and display results
    generateResults(preferences);
    
    // Initialize filter functionality
    initializeFilters();
}

// Get preferences data from localStorage or URL
function getPreferencesData() {
    // Try to get from localStorage first
    const storedPreferences = localStorage.getItem('neighborfit-preferences');
    if (storedPreferences) {
        console.log('Found preferences in localStorage:', storedPreferences);
        return JSON.parse(storedPreferences);
    }
    
    // Try to get from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('city')) {
        console.log('Found preferences in URL parameters');
        return {
            city: urlParams.get('city'),
            area: urlParams.get('area'),
            parks: parseInt(urlParams.get('parks')) || 1,
            schools: parseInt(urlParams.get('schools')) || 1,
            safety: parseInt(urlParams.get('safety')) || 1,
            transit: parseInt(urlParams.get('transit')) || 1,
            nightlife: parseInt(urlParams.get('nightlife')) || 1,
            income: parseInt(urlParams.get('income')) || 1
        };
    }
    
    console.log('No preferences found');
    return null;
}

// Display preferences summary
function displayPreferencesSummary(preferences) {
    const summaryContainer = document.getElementById('preferences-summary');
    if (!summaryContainer) return;
    
    const cityName = preferences.city.charAt(0).toUpperCase() + preferences.city.slice(1);
    const preferenceLabels = {
        parks: 'Parks & Recreation',
        schools: 'Schools & Education',
        safety: 'Safety & Security',
        transit: 'Public Transit',
        nightlife: 'Nightlife & Entertainment',
        income: 'Income Level Match'
    };
    
    const importanceLabels = ['Not Important', 'Somewhat Important', 'Important', 'Very Important'];
    
    let summaryHTML = `
        <div class="preferences-summary-content">
            <div class="summary-item">
                <span class="summary-label">City:</span>
                <span class="summary-value">${cityName}</span>
            </div>
            <div class="summary-preferences">
                <h4>Your Preferences:</h4>
                <div class="preference-tags">
    `;
    
    Object.keys(preferenceLabels).forEach(key => {
        const value = preferences[key];
        if (value > 1) { // Only show preferences that are important or very important
            summaryHTML += `
                <span class="preference-tag importance-${value}">
                    ${preferenceLabels[key]}: ${importanceLabels[value]}
                </span>
            `;
        }
    });
    
    summaryHTML += `
                </div>
            </div>
        </div>
    `;
    
    summaryContainer.innerHTML = summaryHTML;
}

// Generate results based on preferences
async function generateResults(preferences) {
    console.log('Generating results for preferences:', preferences);
    
    const loadingContainer = document.getElementById('loading-container');
    const resultsContainer = document.getElementById('results-container');
    const noResultsContainer = document.getElementById('no-results');
    
    // Show loading initially
    if (loadingContainer) {
        loadingContainer.style.display = 'block';
    }
    if (resultsContainer) {
        resultsContainer.style.display = 'none';
    }
    if (noResultsContainer) {
        noResultsContainer.style.display = 'none';
    }
    
    try {
        // Try to fetch from API first
        const response = await fetch('http://localhost:8000/api/recommend/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preferences)
        });
        
        if (response.ok) {
            const data = await response.json();
            displayResults(data.recommendations || []);
        } else {
            throw new Error('API not available');
        }
    } catch (error) {
        // Fallback to mock data
        console.log('API not available, using mock data');
        
        // Use a longer timeout to simulate loading and ensure proper display
        setTimeout(() => {
            const mockResults = generateMockResults(preferences);
            console.log('Generated mock results:', mockResults);
            displayResults(mockResults);
        }, 1500);
    }
}

// Generate mock results based on preferences
function generateMockResults(preferences) {
    console.log('Generating mock results for city:', preferences.city);
    const cityData = mockNeighborhoods[preferences.city] || [];
    console.log('Found city data:', cityData);
    
    if (cityData.length === 0) {
        console.log('No data found for city:', preferences.city);
        return [];
    }
    
    // Calculate scores based on preferences
    const scoredNeighborhoods = cityData.map(neighborhood => {
        let score = 0;
        const details = neighborhood.details;
        
        // Weight the score based on user preferences
        score += (details.parks / 10) * preferences.parks * 10;
        score += (details.schools / 10) * preferences.schools * 10;
        score += (details.safety / 10) * preferences.safety * 10;
        score += (details.transit / 10) * preferences.transit * 10;
        score += (details.nightlife / 10) * preferences.nightlife * 10;
        score += (details.income / 10) * preferences.income * 10;
        
        return { 
            ...neighborhood, 
            score: Math.round(score),
            matchPercentage: Math.min(Math.round((score / 180) * 100), 100)
        };
    });
    
    // Sort by score and return top 5
    const results = scoredNeighborhoods
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
    
    console.log('Scored and sorted results:', results);
    return results;
}

// Display results
function displayResults(results) {
    console.log('Displaying results:', results);
    
    const loadingContainer = document.getElementById('loading-container');
    const resultsContainer = document.getElementById('results-container');
    const noResultsContainer = document.getElementById('no-results');
    const resultsGrid = document.getElementById('results-grid');
    const countNumber = document.getElementById('count-number');
    
    // Hide loading
    if (loadingContainer) {
        loadingContainer.style.display = 'none';
    }
    
    // Hide no results initially
    if (noResultsContainer) {
        noResultsContainer.style.display = 'none';
    }
    
    if (results.length === 0) {
        console.log('No results to display, showing no results message');
        if (noResultsContainer) {
            noResultsContainer.style.display = 'block';
        }
        if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
        return;
    }
    
    // Update count
    if (countNumber) {
        countNumber.textContent = results.length;
    }
    
    // Clear previous results
    if (resultsGrid) {
        resultsGrid.innerHTML = '';
        
        results.forEach((neighborhood, index) => {
            const card = createResultCard(neighborhood, index);
            resultsGrid.appendChild(card);
        });
    }
    
    // Show results
    if (resultsContainer) {
        resultsContainer.style.display = 'block';
        
        // Ensure results stay visible by adding a small delay
        setTimeout(() => {
            resultsContainer.style.opacity = '1';
            resultsContainer.style.visibility = 'visible';
        }, 100);
    }
    
    console.log('Results displayed successfully');
}

// Create result card
function createResultCard(neighborhood, index) {
    const card = document.createElement('div');
    card.className = 'result-card fade-in';
    card.dataset.category = neighborhood.category;
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.opacity = '1';
    card.style.visibility = 'visible';
    
    const matchPercentage = neighborhood.matchPercentage || 85;
    const details = neighborhood.details || {};
    
    card.innerHTML = `
        <div class="result-header">
            <h3>${neighborhood.name}</h3>
            <div class="match-percentage">
                <span class="percentage-value">${matchPercentage}%</span>
                <span class="percentage-label">Match</span>
            </div>
        </div>
        <p class="result-description">${neighborhood.description}</p>
        <div class="result-highlights">
            ${neighborhood.highlights.map(highlight => 
                `<span class="highlight-tag">${highlight}</span>`
            ).join('')}
        </div>
        <div class="result-details">
            <div class="detail-item">
                <span class="detail-label">Safety</span>
                <div class="detail-bar">
                    <div class="detail-fill" style="width: ${(details.safety || 7) * 10}%"></div>
                </div>
            </div>
            <div class="detail-item">
                <span class="detail-label">Schools</span>
                <div class="detail-bar">
                    <div class="detail-fill" style="width: ${(details.schools || 7) * 10}%"></div>
                </div>
            </div>
            <div class="detail-item">
                <span class="detail-label">Transit</span>
                <div class="detail-bar">
                    <div class="detail-fill" style="width: ${(details.transit || 7) * 10}%"></div>
                </div>
            </div>
        </div>
        <div class="result-actions">
            <button class="action-button secondary" onclick="learnMore('${neighborhood.name}')">
                Learn More
            </button>
            <button class="action-button primary" onclick="saveNeighborhood('${neighborhood.name}')">
                Save
            </button>
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
    const countNumber = document.getElementById('count-number');
    let visibleCount = 0;
    
    resultCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
    
    if (countNumber) {
        countNumber.textContent = visibleCount;
    }
}

// Action functions
function learnMore(neighborhoodName) {
    alert(`More information about ${neighborhoodName} would be displayed here. This could open a detailed view or redirect to a dedicated page.`);
}

function saveNeighborhood(neighborhoodName) {
    // Save to localStorage
    const savedNeighborhoods = JSON.parse(localStorage.getItem('saved-neighborhoods') || '[]');
    if (!savedNeighborhoods.includes(neighborhoodName)) {
        savedNeighborhoods.push(neighborhoodName);
        localStorage.setItem('saved-neighborhoods', JSON.stringify(savedNeighborhoods));
        alert(`${neighborhoodName} has been saved to your favorites!`);
    } else {
        alert(`${neighborhoodName} is already in your saved neighborhoods.`);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeResults);