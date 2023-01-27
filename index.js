let score = 0
let randomPair = {}

//1st choose a random pair from the array and display only the word in the box

function displayWord() {
    randomPair =  wordsArr[Math.floor(Math.random() * wordsArr.length)];
    document.querySelector("#word-span").innerText = randomPair.word;

}

//write a function to reset the word container and the buttons after guessing correctly

function reset() {
  document.getElementById("empty-span").innerHTML = "_ _ _";
  document.getElementById("word-span").innerHTML = " ";
  document.getElementById("die-btn").style.background="#36382E";
  document.getElementById("der-btn").style.background="#36382E";
  document.getElementById("das-btn").style.background="#36382E";
  document.getElementById("die-btn").style.color="white";
  document.getElementById("der-btn").style.color="white";
  document.getElementById("das-btn").style.color="white";
  document.getElementById("die-btn").innerText = "DIE"
  document.getElementById("der-btn").innerText = "DER"
  document.getElementById("das-btn").innerText = "DAS"

}

//3rd check if article is das, die or der
//increase score, change the color of the button if the answer is right/wrong

function whichArticle(e) {
  let article = e.target.innerText
  randomArt = randomPair.article.toUpperCase()
  let targetBtn = e.target

  if (article === randomArt) {
      score += 10;
      targetBtn.style.background='green';
      targetBtn.innerHTML = "&#10004"
      document.getElementById("empty-span").innerHTML = randomPair.article;
      setTimeout(reset, 1500);
      setTimeout(displayWord, 1500);
  }
  else {
      score -= 10;
      targetBtn.style.background='red';    
  }
  document.querySelector(".score").innerHTML = score;
  endGame()
}

//add function for message when winning/losing

let loserPopup = document.querySelector("#loser-popup");
let winnerPopup = document.querySelector("#winner-popup");

  function openWinnerPopup() {
    winnerPopup.classList.add("open-winner-popup");
    document.querySelector("#winner-popup").style.display = "block";
  }
  function openLoserPopup() {
  loserPopup.classList.add("open-loser-popup");
  document.querySelector("#loser-popup").style.display = "block";
}

function closePopup() {
  window.location.href = "./index.html"
}

//add a function that ends the game when a certain score is reached

function endGame() {
  
  if (score >= 100) {
    openWinnerPopup()    
  }
  else if (score <= -100) {
    openLoserPopup()     
    }
}


window.addEventListener('load', () => {

    const startBtn = document.querySelector(".start-btn");
    startBtn.addEventListener("click", displayWord);

    const dieButton = document.querySelector("#die-btn");
    dieButton.addEventListener("click", (e) => whichArticle(e));
    const derButton = document.querySelector("#der-btn");
    derButton.addEventListener("click", (e) => whichArticle(e))
    const dasButton = document.querySelector("#das-btn");
    dasButton.addEventListener("click", (e) => whichArticle(e))
    
  })

 