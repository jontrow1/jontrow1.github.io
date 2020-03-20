const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=f319d4241f615929cea014b536c382f8";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp_max;
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wspeed').textContent = jsObject.wind.speed;
});


const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=f319d4241f615929cea014b536c382f8";


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
      if (towns[i].name == "Soda Springs") {
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