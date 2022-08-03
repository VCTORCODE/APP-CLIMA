const btn = document.querySelector("button");
const input = document.querySelector("input");
const container = document.querySelector("#main")
btn.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&uints=metrics&appid=a6eb8c2cd814ef3c0470ba9e51e2548b`).then((response) => {
        return response.json()
    })
        .then((data) => {
            let html = `
        <h2>Weather In ${data.name}</h2>
        <h2 id="temp">Temprature: ${data.main.temp}°C</h2>
        <div id="weather">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
            <h3>${data.weather[0].description}</h3>
        </div>
        <h2 id="humid">Humidity: ${data.main.humidity}%</h2>
        <h2 id="windspeed">Wind Speed: ${data.wind.speed} km/hr</h2>
            `
            container.innerHTML = html;
        })

})