const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=292968&appid=f733a7a677f906c085116effb07477c2&units=metric';
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        console.log(forecastObject)
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast)
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
      for (let day = 0; day < forecast.length; day++) {
          const d = new Date(forecast[day].dt_txt);
          const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
          const desc = forecast[day].weather[0].description;
          document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
          document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
          document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      }

    });