const requestURL = "https://trevorlamoglia.github.io/final/directory.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        const companies = jsonObject['companies'];

        for (let i = 0; i < companies.length; i++) {
            if (companies[i].name == 'ADNOC Group' || companies[i].name == 'Etihad Airways' || companies[i].name == 'Abu Dhabi Commercial Bank') {
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

                document.querySelector('div.column1').appendChild(card);
            }
        }
    });

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        const companies = jsonObject['companies'];

        for (let i = 0; i < companies.length; i++) {
            if (companies[i].name == 'Abu Dhabi Media' || companies[i].name == 'Etisalat' || companies[i].name == 'Aldar Properties') {
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

                document.querySelector('div.column2').appendChild(card);
            }
        }
    });

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.table(jsonObject);
        const companies = jsonObject['companies'];

        for (let i = 0; i < companies.length; i++) {
            if (companies[i].name == 'Abu Dhabi National Hotels') {
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

                document.querySelector('div.column3').appendChild(card);
            }
        }
    });

// Get the elements with class="column"
var elements = document.getElementsByClassName("column1");
var elements = document.getElementsByClassName("column2");
var elements = document.getElementsByClassName("column3");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}