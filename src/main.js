let number;
let strike;
let ball;

setNumber()

function setNumber() {
    let a, b, c
    
    a = rand()
    do {
        b = rand()
    } while (b == a)
    do {
        c = rand()
    } while (c == a || c == b)

    number = a * 100 + b * 10 + c
}

function rand() {
    return Math.floor(Math.random() * 9) + 1
}

const checkBtn = document.getElementById('check-btn')
const restart = document.querySelector('.restart')
const restartBtn = document.getElementById('restart-btn')
const resultPrint = document.querySelector('.result-print')

checkBtn.addEventListener('click', function () {
    const answer = document.getElementById('answer').value
    if(!checkInput(answer)) {
        alert('1~9까지의 수를 중복없이 3개 입력해주세요.')
    }
    else {
        markAnswer(answer)

        resultPrint.style.display = 'block'
        const result = document.getElementById('result')

        if(strike == 3) {
            result.textContent = "🎉정답을 맞추셨습니다🎉"
            restart.style.display = 'block'
        }
        else {
            let content = ""

            if(ball != 0)
                content += ball+"볼 "
            if(strike != 0)
                content += strike+"스트라이크"
            if(ball == 0 && strike == 0)
                content = "낫싱"
            result.textContent = content
        }
    }
});

function checkInput(answer) {
    if (answer.length != 3)
        return false
    if (answer[0] == answer[1] || answer[1] == answer[2] || answer[2] == answer[0])
        return false
    return true
}

function markAnswer(answer) {
    const number_digit = number.toString()
    strike = 0
    ball = 0

    for(let i=0; i<3; i+=1) {
        if(number_digit[i] == answer[i])
            strike += 1
        else if(number_digit.includes(answer[i]))
            ball += 1
    }
}

restartBtn.addEventListener('click', function () {
    restart.style.display = 'none'
    resultPrint.style.display = 'none'
    document.getElementById('answer').value = ''
    setNumber()
});