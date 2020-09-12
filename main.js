var randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let button = document.getElementById("guessButton");
var check = 10; // số  lượt đoán
var arr = []; // array of past guesses
var reload = 5;

function reloadGame() {
  setInterval(() => {
    document.getElementById("reload").innerHTML = `Play again after ${reload} seconds ...`;
    if (reload === 0) location.reload();
    reload--;
  }, 1000);
}

button.addEventListener("click", () => {
  let userGuess = document.getElementById("number").value;
  userGuess = parseInt(userGuess);
  if (userGuess === randomNumber) {
    check--;
    document.getElementById("message").innerHTML = `<h3 id="correctAnswer"> Congratulations! You guessed correctly. You took ${10 - check} tries to guess the answer.<h3>`;
    document.getElementById("guessButton").disabled = true;
    document.getElementById("number").disabled = true;
    document.getElementById("alert").innerHTML = `<h4> YOU WIN</h4>`;
    reloadGame();
  } else if (check > 0 && !isNaN(userGuess)) {
    arr.push(userGuess);
    document.getElementById("pastGuesses").innerHTML = `<h4>Your past guesses: ${arr.join(", ")}</h4>`;
    check--;
    if (userGuess > randomNumber) {
      document.getElementById("message").innerHTML = `<h3 id="wrongAnswer"> Sorry your guess is too high, guess lower. You have ${check} guesses left <h3>`;
    } else {
      document.getElementById("message").innerHTML = `<h3 id="wrongAnswer"> Sorry your guess is too low, guess higher. You have ${check} guesses left <h3>`;
    }
    if (check === 0) {
      document.getElementById("alert").innerHTML = `<h4> YOU LOSE</h4>`;
      document.getElementById("guessButton").disabled = true;
      document.getElementById("number").disabled = true;
      reloadGame();
    }
  }
});