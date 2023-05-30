window.addEventListener("load", () => {
    const apiKey = "YOUR_API_KEY"; // Replace with your own API key
    const locationElement = document.getElementById("location");
    const temperatureElement = document.getElementById("temperature");
    const descriptionElement = document.getElementById("description");
  
    // Fetch weather data for Valencia, Spain
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=valencia,es&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
      })
      .catch(error => {
        console.log("Error:", error);
      });
  });
