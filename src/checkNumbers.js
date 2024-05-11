export default function checkNumbers(answer) {
    const input = document.getElementById("input").value; // 입력값 가져오기
    if (new Set(input).size !== 3 || input.includes("0") || input.length !== 3) {
        alert("잘못된 입력입니다. 중복없이 1~9까지의 숫자를 입력해주세요.");
        document.getElementById("input").value = ""; // 입력 필드 초기화
        return;
    }

    let strikes = 0;
    let balls = 0;
    const inputNumbers = input.split("");

    answer.forEach((number, index) => {
        if (number === inputNumbers[index]) {
            strikes++;
        } else if (inputNumbers.includes(number)) {
            balls++;
        }
    });

    if (strikes === 3) {
        document.getElementById("result").innerText = "정답을 맞추셨습니다";
        document.getElementById("replayButton").style.display = "block"; //재시작 버튼 표시 추가
        document.getElementById("replayMessage").innerText = "게임을 새로 시작하시겠습니까?"; //재시작 멘트 표시 추가
        document.getElementById("endButton").style.display = "block"; // 재시작 버튼 표시
        document.getElementById("endMessage").innerText = "게임을 종료합니다 ";

    } else if (strikes === 0 && balls === 0) {
        document.getElementById("result").innerText = "낫싱";
    } else {
        document.getElementById("result").innerText = `${balls}볼 ${strikes}스트라이크`;
    }
}