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
    if(playerSelection === "rock" && computerSelection === "scissors") { 
        return "You win this round!";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") { 
        return "You win this round!";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") { 
        return "You win this round!";
    } 

    //User Lose outcomes
    else if(playerSelection === "rock" && computerSelection === "paper") { 
        return "You lose this round!";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") { 
        return "You lose this round!";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") { 
        return "You lose this round!";
    }

    //Tie outcomes 
    else  if(playerSelection === computerSelection){ 
        return "It's a tie!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let getUserChoice = () => (prompt("Choose either rock paper or scissors", 'rock')).toLowerCase();
        
        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();

        console.log(`Player: ${playerSelection}, computer: ${computerSelection}`);
        // console.log(`Computer value is: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

}

game();
    



