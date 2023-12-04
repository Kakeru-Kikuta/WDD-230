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

// weather
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDese = document.querySelector("figcaption");
const apikey = "24ab24a6d14827831d03fa25d028e5ef";
const lon = "140.96140167665035"
const lat = "38.58447280905054"
const wurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`

function displayResults(data) {
    currentTemp.innerHTML =`${data.main.temp} &deg;F`;
    const src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src",src);
    captionDese.textContent = `${desc}`;
}

fetch(wurl)
    .then((response) => response.json())
    .then((jsObject) => {
        displayResults(jsObject);
    });

// Drectory
const url = 'https://kakeru-kikuta.github.io/wdd230/chamber/data/members.json';

function displayProphets (member) {
    
  let card = document.createElement('section');
  let name = document.createElement('h2');
  let portrait = document.createElement('img');
  let location = document.createElement("p")
  let phone = document.createElement("p")
  let web = document.createElement("p")

  name.textContent = member.name;
  location.textContent = `Address: ${member.addresses}`
  phone.textContent = `TEL: ${member.phonenumbers}`
  web.textContent = member.weburl;	

  portrait.setAttribute('src', member.compicon);
  portrait.setAttribute('alt', `Portrait of ${member.name} `); 
  portrait.setAttribute('loading', 'lazy');
  portrait.setAttribute('width', '300');
  portrait.setAttribute('height', '300');

  card.appendChild(name); 
  card.appendChild(portrait);
  card.appendChild(location);
  card.appendChild(phone);
  card.appendChild(web);
  document.querySelector('#cards').appendChild(card)
  }

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const members = jsonObject['members'];
    members.forEach(displayProphets);
  });

  console.log("testing")

//  Drectory List 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
