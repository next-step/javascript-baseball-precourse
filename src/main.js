import random from './random'
import comparison from './comparison'
import restart from './restart'
import error from './error'

let numbers = []

random(numbers)

//확인 버튼 눌렀을 시
const pushB = document.querySelector('#pushBtn')
pushB.addEventListener('click',() =>{
    let userinputElValue = document.querySelector('#userInput').value
    let trueFalse = error(userinputElValue)
    if(trueFalse){
        comparison(numbers, userinputElValue)
    }else{
        alert('다시 입력하십시오')
        document.querySelector('#userInput').value = '';
    }
    
})

//게임 재시작 버튼 눌렀을 시
const pushRestartBtn = document.querySelector('#restartBtn')
pushRestartBtn.addEventListener('click',() => restart(numbers))



