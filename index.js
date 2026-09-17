
// Function getComputerChoice

/* This function will randomly return rock, paper or scissors  */


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



function getHumanChoice() {

    let userChoice;
    

    userChoice = prompt("rock, paper, scissors...");

    return userChoice;
}

const humanChoice = getHumanChoice();
console.log(humanChoice);