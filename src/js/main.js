const startBtn = document.querySelector('.btn--start');
const restartBtn = document.querySelector('.btn--restart');
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