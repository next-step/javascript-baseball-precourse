const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', generateNumber)

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