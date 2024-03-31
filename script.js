/* document.write("Connected in chinese voice 🔵🔴 - Check the console I mean."); */
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1; /* gets random number from number 1 to 3 */
    switch (choice) {
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

let getPlayerChoice = () => {
   let playerSelection = prompt("Select your Choice 😏 (Only type 'Rock', 'Paper', or 'Scissors' [case insensitive] though, as regex hasn't been implemented yet)");
   /* let playerSelection = "sCisSoRs" */ 
   let playerChoice = playerSelection.toLowerCase();
   let arr = playerChoice.split("");
   let firstWord = arr[0].toUpperCase();
   arr.splice(0, 1, firstWord); 
   return arr.join("");  /* returns player choice */
}
/*

let playRound = (playerSelection, computerSelection) => {
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors"
    } else  if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats Paper"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats Paper"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection == computerSelection) {
        return "Tie"
    } else {
        return "What did you even choose? (error)"
    }
}

*/ 
/* console.log(playRound(getPlayerChoice(), getComputerChoice())); */

let playGame = () => {
    let playerScore = 0, computerScore = 0;
    let i;
    let playRound = (playerSelection, computerSelection) => {
        if (playerSelection == "Scissors" && computerSelection == "Rock") {
             alert(`You lose! ${playerSelection} beats ${computerSelection}.`)
             computerScore++;
        } else  if (playerSelection == "Rock" && computerSelection == "Scissors") {
            alert(`You win! ${playerSelection} beats ${computerSelection}.`)
            playerScore++;
        } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
            alert(`You lose! ${playerSelection} beats ${computerSelection}.`)
            computerScore++
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            alert(`You win! ${playerSelection} beats ${computerSelection}.`)
            playerScore++;
        } else if (playerSelection == "Rock" && computerSelection == "Paper") {
            alert(`You lose! ${playerSelection} beats ${computerSelection}.`)
            computerScore++
        } else if (playerSelection == "Paper" && computerSelection == "Rock") {
            alert(`You win! ${playerSelection} beats ${computerSelection}.`)
            playerScore++;
        } else if (playerSelection == computerSelection) {
            alert("Tie")
            i--;
        } else {
            alert(`I thought we are supposed to play "Rock", "Paper", or "Scissors"? 😭`)
            i--;
        }
    }
    for (i = 1; i <= 10; i++) {
        if (playerScore !== 5 && computerScore !== 5) {
            playRound(getPlayerChoice(), getComputerChoice());
        } if (playerScore == 5 && computerScore < 5) {
            alert("You win!");
            break;
        } else if (computerScore == 5 && playerScore < 5) {
            alert("You lose....")
            break;
        }
        alert(`Current score: You ${playerScore} : CPU ${computerScore}`)
        console.log(playerScore)
        console.log(computerScore)
    }
}

console.log(playGame());