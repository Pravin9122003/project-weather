// Handle button click to get weather
document.getElementById("getWeatherBtn").addEventListener("click", function() {
    const city = document.getElementById("city").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

// Function to get weather data from WeatherAPI
function getWeather(city) {
    const apiKey = '523412cbd1564a9a855103105251201'; // Replace with your actual API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    // Fetch data from WeatherAPI
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Check if the city is valid and data exists
            if (data.error) {
                alert("City not found. Please try again.");
            } else {
                const weatherData = {
                    location: data.location.name,
                    temperature: data.current.temp_c + "°C",
                    condition: data.current.condition.text
                };

                // Update the UI with the weather data
                document.getElementById("location").innerText = weatherData.location;
                document.getElementById("temperature").innerText = "Temperature: " + weatherData.temperature;
                document.getElementById("condition").innerText = "Condition: " + weatherData.condition;

                // Display the weather result section
                document.getElementById("weatherResult").style.display = "block";
            }
        })
        .catch(error => {
            alert("Error fetching data. Please try again later.");
            console.error("Error fetching weather data:", error);
        });
}
