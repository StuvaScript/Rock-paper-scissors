
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


// This looping function encases the single round function and
// plays multiple games.

function game() {
    
    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(i);
            
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
            } else if (playerSelection === computerSelection) {
                return 'draw';
                //return alert('It\'s a draw!');
            }
        }

        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();

        console.log(playerSelection + ' player');
        console.log(computerSelection + ' comp');
        console.log(playRound(playerSelection, computerSelection) + ' round');
        
        function tally() {
            if (playRound(playerSelection, computerSelection) == 'win') {
                playerScore++;
            } else if (playRound(playerSelection, computerSelection) == 'lose') {
                compScore++;
            }
        }
        tally();

        console.log(playerScore + ' player score');
        console.log(compScore + ' comp score');
    }

    if (playerScore > compScore) {
        return alert('Winner!');
    } else if (playerScore < compScore) {
        return alert('Sorry you loser');
    } else {
        return alert('Draw!');
    }


}   


//const outcome = playRound(playerSelection, computerSelection);


// function game() {
    
//     let playerScore = 0;
//     let compScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         playRound();
//         if (playRound() == 'win') {
//             playerScore += 1;
//         } else if (playRound() == 'lose') {
//             compScore += 1;
//         }
//     getComputerChoice();
//     getPlayerSelection();
        
//     }

//     if (playerScore > compScore) {
//         return 'Winner!';
//     } else if ( playerScore < compScore) {
//         return 'You lose';
//     } else {
//         return 'Draw!';
//     }


// }


console.log(game());









