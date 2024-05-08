export const displayGameResult = (strikes, balls) => {
    const resultElement = document.getElementById("gameResult");
    if (strikes === 3) {
        resultElement.textContent = ""; // 기존 결과 텍스트 초기화 하고 결과 메시지 출력
        showRestartOption();
    } else {

        if (balls === 0 && strikes === 0) {
            resultElement.textContent = "낫싱";
        } else if (balls > 0 && strikes === 0) {
            resultElement.textContent = `${balls}볼`;
        } else if (balls === 0 && strikes > 0) {
            resultElement.textContent = `${strikes}스트라이크`;
        } else {
            resultElement.textContent = `${balls}볼 ${strikes}스트라이크`;
        }
    }
};

const showRestartOption = () => {
    const restartPrompt = document.getElementById("restartPrompt");
    const restartButton = document.getElementById("restartButton");
    restartPrompt.style.display = 'block';
    restartButton.style.display = 'block';
    restartButton.onclick = restartGame;
};

const restartGame = () => {
    computerNumber = [];
    generateComputerNumber();
    document.getElementById("userInput").value = "";
    document.getElementById("gameResult").textContent = "";
    document.getElementById("restartPrompt").style.display = 'none';
    document.getElementById("restartButton").style.display = 'none';
};