const input = document.querySelector("#num");
const numBtn = document.querySelector('.num--btn');
const restartText = document.querySelector('.restart');
const restartBtn = document.querySelector('#restart--btn');
const resultText = document.querySelector('.result');
const element = document.getElementById('result--print');
let strike = 0;
let ball = 0;
let numArr = [];
// let answer = [];

function chkResult(j, k) {
    if (answer[j] == numArr[k]) {
        if (j === k) {
            strike++;
        } else {
            ball++;
        }
    }
}


function chkError() {
    console.log('chkError.numArr : ' + numArr);
    console.log('chkError.input : ' + input.value);
    if(isNaN(input.value) || input.value == ''){
        alert('숫자를 입력하세요');
        return 1;
    } else if (numArr.length !==3){
        alert('3자리 숫자를 입력하세요');
        return 1;
    } else if (numArr[0] == numArr[1] | numArr[0] == numArr[2] | numArr[1] == numArr[2]){
        alert('중복 값은 입력할 수 없습니다');
        return 1;
    }
}

function restart() {
    resultText.style.display = 'none';
    element.style.display = 'none';
    restartText.style.display = 'none';
    restartBtn.style.display = 'none';
    for (let i = 0; i < 3; i++) {
        let select = Math.floor(Math.random() * list.length);
        answer[i] = list.splice(select, 1)[0];
    }
    //log
    console.log(answer);
}

// CHKANSWER
function chkAnswer() {
    console.log("chkAnswer" + answer);
    restartText.style.display = 'none';
    restartBtn.style.display = 'none';
    let num = input.value;
    numArr = num.split('');
    let err = chkError();
    strike = 0;
    ball = 0;
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            chkResult(j, k);
        }
    }

    if (strike === 3) {
        resultText.style.display = 'block';
        element.innerHTML = '🎉정답을 맞추셨습니다🎉';
        restartText.style.display = 'block';
        restartBtn.style.display = 'block';

    } else if (err !== 1) {
        resultText.style.display = 'block';
        element.innerHTML = strike + 'strike ' + ball + 'ball', 'blue';
    } 


}

function setResult() {
    const element = document.getElementById('result--print');
    element.innerHTML = '완료'
}

