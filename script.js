//Hämtar overlay-elementet som ska visas när man klickar på en planet
const overlay = document.getElementById("overlay");

//hämtar några element från overlayen där det kommer att fyllas i planetens information
const planetName = document.getElementById("planetName");
const planetTitle = document.getElementById("planetTitle");
const planetInfo = document.getElementById("planetInfo");
const planetDetails = document.querySelector(".planet-details")




let planets = []; //skapar tom array som senare kommer fyllas med alla planetdata från API:et

//hämtar API-nyckeln dynamiskt
async function getApiKey() {
  try {
    const resp = await fetch("https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/key");
    const data = await resp.json();

    return data.key; //sparar nyckeln
  } catch (error) {
    console.error("Error fetching API key:", error.message);
  }
}

//en funktion för att hämta data från API:et
async function loadPlanets() {
 try {
  const apiKey = await getApiKey(); //hämtar nyckeln först


// hämtar planetdata
  const resp = await fetch("https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies", {
    method: 'GET',
    headers: {'x-zocom': apiKey}
  });

  const data = await resp.json();
planets = data.bodies;

console.log(data);

} catch (error) {
  console.error("Error loading planets:", error.message);

} 
  
}


//funktion för att hämta varje planets data
function showPlanet(planetNameToShow) {
  //hitta planeten vars namn matchar det man klickar på (jämförs i lowercase för att undvika stora/små bokstavsproblem)
const planet = planets.find(p => p.name.toLowerCase() === planetNameToShow.toLowerCase());

if (!planet) {
  alert("Planet not found!"); //om ingen planet hittas så kommer en alert
  return;
}



//informationen som ska synas i overlayen som är hämtat från API:et 
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
  `<strong>MIN TEMPERATUR:</strong><br> ${planet.temp.night}°C`; 

document.getElementById("planetMoons").innerHTML = 
  `<strong>MÅNAR:</strong><br> ${planet.moons.length}`;


//visar overlayen
overlay.classList.remove("hidden");
} 

//stänger overlayen
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
})

  
//Hittar alla som har data-planet attributet och lägger till en klickhändelse på dem
document.querySelectorAll("[data-planet]").forEach(planetElement => {

  planetElement.addEventListener('click', () => {
    const planet = planetElement.dataset.planet; 
    console.log(planet);
    
    showPlanet(planet);
  });

});

//när hela sidan (HTML, CSS) har laddats klart, körs funktionen loadPlanets automatiskt
window.onload = loadPlanets();
