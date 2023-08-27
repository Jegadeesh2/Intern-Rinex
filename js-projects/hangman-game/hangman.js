let messageElement = document.getElementById("message");
const words = [
  "apple",
  "banana",
  "cherry",
  "grape",
  "orange",
  "kiwi",
  "melon",
  "mango",
];
let wordToGuess = "";
let guessedLetters = [];
let attemptsLeft = 6;

function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  let displayed = "";
  for (const letter of wordToGuess) {
    if (guessedLetters.includes(letter)) {
      displayed += letter;
    } else {
      displayed += " _ ";
    }
  }
  return displayed;
}

function updateDisplay() {
  document.getElementById("word-display").textContent = displayWord();
  document.getElementById("attempts-left").textContent = attemptsLeft;
}

function checkWin() {
  if (displayWord() === wordToGuess) {
    messageElement.textContent = "Congratulations, You Won🎉";
    messageElement.style.color = "lightGreen";
    setTimeout(() => {
      alert("Do you want to play again");
      window.location.reload();
    }, 3000);
  }
}
function checkLoss() {
  if (attemptsLeft === 0) {
    messageElement.style.color = "red";
    messageElement.textContent =
      "Run out of attempts😔. The word was: " + wordToGuess;
    setTimeout(() => {
      alert("Do you want to Restart");
      window.location.reload();
    }, 3000);
  }
}

function guessLetter() {
  const guessInput = document.getElementById("guess-input");
  const guess = guessInput.value.toLowerCase();

  if (guess.length !== 1) {
    messageElement.style.color = "red";
    messageElement.textContent = "Please enter a single letter.";
    return;
  }

  if (guessedLetters.includes(guess)) {
    messageElement.style.color = "red";
    messageElement.textContent = "You already guessed that letter.";
    return;
  }

  guessedLetters.push(guess);

  if (wordToGuess.includes(guess)) {
    messageElement.style.color = "lightGreen";
    messageElement.textContent = "Correct guess!👍";
    updateDisplay();
    checkWin();
  } else {
    attemptsLeft--;
    messageElement.style.color = "red";
    messageElement.textContent =
      "Incorrect guess. Attempts left: " + attemptsLeft;
    updateDisplay();
    checkLoss();
  }

  guessInput.value = "";
  guessInput.focus();
}

document.getElementById("guess-button").addEventListener("click", guessLetter);
wordToGuess = chooseWord();
updateDisplay();
