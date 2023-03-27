// ----- GLOBAL VARIABLES/DOM QUERIES -----

const display = document.querySelector("#display");
const playerTotal = document.querySelector("#player");
const compTotal = document.querySelector("#computer");
const newGame = document.querySelector("#new-game");
const weapons = document.querySelectorAll(".weapon");

let playerScore = 0;
let compScore = 0;

// ----- DISPLAYED DATA -----

display.innerText = "Choose your weapon!";
playerTotal.innerText = `${playerScore}`;
compTotal.innerText = `${compScore}`;

// ----- EVENT LISTENERS -----

// Game logic when you click the images
weapons.forEach((weapon) =>
  weapon.addEventListener("click", (e) => {
    if (playerScore == 5 || compScore == 5) {
      return;
    }

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);

    tally(round);

    displayWinner(round, playerSelection, computerSelection);

    playerTotal.innerText = `${playerScore}`;
    compTotal.innerText = `${compScore}`;
  })
);

// Resets game when clicking "New Game?" button
newGame.addEventListener("click", reset);

// ----- FUNCTIONS -----

function reset() {
  playerScore = 0;
  compScore = 0;
  compTotal.innerText = 0;
  playerTotal.innerText = 0;
  display.innerText = "Choose your weapon!";
}

// Computer's random choice generator
function getComputerChoice() {
  min = 1;
  max = 3;
  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  switch (number) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
  }
}

// Determines the round winner.
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return "win";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    return "lose";
  } else {
    return "draw";
  }
}

// Adds to each player's points
function tally(round) {
  if (round === "win") {
    playerScore++;
  } else if (round === "lose") {
    compScore++;
  }
}

// Displays the winner
function displayWinner(round, playerSelection, computerSelection) {
  if (playerScore === 5) {
    return (display.innerText = "Congrats! You rule!!!");
  } else if (compScore === 5) {
    return (display.innerText = "Sorry but you suck. Lolz");
  }

  switch (round) {
    case "win":
      return (display.innerText = `You Win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`);
      break;
    case "lose":
      return (display.innerText = `You Lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      }`);
      break;
    case "draw":
      return (display.innerText = "It's a draw!");
  }
}
