const requestURL = "https://trevorlamoglia.github.io/final/directory.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        const companies = jsonObject['companies'];

        for (let i = 0; i < companies.length; i++) {
            let card = document.createElement('div');
            let h2 = document.createElement('h2');
            let industry = document.createElement('p');
            let hq = document.createElement('p');
            let founded = document.createElement('p');
            let contact = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = companies[i].name;
            industry.textContent = "Industry: " + companies[i].industry;
            hq.textContent = "Headquarters: " + companies[i].headquarters;
            founded.textContent = "Founded: " + companies[i].founded;
            contact.textContent = "Contact number: +" + companies[i].contact;
            image.setAttribute('src', 'images/' + companies[i].photo);
            image.setAttribute('alt', companies[i].name + ' logo');

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(industry);
            card.appendChild(hq);
            card.appendChild(founded);
            card.appendChild(contact);

            document.querySelector('div.cards').appendChild(card);
        }

    })