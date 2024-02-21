

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissor = document.querySelector('.scissors')

const random = function () {
  const select0 = "rock";
  const select1 = "paper";
  const select2 = "scissor";

  const selector = Math.trunc(Math.random() * 3);

  if (selector === 1) {
    return select0;
  } else if (selector === 2) {
    return select1;
  } else return select2;
}

btnRock.addEventListener('click', function() {
  const playerOneRock = btnRock.textContent.trim().toLocaleLowerCase();
  console.log(playerOneRock)

const getComputerChoice = function () {
  return random();
}
let cmpSelect =  getComputerChoice()
console.log(cmpSelect)

})

btnPaper.addEventListener('click', function() {
  const playerOnePaper = btnPaper.textContent.trim().toLocaleLowerCase();
  console.log(playerOnePaper)

  const getComputerChoice = function () {
    return random()
  }
  let cmpSelect =  getComputerChoice()
  console.log(cmpSelect)
})

btnScissor.addEventListener('click', function() {
  const playerOneScissor = btnScissor.textContent.trim().toLocaleLowerCase();
  console.log(playerOneScissor)

  const getComputerChoice = function () {
    return random()
  }
  let cmpSelect =  getComputerChoice()
  console.log(cmpSelect)
})


