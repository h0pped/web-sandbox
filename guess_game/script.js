'use strict'

let randomNumber = Math.floor(Math.random() * 19) + 1
let score = 20
let highscore = 0
const scoreSpan = document.querySelector('.score-span')
const highScoreSpan = document.querySelector('.highscore-span')
scoreSpan.textContent = score
highScoreSpan.textContent = highscore
const checkButton = document.querySelector('.check')
const guessInput = document.querySelector('.number-guess')
const number = document.querySelector('.number')
const msg = document.querySelector('.message')
const againbtn = document.querySelector('#again-btn')
console.log(randomNumber)
const checkNumber = () => {
  if (!guessInput.value) {
    msg.textContent = '🚫 No number!'
  } else {
    const num = parseInt(guessInput.value)

    if (num === randomNumber) {
      number.textContent = num
      msg.textContent = '🏆 YOU WIN!!! '
      checkButton.disabled = true
      if (highscore < score) {
        highscore = score
        highScoreSpan.textContent = highscore
      }

      document.querySelector('body').style.backgroundColor = '#32A956'
    } else {
      scoreSpan.textContent = --score
      if (score == 0) {
        msg.textContent = '😟 You lost the game'
        number.textContent = randomNumber
        checkButton.disabled = true
      } else {
        num > randomNumber
          ? (msg.textContent = '📉 Try Lower')
          : (msg.textContent = '📈 Try Higher')
      }
    }
  }
}
const again = () => {
  randomNumber = Math.floor(Math.random() * 19) + 1
  score = 20
  scoreSpan.textContent = score
  console.log(randomNumber)
  number.textContent = '?'
  checkButton.disabled = false
  msg.textContent = 'Start Guessing...'

  document.querySelector('body').style.backgroundColor = '#222'
}

checkButton.addEventListener('click', checkNumber)
againbtn.addEventListener('click', again)
