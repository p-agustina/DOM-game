let wordsArr = [
    {word: "Bad", article: "das"},
    {word: "Küche", article: "die"},
    {word: "Floor", article: "der"},
    {word: "Kartoffel", article: "die"},
    {word: "Käse", article: "der"}
  ]
  
  let score = 0
  let randomPair = {}
  
  //1st choose a random pair from the array
    
  
  //2nd display only the word in the box
  
  function displayWord() {
      randomPair =  wordsArr[Math.floor(Math.random() * wordsArr.length)];
      document.querySelector("#word-span").innerText = randomPair.word;
  
  }
  
  //3rd check if article is das, die or der
  // hacer un array de articulos y comparar
 

  function whichArticle(e) {
    let article = e.target.innerText
    randomArt = randomPair.article.toUpperCase()
    let targetBtn = e.target

    if (article === randomArt) {
        score +=10;
        targetBtn.style.background='green';
        document.getElementById("empty-span").innerHTML = randomPair.article;
        setTimeout(displayWord, 3000);
    }
    else {
        score -= 10;
        targetBtn.style.background='red';
        
    }
    document.querySelector(".score").innerHTML = score;
}

function restar
   
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

    const flashcard = document.querySelector(".flashcard");

flashcard.addEventListener("click", function() {
  flashcard.classList.toggle("flip");
});
