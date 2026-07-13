//test: alert("app.js loaded!");//
//plant database//
const plants = [

    {
        name: "Dandelion",
        scientificName: "Taraxacum officinale",

        regions: ["north", "central", "south"],

        seasons: ["spring", "summer", "fall"],

        habitats: ["urban", "field", "lawn", "park"],

        edibleParts: "Leaves, flowers, roots",

        description: "One of Indiana's most common edible plants. Young leaves are less bitter and flowers can be used in salads or tea.",

        caution: "Only harvest from areas that have not been treated with herbicides or pesticides.",

        image: "images/dandelion.jpeg"
    },

    {
        name: "Wild Violet",
        scientificName: "Viola sororia",

        regions: ["north", "central", "south"],

        seasons: ["spring"],

        habitats: ["forest", "yard", "park"],

        edibleParts: "Leaves and flowers",

        description: "A common spring wildflower with edible leaves and flowers.",

        caution: "Properly identify before harvesting.",

        image: "images/wildViolet.jpeg"
    },

    {
        name: "Morel Mushroom",
        scientificName: "Morchella americana",

        regions: ["Central", "South"],

        seasons: ["Spring"],

        habitats: ["Forest/Woods"],

        edibleParts: "Entire mushroom",

        description: "A prized wild mushroom found in wooded areas during spring.",

        caution: "Never eat unless positively identified. False morels are poisonous.",

        image: "images/morels.jpg"
    },

];
//connect .js to .html files//
// 2. Select DOM elements
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results');

// 3. Function to display plant cards
function displayPlants() {
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Get current filter values
    const selectedRegion = document.getElementById('regionFilter').value;
    const selectedSeason = document.getElementById('seasonFilter').value;
    const selectedHabitat = document.getElementById('habitatFilter').value;

    // 4. Filter the data
    const filteredPlants = plants.filter(plant => {
        // Convert dropdown values to lowercase for foolproof matching
        const selectedRegLower = selectedRegion.toLowerCase();
        const selectedSeaLower = selectedSeason.toLowerCase();
        const selectedHabLower = selectedHabitat.toLowerCase();

        // 1. Check Region Array
        const matchesRegion = selectedRegion === 'all' || 
            (plant.regions && plant.regions.some(r => r.toLowerCase() === selectedRegLower));

        // 2. Check Season Array
        const matchesSeason = selectedSeason === 'all' || 
            (plant.seasons && plant.seasons.some(s => s.toLowerCase() === selectedSeaLower));

        // 3. Check Habitat Array (Handles partial matches like "Forest" matching "Forest/Woods")
        const matchesHabitat = selectedHabitat === 'all' || 
            (plant.habitats && plant.habitats.some(h => h.toLowerCase().includes(selectedHabLower)));
        
        return matchesRegion && matchesSeason && matchesHabitat;
    });

    // 5. Generate HTML for results
     if (filteredPlants.length === 0) {
        resultsContainer.innerHTML = `
            <div id="fallback-card">
                <h3>No Plants Found</h3>
                <p>No edible plants match these criteria. Try changing your dropdown filters!</p>
            </div>
        `;
        
        // Force the fallback container styles to mirror your Tailwind-styled finder box
        const fallbackCard = document.getElementById('fallback-card');
        fallbackCard.style.backgroundColor = 'rgba(248, 250, 252, 0.95)';
        fallbackCard.style.backdropFilter = 'blur(8px)';
        fallbackCard.style.border = '1px solid #e2e8f0';
        fallbackCard.style.borderRadius = '12px';
        fallbackCard.style.padding = '32px';
        fallbackCard.style.textAlign = 'center';
        fallbackCard.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        fallbackCard.style.maxWidth = '480px';
        fallbackCard.style.margin = '24px auto';
        
        const fallbackTitle = fallbackCard.querySelector('h3');
        fallbackTitle.style.color = '#ef4444';
        fallbackTitle.style.margin = '0 0 8px 0';
        fallbackTitle.style.fontSize = '1.3rem';
        fallbackTitle.style.fontWeight = '700';

        const fallbackText = fallbackCard.querySelector('p');
        fallbackText.style.color = '#475569';
        fallbackText.style.margin = '0';
        return;
    }

    filteredPlants.forEach(plant => {
        const card = document.createElement('div');
        card.classList.add('plant-card'); // Style this class in your CSS
        
        card.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}" class="plant-img">
            <div class="plant-info">
                <h3>${plant.name}</h3>
                <p><strong>Region:</strong> ${plant.region}</p>
                <p><strong>Season:</strong> ${plant.season}</p>
                <p><strong>Habitat:</strong> ${plant.habitat}</p>
                <p><strong>Edible Parts:</strong> ${plant.ediblePart}</p>
            </div>
        `;
        
        resultsContainer.appendChild(card);
    });
}

// 6. Add event listener to the button
searchBtn.addEventListener('click', displayPlants);