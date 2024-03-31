document.write("Connected in chinese voice 🔵🔴 - Check the console I mean.");
let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3) + 1; /* gets random number from number 1 to 3 */
    console.log(choice);
}

let playerSelection = () => {
    let playerChoice = prompt("Select your Choice 😏 (Only type 'Rock', 'Paper', or 'Scissors' [case insensitive] though, as regex hasn't been implemented yet)");
    console.log(playerChoice.toLowerCase());
}

playerSelection();