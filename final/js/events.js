const requestURL = "https://trevorlamoglia.github.io/final/events.json"
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('event1').textContent = jsObject.events[0];
        document.getElementById('event2').textContent = jsObject.events[1];
        document.getElementById('event3').textContent = jsObject.events[2];
    });