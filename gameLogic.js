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

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "scissors")
  ) {
    console.log("No winner. Try again");
  }
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    console.log("Player wins");
    humanScore += 1;
  }
  if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    console.log("Computer wins");
    computerScore += 1;
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(
      "The score is: Player: " + humanScore + " Computer: " + computerScore
    );
  }
  if (humanScore == 3) {
    console.log("Player wins");
  }
  if (computerScore == 3) {
    console.log("Computer wins");
  }
}

playGame();
