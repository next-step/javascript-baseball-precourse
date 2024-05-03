const inputEl = document.getElementById('user-input')
const submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', getUserInput)

function generateNumber() {
    let answer = ''
    while (answer.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1
        if (!answer.includes(randomNumber)) {
            answer += randomNumber
        }
    }
    return answer
}

function getUserInput() {
    let inputValue = inputEl.value
    checkStrikeAndBall(inputValue)
}

function checkStrikeAndBall(inputValue) {
    let userNumber = inputValue
    let computerNumber = generateNumber()
    let strike = 0
    let ball = 0

    for (let i = 0; i < 3; i++) {
        if (userNumber[i] === computerNumber[i]) {
            strike += 1
        }
        else if (computerNumber.indexOf(userNumber[i]) !== -1) {
            ball += 1
        }
    }
    console.log(userNumber)
    console.log(computerNumber)
    console.log("ball", ball)
    console.log("strike", strike)
}

