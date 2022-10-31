const computerChoice = ["ROCK", "PAPER", "SCISSOR"];
const userMove = process.argv[2];
let roundWinner = "";
let scorePlayer = 0;
let scoreBot = 0;


const gamePlay = (playerMove) => {
  var botChoice =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  if (playerMove === botChoice) {
    roundWinner = 'tie';
    return roundWinner
  }
  if 
    (playerMove === "ROCK" && botChoice === "SCISSOR") {
        scorePlayer++
        roundWinner = 'player'
    } else {
        scoreBot++
        roundWinner = 'bot'
        
    }
    return roundWinner
    
};


console.log(gamePlay(userMove));
// 1 = pierre
// 2 = papier
// 3 = ciseaux
// var beating = {1:3,2:1,3:2}
