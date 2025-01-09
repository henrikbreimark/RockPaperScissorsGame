//Reurns a random sting of either "rock", "paper" or "scissors"
function getComputerChoice() {
  let computerChoice = ["scissors", "rock", "paper"];
  return computerChoice[Math.floor(Math.random() * 3)];
}
