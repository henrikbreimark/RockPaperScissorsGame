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

console.log(getHumanChoice());
