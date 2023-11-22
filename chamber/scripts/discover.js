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

// Visitor count
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-Is")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);