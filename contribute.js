const form = document.getElementById("contributeForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    const plantName = document.getElementById("plantName").value.trim();
    const scientificName = document.getElementById("scientificName").value.trim();
    const region = document.getElementById("region").value;
    const season = document.getElementById("season").value;
    const habitat = document.getElementById("habitat").value;
    const description = document.getElementById("description").value.trim();
    const photoURL = document.getElementById("photoURL").value.trim();
    const contributorName = document.getElementById("contributorName").value.trim();
    const email = document.getElementById("email").value.trim();    
    const agreement = document.getElementById("agreement").checked;
});

let errors = [];

if (plantName === "") {
    errors.push("Please enter a plant name.");
}
if (region === "") {
    errors.push("Please select a region.");
}
if (season === "") {
    errors.push("Please select a season.");
}
if (habitat === "") {
    errors.push("Please select a habitat.");
}
if (description === "") {
    errors.push("Please enter a description.");
}
if (!agreement) {
    errors.push("Please agree to the submission policy.");
}
if (errors.length > 0) {
    message.innerHTML = errors.join("<br>");
    message.style.color = "red";
    return;
}
message.style.color = "green";
message.innerHTML =
"🌿 Thank you! Your submission has been received for review.";

form.reset();