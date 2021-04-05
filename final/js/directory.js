const requestURL = "https://trevorlamoglia.github.io/final/directory.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        const companies = jsonObject['companies'];

        for (let i = 0; i < companies.length; i++) {
            let card = document.createElement('div');
            let h2 = document.createElement('h2');
            let contact = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = companies[i].name;
            contact.textContent = companies[i].contact;
            image.setAttribute('src', 'images/' + companies[i].photo);
            image.setAttribute('alt', companies[i].name + ' logo');

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(contact);

            document.querySelector('div.cards').appendChild(card);
        }

    })