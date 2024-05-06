let number;

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

checkBtn.addEventListener('click', function () {
    const answer = document.getElementById('answer').value
    if(!checkInput(answer)) {
        alert('1~9까지의 수를 중복없이 3개 입력해주세요.')
    }
    else {

    }
});

function checkInput(answer) {
    if (answer.length != 3)
        return false
    if (answer[0] == answer[1] || answer[1] == answer[2] || answer[2] == answer[0])
        return false
    return true
}