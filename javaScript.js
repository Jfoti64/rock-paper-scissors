// Simulate a best of 5 match
function game(rounds) {
    let humanWins = 0;
    for(let i = 0; i < rounds; i++) {
        // Get selection from player
        let playerSelection = null
        do {
        playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
        } while (playerSelection.toUpperCase() != "ROCK" && playerSelection.toUpperCase() != "PAPER" && playerSelection.toUpperCase() != "SCISSORS");

        // Get selection from computer
        const computerSelection = getComputerChoice();

        console.log(computerSelection);
        
        // Play round and track number of wins
        humanWins = humanWins + playRound(playerSelection, computerSelection);
    }
    // Output overall winner
    if (humanWins > rounds / 2) {
        console.log("WINNER! You won " + humanWins + " of "+ rounds);
    }
    if (humanWins < rounds / 2) {
        console.log("LOSER! You won " + humanWins + " of "+ rounds);
    }
}

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // If tie restart round
    while (playerSelection === computerSelection) {
         console.log("Tie. Repeat.");
         computerSelection = getComputerChoice();
         console.log(computerSelection);
         playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase();
    }

    // Calculate and return the results
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("Defeat! " + computerSelection + " beats " + playerSelection);
        return 0;
    }
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("Victory! " + playerSelection + " beats " + computerSelection);
        return 1;
    }
    if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("Victory! " + playerSelection + " beats " + computerSelection);
        return 1;
    }
    if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("Defeat! " + computerSelection + " beats " + playerSelection);
        return 0;
    }
    if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("Defeat! " + computerSelection + " beats " + playerSelection);
        return 0;
    }
    if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("Victory! " + playerSelection + " beats " + computerSelection);
        return 1;
    }
}

  // Randomly return rock, paper, or scissors
  function getComputerChoice() {
    let choice = null;
    let randNum = Math.floor(Math.random() * (4 - 1) + 1);
    switch (randNum) {
        case 1:
            choice = "ROCK";
            break;
        case 2:
            choice = "PAPER";
            break;
        case 3:
            choice = "SCISSORS";
            break;
    }
    return choice;
  }

// Play n number of games
game(5);


/** 

Pseudocode

SET playerSelection TO NULL

WHILE playerSelection IS NOT equal to rock, paper, or scissors
    SET playerSelection TO Get user input

SET randNum TO GET random number from 1 to 3

SWITCH (randNum) {
    case 1:
        SET computerSelection TO rock
    case 2:
        SET computerSelection TO paper
    case 3:
        SET computerSelection TO scissors
}

FUNCTION playRound(playerSelection, computerSelection){
    IF playerSelection === computerSelection repeat
    ELSE 
        IF playerSelection === rock AND computerSelection === paper RETURN victory
        IF playerSelection === rock AND computerSelection === scissors RETURN defeat
        IF playerSelection === paper AND computerSelection === rock RETURN victory
        IF playerSelection === paper AND computerSelection === scissors RETURN defeat
        IF playerSelection === scissors AND computerSelection === rock RETURN defeat
        IF playerSelection === scissors AND computerSelection === paper RETURN victory
}


**/ 