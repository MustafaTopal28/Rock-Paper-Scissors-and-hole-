const computerChoice = ["Rock", "Paper", "Scissor"];
let roundWinner = "";
let scorePlayer = 0;
let scoreBot = 0;

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorButton = document.getElementById("scissorButton");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorButton.addEventListener("click", () => playRound("Scissor"));

function playRound(playerSelection) {
  const botChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log("The player has chosen: ", playerSelection);
  console.log("The computer has chosen: ", botChoice);

  if (playerSelection === botChoice) {
    roundWinner = "The result of the game is a tie";
  } else if (
    (playerSelection === "Rock" && botChoice === "Scissor") ||
    (playerSelection === "Paper" && botChoice === "Rock") ||
    (playerSelection === "Scissor" && botChoice === "Paper")
  ) {
    scorePlayer++;
    roundWinner = "Player has won this set";
  } else {
    scoreBot++;
    roundWinner = "Bot has won this set";
  }

  displayResult(roundWinner);
  displayScore();
  checkWinner();
}

function displayResult(result) {
  // Effacer le texte précédent
  resultDiv.textContent = "";

  const resultParagraph = document.createElement("p");
  resultParagraph.textContent = result;
  resultDiv.appendChild(resultParagraph);
}

function displayScore() {
  const scoreParagraph = document.createElement("p");
  scoreParagraph.textContent = `User Score: ${scorePlayer}, Bot Score: ${scoreBot}`;
  scoreDiv.textContent = "";
  scoreDiv.appendChild(scoreParagraph);
}

function checkWinner() {
  if (scorePlayer === 5) {
    const winnerParagraph = document.createElement("p");
    winnerParagraph.textContent = "Player wins the game!";
    resultDiv.appendChild(winnerParagraph);
    disableButtons();
  } else if (scoreBot === 5) {
    const winnerParagraph = document.createElement("p");
    winnerParagraph.textContent = "Bot wins the game!";
    resultDiv.appendChild(winnerParagraph);
    disableButtons();
  }
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorButton.disabled = true;
}
