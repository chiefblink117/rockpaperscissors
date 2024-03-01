// This is a simple JavaScript rock, paper, scissors game. Authored by: Diego MG

let playerScore = 0;
let computerScore = 0;

const scoreContainer = document.querySelector('#gameScore');
const scoreDisplay = document.createElement('p');
scoreDisplay.textContent = "Score: " + "Player " + playerScore + " Bot " + computerScore;
scoreContainer.appendChild(scoreDisplay);
// Add the score interface to the page
document.body.appendChild(scoreContainer);
// Create a container for the game interface
const gameContainer = document.querySelector('#Container');
// Add the game interface to the page
document.body.appendChild(gameContainer);

game();

// A function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  let randomVariable = "";
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      randomVariable = "Rock";
      break;
    case 1:
      randomVariable = "Paper";
      break;
    case 2:
      randomVariable = "Scissors";
      break;
  }
  return randomVariable;
}

// A function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
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

  let pSelection = '';
  let cSelection = '';
  
  // Create buttons
  const rockButton = document.createElement('button');
  rockButton.textContent = 'Rock';
  gameContainer.appendChild(rockButton);
  
  const paperButton = document.createElement('button');
  paperButton.textContent = 'Paper';
  gameContainer.appendChild(paperButton);

  const scissorsButton = document.createElement('button');
  scissorsButton.textContent = 'Scissors';
  gameContainer.appendChild(scissorsButton);

  // Create Display Elements
  const pSelectionDisplay = document.createElement('p');
  gameContainer.appendChild(pSelectionDisplay);
  
  const cSelectionDisplay = document.createElement('p');
  gameContainer.appendChild(cSelectionDisplay);

  const pResultDisplay = document.createElement('p');
  gameContainer.appendChild(pResultDisplay);

    // Add event listeners
    rockButton.addEventListener('click', () => {
      pSelection = 'Rock';
      cSelection = getComputerChoice();

      pSelectionDisplay.textContent = "Player has selected: " + pSelection;
      cSelectionDisplay.textContent = "Bot has selected: " + cSelection;
      pResultDisplay.textContent = playRound(pSelection, cSelection);
      scoreDisplay.textContent = "Score: " + "Player " + playerScore + " Bot " + computerScore;

      // Check for Winner
      if (playerScore >= 5) {
        declareWinner('Player');
      } else if (computerScore >= 5) {
        declareWinner('Bot'); 
      }
    });

    paperButton.addEventListener('click', () => {
      pSelection = 'Paper';
      cSelection = getComputerChoice();

      pSelectionDisplay.textContent = "Player has selected: " + pSelection;
      cSelectionDisplay.textContent = "Bot has selected: " + cSelection;
      pResultDisplay.textContent = playRound(pSelection, cSelection);
      scoreDisplay.textContent = "Score: " + "Player " + playerScore + " Bot " + computerScore;

      // Check for Winner
      if (playerScore >= 5) {
        declareWinner('Player');
      } else if (computerScore >= 5) {
        declareWinner('Bot'); 
      }
    });

    scissorsButton.addEventListener('click', () => {
      pSelection = 'Scissors';
      cSelection = getComputerChoice();

      pSelectionDisplay.textContent = "Player has selected: " + pSelection;
      cSelectionDisplay.textContent = "Bot has selected: " + cSelection;
      pResultDisplay.textContent = playRound(pSelection, cSelection);
      scoreDisplay.textContent = "Score: " + "Player " + playerScore + " Bot " + computerScore;

      // Check for Winner
      if (playerScore >= 5) {
        declareWinner('Player');
      } else if (computerScore >= 5) {
        declareWinner('Bot'); 
      }
     });
}

function declareWinner (winner) {

  const end = document.createElement('p');
  end.textContent = "Game Over";
  gameContainer.appendChild(end);

  const finalResult = document.createElement('p');
  finalResult.textContent = "Final score: " + "Player " + playerScore + " - " + " Bot " + computerScore + " | " + winner + " Wins!";
  gameContainer.appendChild(finalResult);
}