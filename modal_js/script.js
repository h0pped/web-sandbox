'use strict'

const btns = document.querySelectorAll('.btn')
const modal = document.querySelector('#modal')
const overlay = document.querySelector('.overlay')
const modalExit = document.querySelector('.exit-btn')

const modalBefore = document.querySelector('#modal::before')
btns.forEach((el) => {
  el.addEventListener('click', function () {
    toggleHidden()
  })
})

const toggleHidden = () => {
  modal.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
}

modalExit.addEventListener('click', function () {
  toggleHidden()
})
overlay.addEventListener('click', function () {
  toggleHidden()
})
document.addEventListener('keydown', function (e) {
  e.key === 'Escape' ? toggleHidden() : ''
})
