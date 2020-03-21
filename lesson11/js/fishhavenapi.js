const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=f319d4241f615929cea014b536c382f8";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp_max;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wspeed').textContent = jsObject.wind.speed;
});


const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=f319d4241f615929cea014b536c382f8";


fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);
    let high = [];
    let day = 1;
    let weekday = [];
    let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    for (let i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        high[i] = jsObject2.list[i].main.temp_max;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png';
        const desc = jsObject2.list[i].weather[0].description; 
        let now = new Date(jsObject2.list[i].dt_txt);
        weekday = days[now.getDay()];
        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("high" + day).innerHTML = high[i];
        document.getElementById("icon" + day).setAttribute("src", imagesrc);
        document.getElementById("icon" + day).setAttribute("alt", desc);
        day++;
      }
    }
});

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven") {
        let eventul = document.createElement('ul');
        let eventdiv = document.createElement('div');
        for (let cont = 0; cont < towns[i].events.length; cont++) {
          let list = document.createElement('li');
          
          list.setAttribute('class', 'eventlist');
          list.textContent = towns[i].events[cont];
          eventul.appendChild(list);
        }

        eventdiv.appendChild(eventul);
        document.querySelector('div.eventdiv').appendChild(eventdiv);
      }
    }
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