let playerScore = 0;
let computerScore = 0;

let playGame = () => {
    let playGame = document.querySelector(".buttons");
    playGame.addEventListener("click", function playerSelection (event) {
        let playerChoice = "";
        if (event.target.nodeName === "BUTTON") {
            playerChoice = event.target.textContent;
            // console.log(playerChoice);
        };
    let getComputerChoice = () => {
        let computerChoice = Math.floor(Math.random() * 3) + 1; /* gets random number from number 1 to 3 */
        switch (computerChoice) {
            case 1:
                return "Rock";
                break;
            case 2:
                return "Paper";
                break;
            case 3:
                return "Scissors"
                break;
        }
    }
    // console.log(`getComputerChoice() = ${getComputerChoice()}`);
    // console.log(playerChoice)
    console.log(`player score = ${playerScore}`);
    console.log(`computer  score = ${computerScore}`);
    let text = document.querySelector(".status")
    let playerScoreCounter = document.querySelector(".playerScore");
    let computerScoreCounter = document.querySelector(".computerScore");
    function oneRound (computerChoice) {
        if (playerChoice === "Scissors ✂" && computerChoice == "Rock") {
            text.textContent = "You lose! Rock beats Scissors";
            computerScore+=1;
        } else if (playerChoice === "Scissors ✂" && computerChoice == "Paper") {
            text.textContent = "You win! Scissors beats Paper"
            playerScore++;
        } else if (playerChoice === "Rock 💎" && computerChoice == "Paper") {
            text.textContent = "You lose! Paper beats Rock";
            computerScore++;
        } else if (playerChoice === "Rock 💎" && computerChoice == "Scissors") {
            text.textContent = "You win! Rock beats Scissors"
            playerScore++;
        } else if (playerChoice === "Paper 🧻" && computerChoice == "Scissors") {
            text.textContent = "You lose! Scissors beats Paper";
            computerScore++;
        } else if (playerChoice === "Paper 🧻" && computerChoice == "Rock") {
            text.textContent = "You win! Paper beats Rock"
            playerScore++;
        } else {
            text.textContent = "Tie!"
        }
        playerScoreCounter.textContent = `${playerScore}`;
        computerScoreCounter.textContent = `${computerScore}`
    }
    ;
    if (playerScore == 5) {
        playGame.removeEventListener("click", playerSelection);
        text.textContent = "Congrajlashins! You win against computer 🖥! You Rock 🗿";
    } else if (computerScore == 5) {
        playGame.removeEventListener("click", playerSelection);
        text.textContent = "Oh noes, Mr. Computer 🖥 wins! Better luck next time! ";
    }
    oneRound(getComputerChoice());
    })
}

playGame();