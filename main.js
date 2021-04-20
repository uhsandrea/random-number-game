const rangeInput = document.querySelector(".js-rangeInput");
const maxRange = document.querySelector(".js-maxRange");
const guessNumberInput = document.querySelector(".js-guessNumber");
const playButton = document.querySelector("button");

const numbersDescription = document.querySelector(".js-numbersDescription");
const gameResult = document.querySelector(".js-gameResult");

let selectedRange = rangeInput.value;

function showRange(number) {
  maxRange.innerText = number;
}

function setRange() {
  selectedRange = rangeInput.value;
  showRange(selectedRange);
}

function handleRange() {
  rangeInput.addEventListener("input", setRange);
}

function genRandom() {
  const number = Math.floor(Math.random() * (parseInt(selectedRange) + 1));
  return number;
}

function compareNumbers() {
  const guessedNumber = guessNumberInput.value;
  const randomNumber = genRandom();
  if (guessedNumber === "") {
    numbersDescription.innerText = "Please choose a number.";
    gameResult.innerText = "";
  } else {
    if (parseInt(guessedNumber) === randomNumber) {
      numbersDescription.innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}.`;
      gameResult.innerText = "You won!";
    } else {
      numbersDescription.innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}.`;
      gameResult.innerText = "You lost!";
    }
  }
}

function playGame() {
  playButton.addEventListener("click", compareNumbers);
}

function init() {
  handleRange();
  playGame();
}

init();
