const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDese = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units=imperial&appid={d7b6d571ecac1d4048d59c74a9dcccf9}"

async function apiFetch () {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data =await response.json();
            console.log(data);
        } else {
            throw Error(await response.text());
        } catch (error) {
            console.log(error);
        }
    }
}
apiFetch();

function displayResults(data) {
    currentTemp.innerHTML =`${data.____}&deg;F`;
    const incosrc = ``
    let desc = data.weather[0].;
    weatherIcon.setAttribute();
    weatherIcon.setAttribute();
    captionDese.textContent = `${desc}`;
}