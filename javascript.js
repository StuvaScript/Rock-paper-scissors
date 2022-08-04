
// This is the click event

const btns = document.querySelectorAll('button');
btns.forEach(button => button.addEventListener('click', (e) => {
    console.log(e.target.id + ' my clicky');




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



// This looping function encases the single round function and
// plays multiple games. Then it tallies the total score and 
// declares who the winner is.

// function game() {
    
    

//     for (let i = 0; i < 5; i++) {
//         console.log(i);
            
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
                return win = alert(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`);
            } else if (playRound(playerSelection, computerSelection) == 'lose') {
                compScore++;
                return lose = alert(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`);
            } else if (playRound(playerSelection, computerSelection) == 'draw') {
                return alert('It\'s a draw!');
            }
        }
        tally();

        console.log(playerScore + ' player score');
        console.log(compScore + ' comp score');
//     }

//     // This part tells who the overall champion is.

    if (playerScore == 5 && compScore != 5) {
        reset();
        return alert('You are the ultimate winner!!');
    } else if (compScore == 5 && playerScore != 5) {
        reset();
        return alert('Sorry but you\'re a loser');
    }

    function reset() {
        playerScore = 0;
        compScore = 0;
    }
// }   



// game();



}));

let playerScore = 0;
let compScore = 0;
