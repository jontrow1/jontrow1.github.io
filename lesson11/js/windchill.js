let temp = parseInt(document.getElementById('temp').innerText);
let wspeed = parseInt(document.getElementById('wspeed').innerText);

let windchill = computeWindChill(temp, wspeed);

function computeWindChill(temp, wspeed) {
    if (temp <= 50 && wspeed > 3) {
        wchill = 35.74 + 0.6215 * temp - 35.75 * wspeed ** 0.16 + 0.4275 * temp * wspeed ** 0.16;
        document.getElementById("wchill").innerText = Math.floor(wchill) + "&#176;F";
    }
    else {
        document.getElementById("wchill").innerText = "N/A";
    }
}
