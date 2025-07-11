//BAD CODE// Your code here

document.addEventListener('DOMContentLoaded', () => {
    const weatherApp = document.getElementById('weather-app');
    const weatherSection = document.getElementById('weather');
    const weatherForm = weatherApp.querySelector('form');
    const weatherSearchInput = document.getElementById('weather-search');

    const API_KEY = '3bf2d8719d95c3ffdd507ee90305830f';

    weatherForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        weatherSection.innerHTML = ''; // Clear previous weather data
        const userQuery = weatherSearchInput.value.trim();
        weatherSearchInput.value = ''; // Reset input field
});


/*<h2>[cityCountry]</h2>
<a href="[mapLink]" target="_blank">Click to view map</a>
<img src="[iconUrl]" alt="[description]">
<p style="text-transform: capitalize;">[description]</p><br>
<p>Current: [currentTemp]° F</p>
<p>Feels like: [feelsLikeTemp]° F</p><br>
<p>Last updated: [timeString]</p>