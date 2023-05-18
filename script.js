// This is a simple JavaScript rock, paper, scissors game. Authored by: Diego MG

const pSelection = String(prompt("Rock, Paper or Scissors?"));
console.log("Player has selected: " + pSelection)

const cSelection = getComputerChoice();

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
console.log ("Bot has selected: " + cSelection);

// Write a function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
  let lowercasePlayerSelection = playerSelection.toLowerCase();
  if (lowercasePlayerSelection === "rock" && computerSelection === "paper") {
    return ("You lose! Paper beats Rock.");
  }
  else if (lowercasePlayerSelection === "rock" && computerSelection === "scissors") {
    return ("You win! Rock beats Scissors.");
  }
  else if (lowercasePlayerSelection === "paper" && computerSelection === "scissors") {
    return ("You lose! Scissors beats Paper.");
  }
  else if (lowercasePlayerSelection === "paper" && computerSelection === "rock") {
    return ("You win! Paper beats Rock.");
  }
  else if (lowercasePlayerSelection === "scissors" && computerSelection === "rock") {
    return ("You lose! Rock beats Scissors.");
  }
  else if (lowercasePlayerSelection === "scissors" && computerSelection === "paper") {
    return ("You win! Scissors beats Paper.");
  }
  else if (lowercasePlayerSelection === computerSelection) {
    return ("Tie! Nobody wins nor loses.")
  }
  else {
    return ("Welp, this is awkward!");
  }
}

let playRoundResult = playRound(pSelection, cSelection);
console.log(playRoundResult);

function game() {

}