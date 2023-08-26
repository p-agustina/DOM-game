class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.loserPopup = document.getElementById("loser-popup");
    this.winnerPopup = document.getElementById("winner-popup");
    this.scoreDisplay = document.getElementById("score");
    this.word = document.getElementById("word-span");
    this.startBtn = document.getElementById("start-btn");
    this.emptySpan = document.getElementById("empty-span");
    this.dieButton = document.getElementById("die");
    this.derButton = document.getElementById("der");
    this.dasButton = document.getElementById("das");

    this.randomPair = {};
    this.score = 0;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.displayWord();
  }

  displayWord() {
    let arrCopie = [...wordsArr]
    this.randomPair = arrCopie[Math.floor(Math.random() * arrCopie.length)];
    this.word.innerText = this.randomPair.word;
  }

  whichArticle(e) {
    const clickedButton = e.target;
    const selectedArticle = clickedButton.innerText;
    const correctArticle = this.randomPair.article.toUpperCase();

    if (selectedArticle === correctArticle) {
        this.handleCorrectAnswer(clickedButton);
    } else {
        this.handleIncorrectAnswer(clickedButton);
    }

    this.updateScoreDisplay();
    this.endGame();
  }

  handleCorrectAnswer(button) {
    this.score += 10;
    button.style.backgroundColor = "green";
    button.innerHTML = "&#10004";
    this.emptySpan.innerHTML = this.randomPair.article;
    setTimeout(() => {
        this.reset();
        this.displayWord();
    }, 1500);
  }

  handleIncorrectAnswer(button) {
    this.score -= 10;
    button.style.backgroundColor = "red";
  }

  updateScoreDisplay() {
    this.scoreDisplay.innerHTML = this.score;
  }

  reset() {
    this.emptySpan.innerHTML = "_ _ _";
    this.word.innerHTML = " ";
    const buttons = [this.dieButton, this.derButton, this.dasButton];

    buttons.forEach(button => {
        button.style.cssText = "background-color: #36382E; color: white";
        button.innerText = button.id.toUpperCase();
    });
  }

  openWinnerPopup() {
    winnerPopup.classList.add("open-winner-popup");
    this.winnerPopup.style.display = "block";
  }
  openLoserPopup() {
    loserPopup.classList.add("open-loser-popup");
    this.loserPopup.style.display = "block";
  }

  closePopup() {
    window.location.href = "./index.html";
  }

  endGame() {
    if (this.score >= 100) {
      this.openWinnerPopup();
    } else if (this.score <= -100) {
      this.openLoserPopup();
    }
  }
}
