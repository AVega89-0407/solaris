const sunBtn = document.getElementById("sun")
const mercuryBtn = document.getElementById("mercury")
const venusBtn = document.getElementById("venus")
const tellusBtn = document.getElementById("tellus")
const marsBtn = document.getElementById("mars")
const jupiterBtn = document.getElementById("jupiter")
const saturnusBtn = document.getElementById("saturnus")
const uranusBtn = document.getElementById("uranus")
const neptunusBtn = document.getElementById("neptunus")
const x = document.querySelector(".x")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

//funktion för att anropa overlay till en planet
const open = function () {
    modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

sunBtn.addEventListener('click', open)
mercuryBtn.addEventListener('click', open)
venusBtn.addEventListener('click', open)
tellusBtn.addEventListener('click', open)
marsBtn.addEventListener('click', open)
jupiterBtn.addEventListener('click', open)
saturnusBtn.addEventListener('click', open)
uranusBtn.addEventListener('click', open)
neptunusBtn.addEventListener('click', open)

//funktion för att stänga ner overlayen
const close = function(){
   modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

x.addEventListener('click', close);
overlay.addEventListener('click', close)

