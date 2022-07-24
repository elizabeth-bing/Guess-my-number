'use strict'

// console.log(document.querySelector('.message').textContent); //Selection of text within an element (class selected by the '.', id would be by '#')
// //expected output, shows "start guessing"

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); //Selection of text within an element (class selected by the '.', id would be by '#')
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

//define random number between 1-20
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!'

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!'
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too Low!'
      score--
      document.querySelector('.score').textContent = score
    } else {
      document.querySelector('.message').textContent = 'You lost the game :('
      document.querySelector('.score').textContent = 0
    }
  }
})
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '' //value of input is now empty
  document.querySelector('body').style.backgroundColor = '#222'

  document.querySelector('.number').style.width = '15rem'
})
