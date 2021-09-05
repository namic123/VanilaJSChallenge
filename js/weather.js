const API_KEY = "704015e3b4320763b9e39982e3b46469";

function showUserPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const getWeather = document.querySelector(".weather-js span:first-child");
            const city = document.querySelector(".weather-js span:last-child");
            city.innerText = data.name;
            getWeather.innerText = `${data.weather[0].main} / ${data.main.temp}     `;
        });
}
function positionError() {
    alert("I can't find your position.");
}
navigator.geolocation.getCurrentPosition(showUserPosition, positionError);
