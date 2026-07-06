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

        image: "images/dandelion.jpg"
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

        image: "images/violet.jpg"
    },

    {
        name: "Morel Mushroom",
        scientificName: "Morchella americana",

        regions: ["central", "south"],

        seasons: ["spring"],

        habitats: ["forest"],

        edibleParts: "Entire mushroom",

        description: "A prized wild mushroom found in wooded areas during spring.",

        caution: "Never eat unless positively identified. False morels are poisonous.",

        image: "images/morel.jpg"
    }

];
//connect .js to .html files//
const regionSelect = document.getElementById("region");
const seasonSelect = document.getElementById("season");
const habitatSelect = document.getElementById("habitat");

const searchButton = document.getElementById("search-btn");

const results = document.getElementById("results");
//event listeners//
searchButton.addEventListener("click", searchPlants);
function searchPlants() {

    const selectedRegion = regionFilter.value;
    const selectedSeason = seasonFilter.value;
    const selectedHabitat = habitatFilter.value;

    console.log(selectedRegion);
    console.log(selectedSeason);
    console.log(selectedHabitat);
    const matches = plants.filter(function(plant) {

        return plant.regions.includes(selectedRegion)
            && plant.seasons.includes(selectedSeason)
            && plant.habitats.includes(selectedHabitat);

    });

    console.log(matches);
    //alert(
       //"Region: " + selectedRegion +
       //"\nSeason: " + selectedSeason +
       //"\nHabitat: " + selectedHabitat
    //);
}



    

