let wordsArr = [
  {word: "Bad", article: "das"},
  {word: "Küche", article: "die"},
  {word: "Floor", article: "der"},
  {word: "Kartoffel", article: "die"},
  {word: "Käse", article: "der"}
]

let score = 0

//1st choose a random pair from the array
  
let randomPair = wordsArr[Math.floor(Math.random() * wordsArr.length)]

//2nd display only the word in the box

function displayWord(wordsArr) {
 
     document.querySelector("#word-container").innerText = randomPair.word

}

//3rd check if article is das, die or der
// hacer un array de articulos y comparar

// function updateScore() {

//   let displayedScore = document.querySelector(".score").value

//   displayedScore = score
  
//   return displayedScore
  
//   console.log(displayedScore)
 
//  }


function whichArticle(e) {
  
  if(e.target.innerText == "DIE" && randomPair.article === "die") {
    score += 10
    
} 
else if (e.target.innerText == "DER" && randomPair.article === "der") {
  score += 10
  
}
else if (e.target.innerText == "DAS" && randomPair.article === "das") {
  score += 10
  
}

document.querySelector(".score").innerHTML = score

console.log(score)
      
}







//4th if das/der/die return score += 100 && display "correct"

window.addEventListener('load', () => {

    const startBtn = document.querySelector("#start-btn");
    startBtn.addEventListener("click", displayWord);

    const dieButton = document.querySelector("#die-btn");
    dieButton.addEventListener("click", (e) => whichArticle(e));
    const derButton = document.querySelector("#der-btn");
    derButton.addEventListener("click", (e) => whichArticle(e))
    const dasButton = document.querySelector("#das-btn");
    dasButton.addEventListener("click", (e) => whichArticle(e))
  
    
  })