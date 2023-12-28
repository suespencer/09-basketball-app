let resultHome = 0;
let resultGuest = 0;

let scoreHOME = document.getElementById("score-home");
let scoreGUEST = document.getElementById("score-guest");

console.log(scoreHOME, scoreGUEST);

function addOneHome() {
  resultHome += 1;
  scoreHOME.innerText = resultHome;
}

function addTwoHome() {
  resultHome += 2;
  scoreHOME.innerText = resultHome;
}

function addThreeHome() {
  resultHome += 3;
  scoreHOME.innerText = resultHome;
}

function addOneGuest() {
  resultGuest += 1;
    scoreGUEST.innerText = resultGuest;
  }
  
  function addTwoGuest() {
    resultGuest += 2;
    scoreGUEST.innerText = resultGuest;
  }
  
  function addThreeGuest() {
    resultGuest += 3;
    scoreGUEST.innerText = resultGuest;
  }

  function setZero() {
    resultHome = 0
    resultGuest = 0
    scoreHOME.innerText = resultHome;
    scoreGUEST.innerText = resultGuest;

  }
