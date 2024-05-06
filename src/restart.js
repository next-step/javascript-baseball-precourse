import random from './random'

export default (numbers) => {
    //랜덤 숫자 리셋
    numbers.length = 0
    //랜덤 숫자 재생성
    random(numbers)
    //사용자 input 요소 지워짐
    document.querySelector('#userInput').value = ''; 
    let resultTextEl = document.querySelector('#resultText');
    resultTextEl.style.visibility = "hidden";
    let restartEls = document.querySelectorAll('.restart')
    restartEls.forEach(restartEl => {
        restartEl.style.display = 'none'
    })
}