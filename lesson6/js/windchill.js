let temp = document.getElementById('temp').textContent;
let wspeed = document.getElementById('wspeed').textContent;

let windchill = computeWindChill(temp, wspeed);

function computeWindChill(temp, wspeed) {
    if (temp <= 50 && wspeed > 3) {
        wchill = 35.74 + 0.6215 * temp - 35.75 * wspeed ** 0.16 + 0.4275 * temp * wspeed ** 0.16;
        document.getElementById("wchill").innerHTML = Math.floor(wchill) + "˚F";
    }
    else {
        document.getElementById("wchill").innerHTML = "N/A";
    }
}
