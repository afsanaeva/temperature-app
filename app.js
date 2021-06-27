document.getElementById("searchBtn").addEventListener("click", function () {
  const locationInput = document.getElementById("locationInput").value;
  const location = document.getElementById("locationAddress");
  const temperature = document.getElementById("temperatureAmount");
  const weatherType = document.getElementById("weatherType");

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput + '&appid=291d5ce696b82568e271736ceb0d0588')
 //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=291d5ce696b82568e271736ceb0d0588`)
    .then (res => res.json())
    .then(data => {
    console.log(data)
    location.innerText = data.name;
    let temperatureCelsius = Math.round(data.main.temp -273.15) ;//Temperature Convert Kelvin to Celsius
    temperature.innerText = temperatureCelsius;
    weatherType.innerText =data.weather[0].main;
    weatherIcon = data.weather[0].icon;
    document.getElementById('weather-icon').src =`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    }) 
    .catch(error => alert('Please inter valid city name'))
  })





  // {"coord":{"lon":90.4074,"lat":23.7104},
  // "weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],
  // "base":"stations",
  // "main":{"temp":304.14,"feels_like":310.72,"temp_min":304.14,"temp_max":304.14,"pressure":1006,"humidity":70},
  // "visibility":4000,
  // "wind":{"speed":5.14,"deg":170},
  // "clouds":{"all":75},
  // "dt":1624805059,
  // "sys":{"type":1,"id":9145,
  // "country":"BD",
  // "sunrise":1624749216,
  // "sunset":1624798139},
  // "timezone":21600,
  // "id":1185241,
  // "name":"Dhaka",
  // "cod":200}


  