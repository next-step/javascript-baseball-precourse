// 컴퓨터가 입력한 값, 0~9까지 랜덤으로 3자리 수 생성
let numbers = generateRandomNumber();

function generateRandomNumber() {
    let randomNumbers = [];
    while(randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if (!randomNumbers.includes(num))
            randomNumbers.push(num);
    }
    return randomNumbers;
}
console.log(numbers);

// 사용자가 입력한 값
let answer;

window.onload = function() {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', () => {
        answer = checkAnswer(answer);
        if(answer) {
            evaluateGuess(answer);
        }
    });
};

// 유효성 검사
function checkAnswer() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.length !== 3) {
        alert('3자리 수를 입력하세요.')
        return null
    }
    answer = userInput.split('').map(Number);
    if (hasDuplicates(answer)) {
        alert('중복된 숫자를 포함할 수 없습니다.');
        return null
    }
    return answer
}

// 중복 제거
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

//게임 로직
let count = 0 //횟수
function evaluateGuess() {
    const result = document.getElementById('result')

    if (count < 10) {
        let strike = 0
        let ball = 0

        for (let i = 0; i<numbers.length; i++) {
            if (numbers[i] === answer[i]) {
                strike ++;
            }else if (answer.includes(numbers[i])) {
                ball ++;
            }
        }

        //결과값 출력
        let resultMessage = '';
        if (strike === 3) {
            resultMessage = '🎉정답을 맞추셨습니다🎉'
            printResult(resultMessage)
        } else if (strike === 0 && ball === 0) {
            resultMessage = '낫싱'
            inputBox()
            printResult(resultMessage)
        } else {
            resultMessage = `${strike}스트라이크 ${ball}`
            inputBox();
            printResult(resultMessgae)
        }
        count ++
    }else {
        resultMessage = '시도 횟수를 초과했습니다.'
    }
}

//출력 메세지 함수
function printResult(resultMessage) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${resultMessage}`;
    const restartButton = document.getElementById('restartButton')
    restartButton.addEventListener('click',restartGame())
}

