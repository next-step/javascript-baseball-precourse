import random from './random'
import comparison from './comparison'

let numbers = []

random(numbers)
console.log(numbers)

const pushB = document.querySelector('#pushBtn')
pushB.addEventListener('click',() =>{
    let userinputEl = document.querySelector('#userInput').value
    comparison(numbers, userinputEl)
})



