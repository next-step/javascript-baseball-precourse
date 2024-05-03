var answer = '';
let recordStr = '';
var count = 0;

document.getElementById("form").onsubmit = function (event) {
    event.preventDefault();
    const value = document.getElementById("number").value;
    getValue(value);
}

function checkValue(value) {
    if (value === null || value === '') {
        alert(`입력을 취소하셨습니다. 다시 시도해주세요.`);
        return false;
    } else if (value.length < 3) {
        alert(`3자리 수의 숫자만 입력해야 합니다.`);
        return false;
    } else if (value.length > 3) {
        alert(`입력한 값의 길이는 3을 넘을 수 없습니다.`);
        return false;
    }
    return true;
}

function getValue(value) {
    if (!checkValue(value)) return;
    count++;
    recordStr = recordStr + `${count}번째 : ${value}`;
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
        recordStr = `${recordStr} ${resultStr}<br>`
        document.getElementById("record").innerHTML = recordStr;
    }
}

function setAnswer() {
    while (answer.length < 3) {
        const randomNum = (Math.floor(Math.random() * 10) % 9 + 1).toString();
        if (!answer.includes(randomNum)) answer += randomNum;
    }
    document.getElementById("result").innerHTML = '컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!🎶';
    return answer;
}
function resetGame() {
    document.getElementById("number").value = '';
    document.getElementById("result").innerHTML = '';
    count = 0;
    answer = setAnswer();
}

document.getElementById("form").addEventListener('reset', resetGame);

// 게임 초기화 및 시작
resetGame();