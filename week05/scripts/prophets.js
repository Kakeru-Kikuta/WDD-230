const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// const cards = document.querySelector('#cards');

// async function getProphetData(url) {
    // const response = await fetch(url);
    // const data = await response.json();
    // console.table(data.prophets);
    // displayProphets(data.prophets);
  // }
  
  // getProphetData();

function displayProphets (prophet) {
    
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement("p")
        let origin = document.createElement("p")

        fullName.textContent = prophet.name + ' ' + prophet.lastname;
        birthdate.textContent = `Date of birth: ${prophet.birthdate}`
        origin.textContent = `Place of birth: ${prophet.birthplace}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} `); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
            
        card.appendChild(fullName); 
        card.appendChild(birthdate);
        card.appendChild(origin);
        card.appendChild(portrait);
        document.querySelector('#cards').appendChild(card)
  }

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  console.log("testing")