const computerChoice = ["Rock", "Paper", "Scissor"];
const userMove = process.argv[2];
let roundWinner = "";
let scorePlayer = 0;
let scoreBot = 0;

console.log("The player has chosen: ", userMove);

const gamePlay = (playerMove) => {
  var botChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log("The computer has chosen: ", botChoice);

  if (playerMove === botChoice) {
    roundWinner = 'The result of the game is a tie';
    return roundWinner;
  } else if (playerMove === "Rock" && botChoice === "Scissor") {
    scorePlayer++;
    roundWinner = 'Player has won this set';
  } else if (playerMove === "Paper" && botChoice === "Rock") {
    scorePlayer++;
    roundWinner = 'Player has won this set';
  } else {
    scoreBot++;
    roundWinner = 'Bot has won this set';
  }
  
  return roundWinner;
};

console.log(gamePlay(userMove));
console.log("This is the user's score: ", scorePlayer, "and this is the bot's score: ", scoreBot);
