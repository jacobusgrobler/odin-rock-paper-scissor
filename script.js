//What are we doing 
//Creating a game of rock paper scissor 
//who is playing
//person against computer

//How do we make the human play.
//As per instruction he has to input via the console
//we give him three choices 
//he knows them already
//where will we put its choices
//he will manually type it in as a parameter as per instructions

const getPlayerChoice = function () {
    
    const str = prompt()
    return str.toLowerCase();
    
};

const playerSelection = getPlayerChoice();
console.log(playerSelection);







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
const computerTurn = getComputerChoice()
console.log(computerSelection);

//how will we make the human and the computer play together
//we will have to compare their output 
//how will we compare there output
//we will have to compare the values of the variables that we created with the original functions 
//they each have three options how will we cater for a win a loss and a draw
//how many variable results do we have 
//rock vs scissor = rock
//rock vs paper = paper
//scissor vs paper = scissor
//samesies = draw
//lets use the human input as the first operand and work around that
let humanScore = 0;
let computerScore = 0;

function playRound (playerChoice, computerChoice) {
    
    if (playerChoice === computerChoice) {
        return( `You Made Drawzies`);
    } else if (playerChoice === 'rock' && computerChoice === 'scissor') {
        return (`Human Wins! Computer Sucks`), humanScore++;   
    } else if (playerChoice === 'scissor' && computerChoice === 'paper') {
        return(`Human Wins! Computer Sucks`), humanScore++;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return(`Human Wins! Computer Sucks`), humanScore++;
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        return(`Computer Wins! Human Sucks`), computerScore++;
    } else if (playerChoice === 'paper' && computerChoice === 'scissor') {
        return(`Computer Wins! Human Sucks`), computerScore++;
    } else if (playerChoice === 'scissor' && computerChoice === 'rock') {
        return( `Computer Wins! Human Sucks`), computerScore++;
    }   
    
    
}

console.log(playRound(playerSelection, computerSelection))

const pointHuman = humanScore; 
console.log(typeof pointHuman, pointHuman)
const pointComputer = computerScore;  
console.log(typeof pointComputer, pointComputer)



const theCount = function(human, computer) {
   let totalHuman = [];
   let totalComputer = [];
   if(human === 1) {
       totalHuman.push(1)
    }else if (computer === 1) {
        totalComputer.push(1);
    }
    console.log(totalHuman);
    console.log(totalComputer);
    getPlayerChoice()
}
theCount(pointHuman, pointComputer)




//how do we create a counter for the game to get an ultimate winner
//we will have to put the count somewhere.
//then we will have to accumulate the counter
//we can only accumulate the counter with comparing the if operation results and attaching an action to that result

