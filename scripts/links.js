const baceurl = "https://Kakeru-Kikuta.github.io/wdd230/";
const linksurl = "https://Kakeru-Kikuta.github.io/wdd230/data/links.json";

function displayLinks(weeks) {

    weeks.forEach(function(weeks) {

        let section = document.querySelector('.submenu');

        let w = weeks.week;
        let l = weeks.links.url;
        let t = weeks.links.title;

        let code = '<ul class="submenu">' + 
        '<li>' + w +
        '<a href="'+l+'">' + t + '</a>' +
        '</li>'

        section.insertAdjacentHTML('beforeend', code);
    });
    
}

fetch(linksurl)
.then(function (response) {
    return response.json();
}) 
.then(function (jsonObject) {
    console.table(jsonObject);
    const weeks = jsonObject["weeks"];
    weeks.forEach(displayLinks);
})