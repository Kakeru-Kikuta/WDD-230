// Last mod date
var day = new Date(document.lastModified);
var y = day.getFullYear();
var mo = day.getMonth();
var d = day.getDate();
var t = day.getTime();
var h = day.getHours();
var m = day.getMinutes();
var s = day.getSeconds();

if (m < 10) m ="0" + m;
 if (d < 10) d = m;

document.getElementById("year").innerText = y;
document.getElementById("date").innerHTML = `${mo}/${d}/${y} ${h}:${m}:${s}`

/// For Movile 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/// Dark Mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

/// Visits count
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// Weather
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDese = document.querySelector("figcaption");
const apikey = "24ab24a6d14827831d03fa25d028e5ef";
const lon = "140.96140167665035"
const lat = "38.58447280905054"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`

function displayResults(data) {
    currentTemp.innerHTML =`${data.main.temp} &deg;F`;
    const src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",src);
    captionDese.textContent = `${desc}`;
}

fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        displayResults(jsObject);
    });
    