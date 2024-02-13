const select0 = "rock";
const select1 = "paper";
const select2 = "scissor";

let humanScore = 0;
let computerScore = 0;

let totalHuman = [];
localStorage.setItem("totalHuman", JSON.stringify(totalHuman));
let totalComputer = [];
localStorage.setItem("totalComputer", JSON.stringify(totalComputer));



const getPlayerChoice = function () {
 
    const str = prompt();
    return str.toLowerCase();
    
};
const playerSelection = getPlayerChoice();
console.log(playerSelection);


const getComputerChoice = function () {

    const selector = Math.trunc(Math.random() * 3) + 1;

  if (selector === 1) {
    return select0;
  } else if (selector === 2) {
    return select1;
  } else return select2;
};

const computerSelection = getComputerChoice();
console.log(computerSelection);


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


console.log(playRound(playerSelection, computerSelection));

const pointHuman = humanScore; 
const pointComputer = computerScore;  

const theCount = function(human, computer) {
   
    if(human === 1) {
        totalHuman.push(1)
     }if (computer === 1) {
         totalComputer.push(1);
     } 

     console.log(totalHuman);
     console.log(totalComputer);
    
    function theLoop () {
        while (human !== 5) {
            getPlayerChoice()
        }
     
    }
}
    
theCount(pointHuman, pointComputer)



    
    



