document.getElementById("searchBtn").addEventListener("click", function () {
  const locationInput = document.getElementById("locationInput");
  const location = document.getElementById("locationAddress");
  const temperature = document.getElementById("temperatureAmount");
  const weatherType = document.getElementById("weatherType");

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=291d5ce696b82568e271736ceb0d0588`)
    .then (res => res.json())
    .then(data => {
    console.log(data)
    location.innerText = data.name;
    let temperatureCelsius = Math.round(data.main.temp -273.15) ;//Temperature Convert Kelvin to Celsius
    temperature.innerText = temperatureCelsius;
    weatherType.innerText =data.weather[0].main;
    }) 
  })




  