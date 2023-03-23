const weapons = document.querySelectorAll(".weapon");
weapons.forEach((weapon) =>
  weapon.addEventListener("click", (e) => {
    if (playerScore == 5 || compScore == 5) {
      return;
    }

    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection);

    tally(round, playerSelection, computerSelection);

    findWinner();

    playerTotal.innerText = `${playerScore}`;
    compTotal.innerText = `${compScore}`;
  })
);

const display = document.querySelector("#display");
display.innerText = "Choose your weapon!";

let champ = "";

const container = document.querySelector(".container");
const br = document.createElement("br");
br.classList.add("newBreak");
const div = document.createElement("div");
div.classList.add("newDiv");

let playerScore = 0;
let compScore = 0;

const playerTotal = document.querySelector("#player");
playerTotal.innerText = `${playerScore}`;

const compTotal = document.querySelector("#computer");
compTotal.innerText = `${compScore}`;

const newGame = document.querySelector("#new-game");
newGame.addEventListener("click", reset);

function reset() {
  playerScore = 0;
  compScore = 0;
  compTotal.innerText = 0;
  playerTotal.innerText = 0;
  display.innerText = "Choose your weapon!";
}

// This is the computer's random choice generator

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

// This is the function to determine the round winner.

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
  } else if (playerSelection === computerSelection) {
    return "draw";
  }
}

// This function keeps a running tally of each player's
// points.

function tally(round, playerSelection, computerSelection) {
  switch (round) {
    case "win":
      playerScore++;
      return (display.innerText = `You Win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`);
      break;
    case "lose":
      compScore++;
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

// This part tells who the overall champion is.  // This part tells who the overall champion is.

function findWinner() {
  if (playerScore == 5) {
    champ = "Congrats! You rule!!!";
    display.innerText = `${champ}`;
  } else if (compScore == 5) {
    champ = "Sorry but you suck. Lolz";
    display.innerText = `${champ}`;
  }
}
