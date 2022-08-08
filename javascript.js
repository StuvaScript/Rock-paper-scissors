
// This is the click event and it wraps all functions

const btns = document.querySelectorAll('button');
btns.forEach(button => button.addEventListener('click', (e) => {
    // console.log(e.target.id + ' my clicky');

    if(e.target.id != 'rock' && e.target.id != 'paper' && e.target.id != 'scissors') {
        return;
    }

    if (playerScore == 2 || compScore == 2) {
        return;
    }
    // This is the computer's random choice generator

    function getComputerChoice(min, max) {
        min = 1;
        max = 3;
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (number === 1) {
            return 'rock';
        } else if (number === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }


    // This is where the player chooses their weapon based off the click event

    function getPlayerSelection() {
        let choice = e.target.id; // <= click event listener
        if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
            return choice;
        }
    }
        
    // This is the function to determine the round winner.

    function playRound(playerSelection, computerSelection) {
        if ((playerSelection == 'rock' && computerSelection == 'scissors')  || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return 'win';
            } else if ((playerSelection == 'rock' && computerSelection == 'paper')  || 
            (playerSelection == 'paper' && computerSelection == 'scissors') || 
            (playerSelection == 'scissors' && computerSelection == 'rock')) {
            return 'lose';
        } else if (playerSelection === computerSelection) {
            return 'draw';
        }
    }

    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerChoice();

    console.log(playerSelection + ' player');
    console.log(computerSelection + ' comp');
    console.log(playRound(playerSelection, computerSelection) + ' round');
    
    // This function keeps a running tally of each player's
    // points.


    function tally() {
        if (playRound(playerSelection, computerSelection) == 'win') {
            playerScore++;
            return roundWin.textContent = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
            // return win = alert(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
        } else if (playRound(playerSelection, computerSelection) == 'lose') {
            compScore++;
            return roundWin.textContent = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
            // return lose = alert(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
        } else if (playRound(playerSelection, computerSelection) == 'draw') {
            return roundWin.textContent = 'It\'s a draw!';
            // return alert('It\'s a draw!');
        }
    }
    tally();

    console.log(playerScore + ' player score');
    console.log(compScore + ' comp score');

    
    // This part tells who the overall champion is.
    function findWinner() {
        if (playerScore == 2) {
            champ = 'Win';
            declareWinner();
        } else if (compScore == 2) {
            champ = 'Lose';
            declareWinner();
        }
    }

    findWinner();

    const playerTotal = document.querySelector('#player');
    playerTotal.textContent = `${playerScore}`;

    const compTotal = document.querySelector('#computer');
    compTotal.textContent = `${compScore}`;
    

}));

const roundWin = document.querySelector('#roundWin');
roundWin.textContent = '';

let champ = '';

const body = document.querySelector('body');
const br = document.createElement('br');
br.classList.add('newBreak');
const div = document.createElement('div');
div.classList.add('newDiv');

function declareWinner() {
    div.textContent = `${champ}`;
    body.appendChild(br);
    body.appendChild(div);
}

let playerScore = 0;
let compScore = 0;


const playerTotal = document.querySelector('#player');
playerTotal.textContent = `${playerScore}`;

const compTotal = document.querySelector('#computer');
compTotal.textContent = `${compScore}`;

const newGame = document.querySelector('#newGame');
newGame.addEventListener('click', reset);

function reset() {
    playerScore = 0;
    compScore = 0;
    compTotal.textContent = 0;
    playerTotal.textContent = 0;
    roundWin.textContent = '';
    if (!document.querySelector('#newBreak')) {
        return;
    }
    body.removeChild(br);
    body.removeChild(div);
}
