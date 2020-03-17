const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (['Preston', 'Soda Springs', 'Fish Haven'].includes(towns[i].name)) {
                let card = document.createElement('section');
                let div = document.createElement('div');
                let h3 = document.createElement('h3');
                let motto = document.createElement('h6');
                let year = document.createElement('p');
                let population = document.createElement('p');
                let annrain = document.createElement('p');
                let image = document.createElement('img');

                h3.textContent = towns[i].name
                motto.textContent = towns[i].motto
                year.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                annrain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;


                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', "picture of " + h3.textContent);

                card.appendChild(div);
                div.appendChild(h3);
                div.appendChild(motto);
                div.appendChild(year);
                div.appendChild(population);
                div.appendChild(annrain);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });