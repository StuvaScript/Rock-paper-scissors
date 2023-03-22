// This is the click event and it wraps all functions

const btns = document.querySelectorAll(".weapon");
btns.forEach((weapon) =>
  weapon.addEventListener("click", (e) => {
    if (
      e.target.id != "rock" &&
      e.target.id != "paper" &&
      e.target.id != "scissors"
    ) {
      return;
    }

    if (playerScore == 5 || compScore == 5) {
      return;
    }
    // This is the computer's random choice generator

    function getComputerChoice(min, max) {
      min = 1;
      max = 3;
      let number = Math.floor(Math.random() * (max - min + 1)) + min;

      if (number === 1) {
        return "rock";
      } else if (number === 2) {
        return "paper";
      } else {
        return "scissors";
      }
    }

    // This is where the player chooses their weapon based off the click event

    function getPlayerSelection() {
      let choice = e.target.id; // <= click event listener
      if (choice == "rock" || choice == "paper" || choice == "scissors") {
        return choice;
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

    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();

    // This function keeps a running tally of each player's
    // points.

    function tally() {
      if (playRound(playerSelection, computerSelection) == "win") {
        playerScore++;
        return (roundWin.innerText = `You Win! ${
          playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        } beats ${
          computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
        }`);
      } else if (playRound(playerSelection, computerSelection) == "lose") {
        compScore++;
        return (roundWin.innerText = `You Lose! ${
          computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
        } beats ${
          playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        }`);
      } else if (playRound(playerSelection, computerSelection) == "draw") {
        return (roundWin.innerText = "It's a draw!");
      }
    }
    tally();

    // This part tells who the overall champion is.

    function findWinner() {
      if (playerScore == 5) {
        champ = "Congrats! You are the ultimate winner!!!";
        declareWinner();
      } else if (compScore == 5) {
        champ = "Sorry but you suck. Lolz";
        declareWinner();
      }
    }

    findWinner();

    const playerTotal = document.querySelector("#player");
    playerTotal.innerText = `${playerScore}`;

    const compTotal = document.querySelector("#computer");
    compTotal.innerText = `${compScore}`;
  })
);

const roundWin = document.querySelector("#roundWin");
roundWin.innerText = "";

let champ = "";

const container = document.querySelector(".container");
const br = document.createElement("br");
br.classList.add("newBreak");
const div = document.createElement("div");
div.classList.add("newDiv");

function declareWinner() {
  div.innerText = `${champ}`;
  container.appendChild(br);
  container.appendChild(div);
}

let playerScore = 0;
let compScore = 0;

const playerTotal = document.querySelector("#player");
playerTotal.innerText = `${playerScore}`;

const compTotal = document.querySelector("#computer");
compTotal.innerText = `${compScore}`;

const newGame = document.querySelector("#newGame");
newGame.addEventListener("click", reset);

function reset() {
  playerScore = 0;
  compScore = 0;
  compTotal.innerText = 0;
  playerTotal.innerText = 0;
  roundWin.innerText = "";
  if (!document.querySelector(".newBreak")) {
    return;
  }
  container.removeChild(br);
  container.removeChild(div);
}
