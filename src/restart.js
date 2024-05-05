import random from './random'

// let numbers = []
export default (numbers) => {
    numbers.length = 0
    random(numbers);
    document.querySelector('#userInput').value = ''; // 입력 필드 초기화
    let resultTextEl = document.querySelector('#resultText');
    resultTextEl.style.visibility = "hidden";
    let restartEls = document.querySelectorAll('.restart')
    restartEls.forEach(restartEl => {
        restartEl.style.display = 'none'
    })   
    console.log(numbers)
}