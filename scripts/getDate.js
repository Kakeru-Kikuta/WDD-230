var day = new Date(document.lastModified);
var y = day.getFullYear();
var m = day.getMonth();
var d = day.getDate();
var t = day.getTime();

if (m < 10) m ="0" + m;
if (d < 10) d = m;

document.getElementById("year").innerHtml = y;
document.getElementById("modDay").innerText = "Test"

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