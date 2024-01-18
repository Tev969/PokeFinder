let goodFalse = document.querySelector(".text")
let pokeName = ""
let Answer = document.querySelector("#response");
let validate = document.querySelector(".tchek")
let score = 0;
let showScore = document.querySelector(".scoreCount")
function getPoke() {
  let random = randomInt(1, 151);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`).then((res) => {
    res.json().then((data) => {
      console.log(data.name);
      pokeName = data.name;
      let pokeImage = document.createElement("img");
      pokeImage.src = data.sprites.front_default;
      pokeImage.style.width = "205px";
      pokeImage.style.height = "185px";
      document.querySelector("#showPoke").appendChild(pokeImage);

    });
  });
}





function tchekWin(data) {
     if (Answer.value == data) {
          goodFalse.style.color = "green"
          goodFalse.textContent = "Bien joué"
         getPoke()
         document.querySelector("#showPoke").innerHTML = ""
         Answer.value = ""
         score ++
         showScore.innerHTML = `SCORE : ${score}`
         

     }
     else {
          goodFalse.style.color = "red"
          goodFalse.textContent = "Et non.."
          getPoke()
          document.querySelector("#showPoke").innerHTML = ""
          Answer.value = ""
     }
}

validate.addEventListener("click",()=>{
     tchekWin(pokeName)

})
getPoke();






function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
