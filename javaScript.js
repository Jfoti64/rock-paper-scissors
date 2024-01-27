document.addEventListener('DOMContentLoaded', function() {

    let humanWins = 0;
    const totalRounds = 5;
    let currentRound = 0;

    const results = document.getElementById("results");
    const currentScore = document.getElementById("currentScore");

    const btnRock = document.getElementById("btnRock");
    btnRock.addEventListener("click", () => {
        playRound("ROCK", getComputerChoice());
    });

    const btnPaper = document.getElementById("btnPaper");
    btnPaper.addEventListener("click", () => {
        playRound("PAPER", getComputerChoice());
    });

    const btnScissors = document.getElementById("btnScissors");
    btnScissors.addEventListener("click", () => {
        playRound("SCISSORS", getComputerChoice());
    });

    
    // Play a round of rock paper scissors
    function playRound(playerSelection, computerSelection) {

        // If tie restart round
        if (playerSelection === computerSelection) {
            results.innerHTML = "Tie. Repeat.";
            return;
        }

        // Calculate and return the results
        if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            results.innerHTML = "Defeat! " + computerSelection + " beats " + playerSelection;
            humanWins += 0;
        }
        if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            results.innerHTML = "Victory! " + playerSelection + " beats " + computerSelection;
            humanWins += 1;
        }
        if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            results.innerHTML = "Victory! " + playerSelection + " beats " + computerSelection;
            humanWins += 1;
        }
        if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            results.innerHTML = "Defeat! " + computerSelection + " beats " + playerSelection;
            humanWins += 0;
        }
        if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            results.innerHTML = "Defeat! " + computerSelection + " beats " + playerSelection;
            humanWins += 0;
        }
        if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            results.innerHTML = "Victory! " + playerSelection + " beats " + computerSelection;
            humanWins += 1;
        }
        currentRound += 1;
        currentScore.innerHTML = "You: " + humanWins + ", opponent: " + Math.abs(humanWins - currentRound);

        if (currentRound === totalRounds) {
            if (humanWins > totalRounds / 2) {
                results.innerHTML = "WINNER! You won " + humanWins + " of "+ totalRounds;
            }
            if (humanWins < totalRounds / 2) {
                results.innerHTML = "LOSER! You won " + humanWins + " of "+ totalRounds;
            }
            // Disable buttons
            btnRock.disabled = true;
            btnPaper.disabled = true;
            btnScissors.disabled = true;
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

}); 