const requestURL = ''
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('event1').textContent = jsObject.towns[6].events[0];
        document.getElementById('event2').textContent = jsObject.towns[6].events[1];
        document.getElementById('event3').textContent = jsObject.towns[6].events[2];
    });