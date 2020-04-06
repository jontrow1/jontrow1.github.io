const requestURL = "json/guides.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const guides = jsonObject['guides'];

        for (let i = 0; i < guides.length; i++) {
            let card = document.createElement('section');            
            let div = document.createElement('div');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let years = document.createElement('p');
            let email = document.createElement('p');
            let bio = document.createElement('p');
            let image = document.createElement('img');

            h3.textContent = guides[i].name;
            h4.textContent = guides[i].certLevel;
            years.textContent = guides[i].yearsExp;
            email.textContent = guides[i].email;
            bio.textContent = guides[i].bio;
            

            image.setAttribute('src', guides[i].selfie);
            image.setAttribute('alt', "picture of: " + h3.textContent + " by Savannah Trowbridge");
            card.setAttribute('class', "image");

            card.appendChild(div);
            div.appendChild(h3);
            div.appendChild(h4);
            div.appendChild(years);
            div.appendChild(email);
            div.appendChild(bio);
            card.appendChild(image);

            document.querySelector('div.guidecards').appendChild(card);
        }
});
