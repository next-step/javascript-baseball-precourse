var answer = '';
var count = 0;

setAnswer();

document.getElementById("form").onsubmit = function (event) {
    event.preventDefault();
    const value = document.getElementById("number").value;
    getValue(value);
}

function setAnswer() {
    while (answer.length < 3) {
        const randomNum = Math.floor(Math.random() * 10).toString();
        if (!answer.includes(randomNum)) answer += randomNum;
    }
    document.getElementById("result").innerHTML = '컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!';
    return answer;
}

function getValue(value) {
    count++;
    let s = 0, b = 0;
    value.split('').forEach((e, idx) => {
        if (answer.indexOf(e) === idx) s++;
        else if (answer.includes(e)) b++;
    });

    let resultStr = '';
    if (s === 3) {
        resultStr = `${count}번만에 맞히셨습니다.\n게임을 종료합니다.`;
        document.getElementById("result").innerHTML = resultStr;
    } else {
        resultStr = `${b}B${s}S`;
        document.getElementById("result").innerHTML = `${count}번째 시도 : ${resultStr}`;
    }
}
