export default function (userInput, targetNumber) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (userInput[i] === targetNumber[i]) strike++;
    else if (targetNumber.includes(userInput[i])) ball++;
  }

  const resultEl = document.getElementById("result");
  if (strike === 3) {
    resultEl.innerHTML = `
    <span class="material-symbols-outlined celebration">celebration</span> 정답을 맞추셨습니다!
            <span class="material-symbols-outlined celebration">celebration</span>
            <p>게임을 새로 시작하시겠습니까?</p>
            <button class="btn-re" id="userInput">게임 재시작</button>`;
  } else {
    resultEl.innerHTML = `<span class="material-symbols-outlined description">description</span> 결과 \n ${strike} 스트라이크, ${ball} 볼`;
  }
}
