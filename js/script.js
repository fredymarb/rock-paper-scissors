let playerScore = 0;
let computerScore = 0;


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
        playerScore += 1;
        return "YOU WIN";
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") { 
        playerScore += 1;
        return "YOU WIN";
    } 
    else if (playerSelection === "paper" && computerSelection === "rock") { 
        playerScore += 1;
        return "YOU WIN";
    } 

    //User Lose outcomes
    else if(playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return "YOU LOSE";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") { 
        computerScore += 1;
        return "YOU LOSE";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") { 
        computerScore += 1;
        return "YOU LOSE";
    }

    //Tie outcomes 
    else  if(playerSelection === computerSelection){ 
        return "TIE";
    }
}

function game() {
    //This for loop runs forever (the INFINITY loop)
    for (let i = 0; i < Infinity; i++) {
        let getUserChoice = () => (prompt("Choose either rock paper or scissors", 'rock')).toLowerCase();
        
        let playerSelection = getUserChoice();
        let computerSelection = getComputerChoice();

        console.log(`Player: ${playerSelection}, computer: ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));

        // IMPORTANT CODE HERE 
        // This condition breaks the Infinity loop if either score counts to 5 first
        let roundsPerGame = 5;
        if (computerScore == roundsPerGame || playerScore == roundsPerGame) {break; } 
    }

    console.log(`computerScore: ${computerScore}, playerScore: ${playerScore}`);
}

game();
    



