const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Riggins,Idaho&units=imperial&APPID=f319d4241f615929cea014b536c382f8";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp_max;
    document.getElementById('currently1').textContent = jsObject.weather[0].main;
    document.getElementById('temp1').textContent = jsObject.main.temp_max;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wspeed').textContent = jsObject.wind.speed;
    computeWindChill();
});

function computeWindChill() {
  let temp = parseInt(document.getElementById('temp').textContent);
  let wspeed = parseInt(document.getElementById('wspeed').textContent);
  if (temp <= 50 && wspeed > 3) {
    wchill = 35.74 + 0.6215 * temp - 35.75 * wspeed ** 0.16 + 0.4275 * temp * wspeed ** 0.16;
    document.getElementById("wchill").innerHTML = Math.floor(wchill) + "&#176;F";
  }
  else {
    document.getElementById("wchill").innerHTML = "N/A";
  }
}