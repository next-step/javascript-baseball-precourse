const startBtn = document.querySelector('.btn--start');
const restartBtn = document.querySelector('.btn--restart');
const answerInput = document.getElementById('input--answer');
const answerBtn = document.querySelector('.btn--answer');
const gameStart = document.querySelector('.game-start');
const gameRestart = document.querySelector('.game-restart');


function getRandomNumbers() {
    let numbers = [];
    while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function isValid(input){
    let inputArray = Array.from(new Set(input.split('').map(Number)));
    if(inputArray.length === 3 && input.length === 3){
        showResult(input,randomNumbers);
    }else{
        alert("잘못된 입력 형식입니다!");
    }
}



function showResult(input, randomNumbers){

}



let randomNumbers;

startBtn.addEventListener('click', function(){
    gameStart.classList.add('hide');
    gameRestart.classList.remove('hide');
    randomNumbers = getRandomNumbers();
});


restartBtn.addEventListener('click', function(){
    gameRestart.classList.add('hide');
    gameStart.classList.remove('hide');
    randomNumbers = getRandomNumbers();
});

answerBtn.addEventListener('click', function() {
    const answerValue = answerInput.value;
    isValid(answerValue);
    gameRestart.classList.remove('hide');
    gameStart.classList.add('hide');
});