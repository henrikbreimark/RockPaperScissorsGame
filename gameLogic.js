let humanScore = 0;
let computerScore = 0;

//Reurns a random sting of either "rock", "paper" or "scissors"
function getComputerChoice() {
  let computerChoice = ["scissors", "rock", "paper"];
  return computerChoice[Math.floor(Math.random() * 3)];
}

//Asks for the players choice and returns in
function getHumanChoice() {
  //Will store players choice.
  let humanChoice;

  //Tells if the choice is a valid choice.
  let correctInput = false;

  //Loop that continues until the choice is correct. Otherwise it returns information that the choice aren't valid
  while (correctInput == false) {
    humanChoice = prompt("Rock, paper or scissors?").toLowerCase();
    if (
      humanChoice == "rock" ||
      humanChoice == "paper" ||
      humanChoice == "scissors"
    ) {
      correctInput = true;
    } else {
      console.log("Not a valid choice");
    }
  }
  return humanChoice;
}

//Checks the result of the players and computers choices.
//Calls for winning check at the end.
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
    gameDisplay.textContent = "No winner. Try again";
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    gameDisplay.textContent = "Player wins";
    humanScore += 1;
  }
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    gameDisplay.textContent = "Computer wins";
    computerScore += 1;
  }
  gameResults.textContent = displayScore();
  checkWinner();
}

//Fetches buttons from html.
const gameButtons = document.querySelectorAll(".gameButton");
//Single variable for each game button
const rockButton = gameButtons[0];
const paperButton = gameButtons[1];
const scissorsButton = gameButtons[2];

//Event listeners for game buttons
rockButton.addEventListener("click", getButtonChoice);
paperButton.addEventListener("click", getButtonChoice);
scissorsButton.addEventListener("click", getButtonChoice);

//Takes game button choice and plays round.
function getButtonChoice(e) {
  playRound(e.target.innerHTML.toLowerCase(), getComputerChoice());
}

//Display variable
const gameDisplay = document.querySelector("#gameDisplay");
const gameResults = document.querySelector("#gameResults");

//Function to check if someone win
function checkWinner() {
  if (humanScore == 3) {
    gameDisplay.textContent = "Player wins the game!";
    resetGame();
  }
  if (computerScore == 3) {
    gameDisplay.textContent = "Computer wins the game";
    resetGame();
  }
}

//Funtion that returns the current score as a string.
function displayScore() {
  return "Player: " + humanScore + "   Computer: " + computerScore;
}

//Resets the score count and score displayed.
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameResults.textContent = displayScore();
}
