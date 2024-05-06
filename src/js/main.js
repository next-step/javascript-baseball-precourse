let randomNumbers;

const startBtn = document.querySelector('.btn--start');
// const restartBtn = document.querySelector('.btn--restart');
const answerInput = document.getElementById('input--answer');
const form = document.querySelector("form");
const answerBtn = document.querySelector('.btn--answer');
const gameStart = document.querySelector('.game-start');
const gameRestart = document.querySelector('.game-restart');
const resultEl = document.querySelector(".result--text");


startBtn.addEventListener('click', () =>{
    gameStart.classList.add('hide');
    // gameRestart.classList.remove('hide');
    randomNumbers = getRandomNumbers();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answerValue = answerInput.value;
    isValid(answerValue);
    event.target.reset();
});

function getRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function showResult(inputArray, randomNumbers){
    let strike = 0;
    let ball = 0;

    for(let i = 0; i < 3; i++){
      if(inputArray[i] === randomNumbers[i]){
        strike++;
      }else if(randomNumbers.includes(inputArray[i])){
        ball++;
      }
    }

    if(strike === 3){
        resultEl.textContent = " 🎉정답을 맞추셨습니다🎉";
    }else if(strike == 0 && ball == 0){
        resultEl.textContent = "닛싱";
    }else if(strike == 0){
        resultEl.textContent = `${ball} 볼`;
    }else if(ball == 0){
        resultEl.textContent = `${strike} 스트라이크`;
    }else{
        resultEl.textContent = `${strike} 스트라이크 , ${ball} 볼`;
    }
}

function isValid(input){
    const inputArray = Array.from(new Set(input.split('').map(Number)));
    if(inputArray.length === 3 && input.length === 3){
        showResult(inputArray,randomNumbers);
    }else{
        alert("잘못된 입력 형식입니다!");
    }
}


// restartBtn.addEventListener('click', function(){
//     gameStarted = true;
//     gameRestart.classList.add('hide');
//     gameStart.classList.remove('hide');
//     randomNumbers = getRandomNumbers();
// });