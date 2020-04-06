const requestURL = "json/testimonials.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const testimonials = jsonObject['testimonials'];

        for (let i = 0; i < testimonials.length; i++) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let h6 = document.createElement('h6');
            let content = document.createElement('p');
            let image = document.createElement('img');

            h3.textContent = testimonials[i].title;
            h6.textContent = testimonials[i].firstName + ' ' + testimonials[i].lastName;
            content.textContent = testimonials[i].text;
            

            image.setAttribute('src', testimonials[i].imageurl);
            image.setAttribute('alt', "picture of: " + h3.textContent + " by " + h6.textContent);
            card.setAttribute('class', "testimage");

            card.appendChild(h3);
            card.appendChild(h6);
            card.appendChild(content);
            card.appendChild(image);

            document.querySelector('div.testimonialcards').appendChild(card);
        }
});
