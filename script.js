//What are we doing 
//Creating a game of rock paper scissor 
//who is playing
//person against computer

//How do we make the human play.
//As per instruction he has to input via the console
//we give him three choices he knows them already
//where will we put its choices
//we can link the user input to a variable 
const playerSelection = function () {
    return 'rock'
};
console.log(playerSelection())
//how will the human choose
//he will have to use his fingers and type.





const getComputerChoice = function () {
  //how will we let the computer play
  //How do we give it 3 options
  const select0 = "rock";
  const select1 = "paper";
  const select2 = "scissor";

  //The computer must make a random selection between three options
  const selector = Math.trunc(Math.random() * 3) + 1;

  //link the options to a number and let it randomly pick a number
  if (selector === 1) {
    return select0;
  } else if (selector === 2) {
    return select1;
  } else return select2;
};
//where will we put the computer's output
//place the computer selection in a variable
const computerSelection = getComputerChoice();
console.log(computerSelection);
