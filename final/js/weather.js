const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=292968&appid=f733a7a677f906c085116effb07477c2&units=metric';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('temp-max').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
    });  
