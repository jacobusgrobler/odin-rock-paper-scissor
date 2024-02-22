const playGame = function() {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  const firstToFive = 5

  const cycle = function() {
    const btnRock = document.querySelector('.rock');
    const btnPaper = document.querySelector('.paper');
    const btnScissor = document.querySelector('.scissors');
    const machine = document.querySelector('.playertwooutput');
    

    const playerOneOptions = [btnRock, btnPaper, btnScissor];
    const playerTwoOptions = ['rock', 'paper', 'scissors'];

    playerOneOptions.forEach(function(option) {
      
      option.addEventListener('click', function() {
        const random = Math.floor(Math.random() * playerTwoOptions.length);
        const playerTwoChoice = playerTwoOptions[random];
        machine.textContent = playerTwoChoice;

        roundWinner(option.textContent, playerTwoChoice)
        if (playerOneScore === firstToFive || playerTwoScore === firstToFive){
        gameResult()
        }
        
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
      return result.textContent = "DRAWZIES!!";
    } if (
      (human === 'rock' && comp === 'scissors') ||
      (human === 'paper' && comp === 'rock') ||
      (human === 'scissors' && comp === 'paper')
    ) {
      result.textContent = 'PLAYER ONE WINS!';
      playerOneScore++;
      pOneScore.textContent = playerOneScore;
      return
    } else {
      result.textContent = 'PLAYER TWO WINS!';
      playerTwoScore++;
      pTwoScore.textContent = playerTwoScore;
    }
     
  }
  const gameResult = function(playerOneScore, playerTwoScore) {
    const gameOver = document.querySelector('.output-container');
    const playAgain = document.querySelector('.tryagain');
    const p2 = document.querySelector('.score');

    console.log(playerOneScore, playerTwoScore);
    if (playerOneScore > playerTwoScore && playerOneScore >= 5) {
      gameOver.style.fontSize = '70px';
      gameOver.style.verticalAlign = 'center';
      gameOver.style.paddingBottom = '70px';
      gameOver.textContent = "PLAYER ONE WINS";
      playAgain.style.opacity = "1"
    }else {
      gameOver.style.fontSize = '70px';
      gameOver.style.verticalAlign = 'center';
      gameOver.style.paddingBottom = '70px';
      gameOver.textContent = `PLAYER TWO WINS`;
      playAgain.style.opacity = "1"
    }
    playAgain.addEventListener('click', () => window.location.reload())
  }
  
  cycle()
}
playGame()