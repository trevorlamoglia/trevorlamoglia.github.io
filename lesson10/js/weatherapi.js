const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f733a7a677f906c085116effb07477c2&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        document.getElementById('name').textContent = jsObject.name;
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('temp-max').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;

        let temperature = parseFloat(document.getElementById('current-temp').innerHTML);
        let speed = parseFloat(document.getElementById('speed').innerHTML);

        let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(speed, 0.16))
        + (0.4275 * temperature * Math.pow(speed, 0.16));

        windchill = Math.round(windchill);
    });