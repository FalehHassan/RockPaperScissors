
// Function getComputerChoice

// This function will randomly return rock, paper or scissors 
function getComputerChoice() {
    const randomNum = Math.floor(Math.random()*3) + 1; 

    let choice;

    if (randomNum == 1) {
        choice = "rock";
    }
    else if (randomNum == 2) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}





// This function will prompt the user for their input
function getHumanChoice() {

    let userChoice;

    userChoice = prompt("rock, paper, scissors...").toLowerCase();

    return userChoice;
}


// declaring two variabel to keep track of playes score.
let computerScore = 0;
let humanScore = 0;









function playGame() {

    const computerSelection = getComputerChoice();
    console.log(computerSelection);


    const humanSelection = getHumanChoice();
    console.log(humanSelection);

    // playround function with game logic to compare the computer input to the human input
    function playRound(humanChoice, computerChoice) {

        switch(true) {
            case (humanChoice === "rock" && computerChoice === "paper"):
                console.log("You lose! Paper beats Rock");
                computerScore++;
                break;
            case (humanChoice=== "rock" && computerChoice === "scissors"):
                console.log("You win! Rock beats Scissors");
                humanScore++;
                break;

            
            case (humanChoice === "paper" && computerChoice === "scissors"):
                console.log("You lose! Scissors beats Paper");
                computerScore++;
                break;
            case (humanChoice === "paper" && computerChoice === "rock"):
                console.log("You win! Paper beats Rock");
                humanScore++;
                break;

            
            case (humanChoice === "scissors" && computerChoice === "rock"):
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                break;
            case (humanChoice=== "scissors" && computerChoice === "paper"):
                console.log("You win! Scissors beats Paper");
                humanScore++;
                break;
                
            default:
                console.log("It is a tie round!");
        }
        
    }

    playRound(humanSelection, computerSelection);
}


playGame();
playGame();
playGame();
playGame();
playGame();


if (humanScore > computerScore) {
    console.log("you won");
}
else if (humanScore < computerScore) {
    console.log("you lost :(")
}
else {
    console.log("Tie game")
}