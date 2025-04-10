let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 10;
console.log(targetNumber);

const input = document.querySelector("input");
const guessButton = document.getElementById("guess-button");
const restartButton = document.getElementById("restart-button");
const message = document.querySelector(".message");
const errorMessage = document.querySelector(".error-message");
const scoreElement = document.querySelector(
  ".score-container span:first-child"
);

const history = document.querySelector(".history");
const attemptsElement = document.querySelector("#attempts");
function numberGuess() {
    errorMessage.textContent=""
  attempts++;
  if (input.value ==targetNumber) {
    return true;
  }

  if (!(input.value > 0 && input.value <= 100)) {
    errorMessage.textContent = "Please enter a number between 1 and 100!";
  } else if (input.value > targetNumber) {
    let histotyli = document.createElement("li");
    message.textContent = "📉 Too high!";
    histotyli.textContent = "You guessed " + input.value + "(Too high!)";
    history.appendChild(histotyli);
    score--;
  } else {
    let histotyli = document.createElement("li");
    message.textContent = " Too Low!";
    histotyli.textContent = "You guessed " + input.value + "(Too Low!)";
    history.appendChild(histotyli);
    score--;
  }
  input.value=""
  return false;
}
guessButton.addEventListener("click", function () {
  if (input.value) {
    if (attempts < 10) {
      let guess = numberGuess();
      if (!guess) {
        scoreElement.textContent = score;
        attemptsElement.textContent = attempts;
      }else{message.textContent="You guessed it,Congrats"}
    } else {
        
      message.textContent = "You have used all attempts";
    }
  }
})
restartButton.addEventListener("click",function(){
    score=0
    scoreElement.textContent=score
    attempts=10
    attemptsElement.textContent=attempts;
    history.replaceChildren()
    message.textContent="Start"
});
