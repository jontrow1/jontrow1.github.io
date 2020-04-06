const requestURL = "json/adventures.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const adventures = jsonObject['adventures'];

        for (let i = 0; i < adventures.length; i++) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let length = document.createElement('p');
            let skillLevel = document.createElement('p');
            let cost = document.createElement('p');
            let services = document.createElement('p');

            h3.textContent = adventures[i].name;
            length.textContent = "Time frame: " + adventures[i].time;
            skillLevel.textContent = "Skill level: " + adventures[i].skillLevel;
            cost.textContent = "Cost: " + adventures[i].cost;
            services.textContent = "Services: " + adventures[i].services;

            card.appendChild(h3);
            card.appendChild(length);
            card.appendChild(skillLevel);
            card.appendChild(cost);
            card.appendChild(services);

            document.querySelector('div.adventurecards').appendChild(card);
        }
});
