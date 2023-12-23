const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;
let limit = 10;

  rock.addEventListener("click", () => {
    const result = playRound("rock", computerPlay());
    resultEl.textContent = result;
    Result (playerScore,computerScore);
  });
  paper.addEventListener("click", () => {
    const result = playRound("paper", computerPlay());
    resultEl.textContent = result;
    Result (playerScore,computerScore);
  });
  scissors.addEventListener("click", () => {
    const result = playRound("scissors", computerPlay());
    resultEl.textContent = result;
    Result (playerScore,computerScore);
  });


function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
    Result(playerScore,computerScore);
   
  
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
    Result(playerScore,computerScore);

  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}