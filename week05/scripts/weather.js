const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDese = document.querySelector("figcaption");
const apikey = "24ab24a6d14827831d03fa25d028e5ef";
const lon = "6.64"
const lat = "49.75"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`

// async function apiFetch () {
    // try {
        // const response = await fetch(url);
        // if (response.ok) {
            // const data =await response.json();
            // console.log(data); testing only
        // } else {
            // throw Error(await response.text());
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }


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