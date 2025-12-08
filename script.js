const x = document.querySelector(".x")
const overlay = document.getElementById("overlay");


const planetName = document.getElementById("planetName");
const planetTitle = document.getElementById("planetTitle");
const planetInfo = document.getElementById("planetInfo");
const planetDetails = document.querySelector(".planet-details")




let planets = [];

//hämtar API-url och API-nyckeln
async function loadPlanets() {
 try {
  let resp = await fetch('https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': 'solaris-HipRojQEq5sRjt3s'}
})

let data = await resp.json();
planets = data.bodies;

console.log(data);
} catch (error) {
  console.error("Error:", error.message);
  
}
}


//funktion för att visa varje planet
function showPlanet(planetNameToShow) {
const planet = planets.find(p => p.name.toLowerCase() === planetNameToShow.toLowerCase());

if (!planet) {
  alert("Planet not found!");
  return;
}


//informationen som ska synas i overlayen
planetName.innerText = planet.name;
planetTitle.innerText = planet.latinName;
planetInfo.innerText = planet.desc;

document.getElementById("planetCircumference").innerHTML =
    `<strong>OMKRETS:</strong><br> ${planet.circumference} km`;

document.getElementById("planetDistance").innerHTML = 
  `<strong>KM FRÅN SOLEN:</strong><br> ${planet.distance} km`; 

document.getElementById("planetTempDay").innerHTML = 
  `<strong>MAX TEMPERATUR:</strong><br> ${planet.temp.day}°C`; 

document.getElementById("planetTempNight").innerHTML = 
  `<strong>MIN TEMPERATUR:</strong><br> ${planet.temp.night}°C<br><br>`; 

document.getElementById("planetMoons").innerHTML = 
  `<strong>MÅNAR:</strong><br> ${planet.moons.length}`;




overlay.classList.remove("hidden");
} 

//stänger overlayen
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
})

  
//Hämtar varje enskild planet när man klickar på en planet
document.querySelectorAll("[data-planet]").forEach(planetElement => {

  planetElement.addEventListener('click', () => {
    const planet = planetElement.dataset.planet; 
    console.log(planet);
    
    showPlanet(planet);
  });

});

//laddar om sidan och hämtar API på nytt
window.onload = loadPlanets();
