document.addEventListener("DOMContentLoaded", loadData);

async function loadData(params) {
    const url = "https://webbutveckling.miun.se/files/ramschema.json";

    try {
        const response = await fetch(url);
        const products = await response.json();
        
    } catch (error) {
        console.error("Fel: " + error)
    }
}