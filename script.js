

let planets = [];

// const button = document.getElementById("info").addEventListener("click", 
// 
async function loadPlanets() {

  let resp = await fetch('https://corsproxy.io/?https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies', {
    method: 'GET',
    headers: {'x-zocom': 'solaris-HipRojQEq5sRjt3s'}
})
let data = await resp.json();
planets = data.bodies;
console.log(planets);
}

const sunBtn = document.getElementById("0")
const mercuryBtn = document.getElementById("1")
const venusBtn = document.getElementById("2")
const tellusBtn = document.getElementById("3")
const marsBtn = document.getElementById("4")
const jupiterBtn = document.getElementById("5")
const saturnusBtn = document.getElementById("6")
const uranusBtn = document.getElementById("7")
const neptunusBtn = document.getElementById("8")
const x = document.querySelector(".x")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

//funktion för att anropa overlay till en planet
function open(e) {
  const planetName = e.target.dataset.planet;
    if (!planetName) return;

  const planet = planets.find(p => p.name.toLowerCase() === planetName);
    if (!planet) return;
    
  document.getElementById("planetName").innerText = planet.name;
  document.getElementById("planetRubrik").innerText = planet.latinName;
  document.getElementById("planetInfo").innerText = planet.desc;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

// sunBtn.addEventListener('click', open)
// mercuryBtn.addEventListener('click', open)
// venusBtn.addEventListener('click', open)
// tellusBtn.addEventListener('click', open)
// marsBtn.addEventListener('click', open)
// jupiterBtn.addEventListener('click', open)
// saturnusBtn.addEventListener('click', open)
// uranusBtn.addEventListener('click', open)
// neptunusBtn.addEventListener('click', open)

document.addEventListener('click', open);
loadPlanets();

//funktion för att stänga ner overlayen



x.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});


