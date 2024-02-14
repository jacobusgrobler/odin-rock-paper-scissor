function playGame() {

    const getPlayerChoice = function () {
        const str = prompt();
        return str.toLowerCase();
      };
      let playerSelection = getPlayerChoice();

      const getComputerChoice = function () {
        const select0 = "rock";
        const select1 = "paper";
        const select2 = "scissor";
      
        const selector = Math.trunc(Math.random() * 3);
      
        if (selector === 1) {
          return select0;
        } else if (selector === 2) {
          return select1;
        } else return select2;
      };
      let computerSelection = getComputerChoice();


      let humanScore = 0;
      let computerScore = 0;
      console.log(humanScore, computerScore)
      
      function playRound(player, computer) {

    
        console.log(`Human is ${player},Computer is ${computer}`)

     if (player === computer) {
      return "Drawzies"
     }else if (
                (player === "rock" && computer === "scissors") ||
                (player === "scissors" && computer === "paper") ||
                (player === "paper" && computer === "rock")
              ) 
              {
                humanScore = humanScore +1;
      
     }else if (
                (player === "scissor" && computer === "rock") ||
                (player === "paper" && computer === "scissor") ||
                (player === "rock" && computer === "paper")
              )          
              {
                computerScore = computerScore +1;}
       
     console.log(humanScore, computerScore)
    }

    
    
    for (let i = 0; i <= 5; i++) {
       console.log(playRound(getPlayerChoice(), getComputerChoice()))
       //console.log(`Human is ${playerSelection},Computer is ${computerSelection}`)
    } 
    
    if (humanScore > computerScore) {
        console.log(`${humanScore} | ${computerScore} Suck it computer you lucked out` )
    } if (humanScore < computerScore) {
      console.log(`${computerScore} | ${humanScore} Suck it human you lucked out` )
    } else {console.log(`Drawzies`)}
    
   
}

  playGame()