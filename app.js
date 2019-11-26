var isGameOver;
var activePlayer;
var score, roundScore;
var diceDom = document.querySelector(".dice");
//togloom ehleh

document.querySelector(".btn-roll").addEventListener("click", () => {
  if (isGameOver != true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    if (diceNumber != 1) {
      roundScore += diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
      // toglogchNegOnoo.textContent += roundScore;
    } else {
      changePlayer();
      // if (activePlayer == 0) activePlayer = 1;
      // else activePlayer = 0;
    }
  }
});
function changePlayer() {
  document.getElementById("current-" + activePlayer).textContent = 0;
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}
document.querySelector(".btn-hold").addEventListener("click", () => {
  if (isGameOver != true) {
    score[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      isGameOver = true;
      document.getElementById("name-" + activePlayer).textContent = "WINNER";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      changePlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", () => {
  initGame();
});
function initGame() {
  isGameOver = false;
  document.getElementById("name-0").textContent = "PLAYER ";
  document.getElementById("name-1").textContent = "PLAYER ";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.add("active");

  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  diceDom.style.display = "none";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
}
initGame();
