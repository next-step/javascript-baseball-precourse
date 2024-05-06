// 새 게임 시작
// 컴퓨터가 서로 다른 임의의 수 3개를 선택한다.
function startGame() {
    let nums = [];
    while (nums.length < 3) {
        let newDigit = Math.floor(Math.random() * 9) + 1;
        if (!nums.includes(newDigit)) {
            nums.push(newDigit);
        }
    }
    return nums
}

function checkNumber(inputDigits) {
    let strikes = 0, balls = 0;

    inputDigits.forEach((digit, i) => {
        if (digit === answer[i]) {
            strikes++;
        } else if (answer.includes(digit)) {
            balls++;
        }
    });

    let resultMessage = document.createElement('div');
    if (strikes === 0 && balls === 0) {
        resultMessage.textContent = "낫싱";
    } else if (strikes === 3) {
        const h3El = document.createElement('h3');
        const spanEl = document.createElement('span');
        const brEl = document.createElement('br');
        const buttonEl = document.createElement('button');
        h3El.textContent = "🎉정답을 맞추셨습니다🎉";
        spanEl.textContent = "게임을 새로 시작하시겠습니까?";
        buttonEl.textContent = "게임 재시작";
        buttonEl.addEventListener("click", restartGame);
        resultMessage.appendChild(h3El);
        resultMessage.appendChild(spanEl);
        resultMessage.appendChild(brEl);
        resultMessage.appendChild(buttonEl);
    } else {
        resultMessage.textContent = `${strikes} 스트라이크, ${balls} 볼`;
    }

    return resultMessage
}

function play(input) {
    let inputDigits = Array.from(new Set(input.split('').map(Number)));  // 중복 제거, 문자열을 숫자로 변환

    if (inputDigits.length !== 3 || inputDigits.some(digit => digit < 1 || digit > 9)) {
        document.querySelector(".noti").innerHTML = "1부터 9까지의 서로 다른 숫자 세 개를 입력해주세요.";
        return;
    }

    let resultMessage = checkNumber(inputDigits);
    document.querySelector(".result").appendChild(resultMessage);

}

function restartGame() {
    document.querySelector(".noti").innerHTML = "";
    document.querySelector(".result").innerHTML = "";
    answer = startGame()
    console.log(answer)
}


let answer = startGame()
console.log(answer)

document.querySelector(".input__button").addEventListener("click", (e) => {
    document.querySelector(".noti").innerHTML = "";
    document.querySelector(".result").innerHTML = "";
    let inputnums = document.querySelector(".input__text").value;
    play(inputnums);

    document.querySelector(".input__text").value = "";
})
document.querySelector(".restart").addEventListener("click", (e) => {
    restartGame();
})