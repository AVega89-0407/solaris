const tellusBtn = document.getElementById("tellus")
const x = document.querySelector(".x")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

//funktion för att anropa overlay till en planet
const open = function () {
    modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

tellusBtn.addEventListener('click', open)

const close = function(){
   modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

x.addEventListener('click', close);
overlay.addEventListener('click', close)

// let resp = await fetch('https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies', {
//     method: 'GET',
// })
// console.log(resp);
