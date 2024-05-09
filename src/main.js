// 컴퓨터가 입력한 값, 0~9까지 랜덤으로 3자리 수 생성
let numbers = generateRandomNumber()
// 사용자가 입력한 값
let answer = [];

function generateRandomNumber() {
    let randomNumbers = [];
    while (randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 10)
        if (!randomNumbers.includes(num))
            randomNumbers.push(num);
    }
    return randomNumbers;
}
console.log(numbers);

window.onload = function () {
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click', () => {
        answer = checkAnswer(answer);
        if (answer) {
            evaluateGuess(answer)
        }
    });
};

// 유효성 검사 및 값 저장
function checkAnswer(answer) {
    const userInput = document.getElementById('userInput').value
    if (userInput.length !== 3) {
        alert('3자리 수를 입력하세요.')
        return;
    }
    answer = userInput.split('').map(Number)
    if(hasDuplicates(answer)) {
      alert('중복된 숫자를 포함할 수 없습니다.')
      return;
    }
    return answer;
}

// 중복 제거
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length
}

// 게임 로직
let count = 0; // 횟수
function evaluateGuess() {
    if (count < 10) {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === answer[i]) {
                strike++;
            } else if (answer.includes(numbers[i])) {
                ball++;
            }
        }

        // 결과값 출력
        let resultMessage = '';
        if (strike === 3) {
            resultMessage = '🎉정답을 맞추셨습니다🎉'
        } else if (strike === 0 && ball === 0) {
            resultMessage = '낫싱';
            inputBox();
        } else {
            resultMessage = `${strike} 스트라이크 ${ball} 볼`
            inputBox();
        }
        printResult(resultMessage);
        count++;
    } else {
        resultMessage = '시도 횟수를 초과했습니다.'
        printResult(resultMessage);
    }
}

// 출력 메세지 함수
function printResult(resultMessage) {
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = resultMessage ? `<h4><span>&#128221;</span>결과<br><br>${resultMessage}</h4>` : ''

    //게임 재시작 안내 문구
    const restartMessage = document.createElement('div')
    restartMessage.textContent = '게임을 새로 시작하시겠습니까?'

    //restartButton 버튼
    const restartButton = document.createElement('button') // restartButton 정의
    restartButton.textContent = '게임 재시작'
    restartButton.id = 'restartButton'
    restartButton.style.display = resultMessage ? 'block' : 'none'
    
    //공백 요소 생성
    const space = document.createElement('div')
    space.textContent = '\xa0' 

    resultDiv.appendChild(restartMessage)
    resultDiv.appendChild(space)
    resultDiv.appendChild(restartButton)
}

// 텍스트 상자 초기화
function inputBox() {
    const inputBox = document.getElementById('userInput')
    inputBox.value = '';
    inputBox.focus(); // 입력 상자에 포커스를 맞춘다.
}
