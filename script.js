"use strict";

// random number between 0 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
setNumber("?");
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess && !guess !== 0) {
    displayMessage("😡 No number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    setBackgroundColor("#60b347");
    setScoreBoxWidth("30rem");
    setNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      setHighscore(score);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      setScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      setScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setNumber("?");
  setScore(20);
  setScoreBoxWidth("15rem");
  setBackgroundColor("#222");
  displayMessage("Start guessing...");
  setGuessValue("");
});

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setNumber(num) {
  document.querySelector(".number").textContent = num;
}

function setScore(num) {
  document.querySelector(".score").textContent = num;
}

function setBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function setScoreBoxWidth(width) {
  document.querySelector(".number").style.width = width;
}

function setHighscore(highscore) {
  document.querySelector(".highscore").textContent = highscore;
}

function setGuessValue(guess) {
  document.querySelector(".guess").value = guess;
}
