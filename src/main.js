//컴퓨터가 입력한 값, 0~9까지 랜덤으로 3자리 수 생성
let numbers = generatedRandomNumber()

function generatedRandomNumber() {
    let randomNumbers = []
    while(randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if (!randomNumbers.includes(num))
            randomNumbers.push(num)
    }
    return randomNumbers
}

//사용자가 입력한 값
let answer;

window.onload = function() {
    const submitButton = document.getElementById('submitButton')
    submitButton.addEventListener('click,' , () => {
        answer = checkAnswer(answer)
        if(answer) {
            evaluateGuess(answer)
        }
    });
};

//유효성 검사
function checkAnswer(answer) {
    const userInput = document.getElementById('userInput').value
    if (userInput.length !== 3) {
        alert('3자리 수를 입력하세요.')
        return
    }
    answer = userInput.split('').map(numbers)
    if (hasDuplicates(answer)) {
        alert('중복된 숫자를 포함할 수 없습니다.')
        return;
    }
    return answer;
}

//중복 제거
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

