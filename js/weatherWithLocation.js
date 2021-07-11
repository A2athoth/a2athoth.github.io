const API_KEY = "0ba1ac4b6474e8ce198a2249284e164b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const weatherIcon = document.querySelector(
                "#weather div:first-child span"
            );
            const weatherCity = document.querySelector(
                "#weather div:nth-child(2) span"
            );
            const weatherMain = document.querySelector(
                "#weather div:nth-child(3) span"
            );
            const weatherDesc = document.querySelector(
                "#weather div:last-child span"
            );
            weatherCity.innerText = data.name;
            const icon = document.createElement("img");
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherIcon.append(icon);
            console.log(icon);
            weatherMain.innerText = data.weather[0].main;
            weatherDesc.innerText = data.weather[0].description;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
