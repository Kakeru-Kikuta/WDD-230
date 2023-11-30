const baceurl = "https://Kakeru-Kikuta.github.io/wdd230/";
const linksurl = "https://Kakeru-Kikuta.github.io/wdd230/data/links.json";

// async function getLinks() {
//     const response = await fetch(linksurl);
//     const data =await response.json();
//     displayLinks(data);
// }

function displayLinks(weeks) {
    let menu = document.createElement("allmenu")
    let aweek = document.createElement("w");
    let contents = document.createElement("content")

    contents.setAttribute("li", weeks.week);
    contents.setAttribute("href", weeks.url);
    contents.setAttribute("a", weeks.title);

    aweek.textContent = weeks.week;
    ref.textContent = weeks.url;
    tag.textContent = weeks.title;

    menu.appendChild(aweek);
    
    document.querySelector(".submenu").appendChild(menu)
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