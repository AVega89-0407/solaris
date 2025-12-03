const x = document.querySelector(".x")

const planetName = document.getElementById("planetName");
const planetTitle = document.getElementById("planetTitle");
const planetInfo = document.getElementById("planetInfo");
const planetDetails = document.querySelector(".planet-details")

planetDetails.style.display = 'none';


let planets = [];

//hämtar API-url och API-nyckeln
async function loadPlanets() {
 
  let resp = await fetch('https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': 'solaris-HipRojQEq5sRjt3s'}
})

let data = await resp.json();
planets = data.bodies;

console.log(data);
}

//funktion för att visa varje planet
function showPlanet(planetNameToShow) {
const planet = planets.find(p => p.name.toLowerCase() === planetNameToShow.toLowerCase());

if (!planet) {
  planetDetails.style.display = 'none';
  alert("Planet not found!");
  return;
}


//informationen som ska synas i overlayen
planetName.innerText = planet.name;
planetTitle.innerText = planet.latinName;
planetInfo.innerText = planet.desc;

planetDetails.style.display = 'block';
} 

//stänger overlayen
x.addEventListener('click', (e) => {
  e.preventDefault();
  planetDetails.style.display = 'none';
})
  
//Hämtar varje enskild planet när man klickar på en planet
document.querySelectorAll("[data-planet]").forEach(planetElement => {

  planetElement.addEventListener('click', () => {
    const planet = planetElement.dataset.planet;
    showPlanet(planet);
  });

});

//laddar om sidan och hämtar API på nytt
loadPlanets();
