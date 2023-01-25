// let wordsArr = [
//   {word: "Bad", article: "das"},
//   {word: "Küche", article: "die"},
//   {word: "Floor", article: "der"},
//   {word: "Kartoffel", article: "die"},
//   {word: "Käse", article: "der"},
//   {word: "Buch", article: "das"},
//   {word: "Apfel", article: "der"},
//   {word: "Sofa", article: "das"},
//   {word: "Vase", article: "die"},
//   {word: "Vogel", article: "der"},
//   {word: "Hund", article: "das"},
//   {word: "Maus", article: "die"},
//   {word: "Regenschirm", article: "der"},
//   {word: "Kind", article: "das"},
//   {word: "Flasche", article: "die"},
//   {word: "Zug", article: "der"},
//   {word: "Bild", article: "das"},
//   {word: "Musik", article: "die"},
//   {word: "Hut", article: "der"},
//   {word: "Auto", article: "das"},
//   {word: "Tasse", article: "die"},
//   {word: "Tisch", article: "der"},
//   {word: "Haus", article: "das"},
//   {word: "Katze", article: "die"},
//   {word: "Stuhl", article: "der"},
//   {word: "Fenster", article: "das"},
//   {word: "Tür", article: "die"},
//   {word: "Baum", article: "der"},
//   {word: "Auto", article: "das"},
//   {word: "Lampe", article: "die"},
//   {word: "Computer", article: "der"},
//   {word: "Telefon", article: "das"},
//   {word: "Uhr", article: "die"},
//   {word: "Rose", article: "die"}
//   ]
  
// import {wordsArr} from './data.js';


const [wordsArr] = require("./data.js");
   


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
  // document.getElementById("buttons-container").getElementsByTagName("button").style.background="gray"
  document.getElementById("die-btn").style.background="#36382E";
  document.getElementById("der-btn").style.background="#36382E";
  document.getElementById("das-btn").style.background="#36382E";

}

//3rd check if article is das, die or der
//increase score, change the color of the button if the answer is right/wrong

function whichArticle(e) {
  let article = e.target.innerText
  randomArt = randomPair.article.toUpperCase()
  let targetBtn = e.target

  if (article === randomArt) {
      score +=10;
      targetBtn.style.background='green';
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

//add a function that ends the game when a certain score is reached

function endGame() {
  // const image = document.createElement("img")
  // image.src = "/assets/Daco_4062401.png"

  if (score >= 10) {
    document.getElementById("word-container").innerHTML = "You are now basically fluent in german!"
  }
  else if (score <= -10) {
    document.getElementById("word-container").innerHTML = "You lost";
    // document.getElementById("word-container").appendChild(image);
    }  


}


window.addEventListener('load', () => {

    const startBtn = document.querySelector(".start-btn");
    startBtn.addEventListener("click", displayWord);

    const dieButton = document.querySelector("#die-btn");
    dieButton.addEventListener("click", (e) => whichArticle(e));
    // .addEventListener("keypress", myScript);
    const derButton = document.querySelector("#der-btn");
    derButton.addEventListener("click", (e) => whichArticle(e))
    const dasButton = document.querySelector("#das-btn");
    dasButton.addEventListener("click", (e) => whichArticle(e))

  
    
  })