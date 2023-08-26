let game = new Game();

window.addEventListener('load', () => {

    game.startBtn.addEventListener("click", () => game.start());

    game.dieButton.addEventListener("click", (e) => game.whichArticle(e));
    game.derButton.addEventListener("click", (e) => game.whichArticle(e))
    game.dasButton.addEventListener("click", (e) => game.whichArticle(e))
  })

 