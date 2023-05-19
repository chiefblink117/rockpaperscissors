// This is a simple JavaScript rock, paper, scissors game. Authored by: Diego MG

let playerScore = 0;
let computerScore = 0;
game();

// A function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  let randomVariable = "";
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      randomVariable = "rock";
      break;
    case 1:
      randomVariable = "paper";
      break;
    case 2:
      randomVariable = "scissors";
      break;
  }
  return randomVariable;
}

// A function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
  let playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return ("You lose! Paper beats Rock.");
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return ("You win! Rock beats Scissors.");
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return ("You lose! Scissors beats Paper.");
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return ("You win! Paper beats Rock.");
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return ("You lose! Rock beats Scissors.");
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return ("You win! Scissors beats Paper.");
  }
  else if (playerSelection === computerSelection) {
    return ("Tie! Nobody wins nor loses.")
  }
  else {
    return ("Welp, this is awkward!");
  }
}

// A function that plays 5 rounds. It keeps score and reports a winner or loser at the end.
function game() {
  for (i=0; i < 5; i++) {
    const pSelection = String(prompt("Rock, Paper or Scissors?"));
    console.log("Player has selected: " + pSelection)

    const cSelection = getComputerChoice();
    console.log ("Bot has selected: " + cSelection);

    let playRoundResult = playRound(pSelection, cSelection);
    console.log(playRoundResult);
    console.log("Score: " + "Player " + playerScore + " Bot " + computerScore)
  }
  console.log("Game Over")
  if (playerScore === computerScore) {
    console.log ("Final score: " + "Player " + playerScore + " Bot " + computerScore + " | It is a tie!")
  } else if (playerScore > computerScore) {
    console.log ("Final score: " + "Player " + playerScore + " Bot " + computerScore + " | Player Wins!")
  } else {
    console.log ("Final score: " + "Player " + playerScore + " Bot " + computerScore + " | Bot Wins!")
  }
}