const requestURL = "https://trevorlamoglia.github.io/final/directory.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
    })