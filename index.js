
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

const ComputerChoice = getComputerChoice();
console.log(ComputerChoice);


// This function will prompt the user for their input
function getHumanChoice() {

    let userChoice;

    userChoice = prompt("rock, paper, scissors...").toLowerCase();

    return userChoice;
}

const humanChoice = getHumanChoice();
console.log(humanChoice);


let computerScore = 0;
let humanScore = 0;



function playRound(humanChoice, ComputerChoice) {

}