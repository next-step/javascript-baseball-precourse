
// 사용자가 입력한 숫자 확인
function checkNumbers() {
    const input = document.getElementById("input").value; // 입력값 가져오기
    if (new Set(input).size !== 3 || input.includes("0") || input.length !== 3) {
      alert("잘못된 입력입니다. 중복없이 1~9까지의 숫자를 입력해주세요.");
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

    console.log(strikes, balls);

  if (strikes === 3) {
    document.getElementById("result").innerText = "정답을 맞추셨습니다";
    // replay(); // 게임 재시작
  } else if (strikes === 0 && balls === 0) {
    document.getElementById("result").innerText = "낫싱";
  } else {
    document.getElementById(
      "result"
    ).innerText = `${balls}볼 ${strikes}스트라이크`;
  }
}