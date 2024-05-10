import randomNum from "./\brandomNum";

let comValue = randomNum();
console.log(comValue);

export default function playGame() {

    const userInput = document.getElementById('user-input').value;

    let strike = 0;
    let ball = 0;

    const userInputArray = Array.from(userInput.toString()).map(Number);
    const resultDiv = document.getElementById('result');

    for (let i = 0; i < userInputArray.length; i++) {
        if (comValue.includes(userInputArray[i]) && userInputArray[i] !== comValue[i]) {
            ball++;
        }
    }

    for (let i = 0; i < comValue.length; i++) {
        if (userInputArray[i] === comValue[i]) {
            strike++;
        }
    }

    if (strike === 3) {
        resultDiv.innerHTML = `<strong>정답을 맞추셨습니다!</strong><br><br>게임을 새로 시작하시겠습니까?<br><br>`;
        const restartButton = document.createElement("button");
        restartButton.innerText = "게임 재시작";
        restartButton.addEventListener("click", function() {
            location.reload();
            comValue = randomNum();
            document.getElementById('user-input').value = '';
            restartButton.remove();
        });
        document.getElementById('app').appendChild(restartButton);
    } else if (strike === 0 && ball === 0) {
        resultDiv.innerHTML = `낫싱`;
    } else {
        resultDiv.innerHTML = `${ball}볼 ${strike}스트라이크`;
    } 
}
