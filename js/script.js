let playerScore = 0;
let computerScore = 0;
let playerSelection;
const playerScoreCount = document.querySelector('#player-score');
const computerScoreCount = document.querySelector('#computer-score');
const result = document.querySelector('.result');

const btnContainer = document.querySelector('.btn-container');
const buttons = btnContainer.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        let computerSelection = getComputerChoice();

        result.textContent = playRound(playerSelection, computerSelection);
        game();
        
        playerScoreCount.textContent = playerScore;
        computerScoreCount.textContent = computerScore;
    });
});


function getComputerChoice() {
    //Returns a random whole number between 1 and 3
    let computerChoice = Math.floor((Math.random() * 3) + 1);

    //Based on that random number returned assign it either rock, paper or scissors
    switch (computerChoice) {
        case 1:
            return "rock";
            
        case 2:
            return "paper";
                
        case 3: 
            return "scissors";
    }
}
        
        
function playRound(playerSelection, computerSelection) {
    // User win outcomes 
    let logMessage;
    if(playerSelection === "rock" && computerSelection === "scissors") { 
        playerScore += 1;
        logMessage = "YOU WIN. Rock beats Scissors";
        return logMessage;
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") { 
        playerScore += 1;
        logMessage = "YOU WIN. Scissors beats Paper";
        return logMessage;
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") { 
        playerScore += 1;
        logMessage = "YOU WIN. Paper beats Rock";
        return logMessage;
    } 
    
    //User Lose outcomes
    else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        logMessage = "YOU LOSE. Paper beats Rock";
        return logMessage;
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") { 
        computerScore += 1;
        logMessage = "YOU LOSE. Rock beats Scissors";
        return logMessage;
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") { 
        computerScore += 1;
        logMessage = "YOU LOSE. Scissors beats Paper";
        return logMessage;
    }
    
    //Tie outcomes 
    else  if(playerSelection === computerSelection){ 
        logMessage = "IT'S A TIE";
        return logMessage;
    }  
}

function game() {

    if (playerScore != 5 && computerScore != 5){
        return;
    } else if (playerScore == 5) {
        console.log("you won 5 games");
        return btnContainer.textContent = "YOU WON 5 GAMES FIRST, YAY!";
    } else if (computerScore == 5) {
        return btnContainer.textContent = "YOU LOSE, COMPUTER GOT TO 5 FIRST";
    }
}