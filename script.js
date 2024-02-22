const playGame = function() {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  

  const cycle = function() {
    const btnRock = document.querySelector('.rock');
    const btnPaper = document.querySelector('.paper');
    const btnScissor = document.querySelector('.scissors');
    

    const playerOneOptions = [btnRock, btnPaper, btnScissor];
    const playerTwoOptions = ['rock', 'paper', 'scissors'];

    playerOneOptions.forEach(function(option) {
      
      option.addEventListener('click', function() {
        const random = Math.floor(Math.random() * playerTwoOptions.length);
        const playerTwoChoice = playerTwoOptions[random];
        console.log(option.textContent, playerTwoChoice)

        roundWinner(option.textContent, playerTwoChoice)
      })
    })
  }

  const roundWinner = function(human, comp) {
    
    const result = document.querySelector('.win');
    const pOneScore = document.querySelector('.p1');
    const pTwoScore = document.querySelector('.p2');

    human = human.toLowerCase();
    console.log(human, comp);
    comp = comp.toLowerCase();

    if (human === comp) {
      result.textContent = "DRAWZIES!!";
    } if (
      (human === 'rock' && comp === 'scissors') ||
      (human === 'paper' && comp === 'rock') ||
      (human === 'scissors' && comp === 'paper')
    ) {
      result.textContent = 'PLAYER ONE WINS!';
      playerOneScore++;
      pOneScore.textContent = playerOneScore;
    } else {
      result.textContent = 'PLAYER TWO WINS!';
      playerTwoScore++;
      pTwoScore.textContent = playerTwoScore;
    }
  
  }
  cycle()
}
playGame()