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

// form
const kp1 = document.querySelector("#pass");
const kp2 = document.querySelector("#pass2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// form range
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}