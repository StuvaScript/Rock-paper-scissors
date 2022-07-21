
// This is the computer's random choice generator.

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
console.log(getComputerChoice());



// This is where the player chooses their weapon.

function getPlayerSelection() {
    let choice = prompt('Choose either rock, paper, or scissors');
    choice = choice.toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        return choice;
    } else {
        function wrongSelection() {
            alert('That\'s not an option');
            
        }
        wrongSelection();
    }
}
console.log(getPlayerSelection());

// Everything is good above this

function game() {

    const score = playRound();
    return score;

// This is the function to determine the round winner.

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors')  || 
       (playerSelection == 'paper' && computerSelection == 'rock') || 
       (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return 'win';
        //return win = alert(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
        } else if ((playerSelection == 'rock' && computerSelection == 'paper')  || 
        (playerSelection == 'paper' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return 'lose';
            //return lose = alert(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
       } else {
        return 'draw';
        //return alert('It\'s a draw!');
       }
}

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
}

console.log(game());














//console.log(playerSelection);
//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));


// This function is to tally up the total score.

//function tallyTotal(score) {
//
//    for (let i = 0; i < 5; i++) {
//        playerSelection;
//        playRound(playerSelection, computerSelection);
//        return 'Hey';
//    }
//}
//




