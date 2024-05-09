export const ShowResult = (strikes, balls) => {
    const ansEl = document.getElementById("ansEl");

    if (strikes === 3) {
        ansEl.innerHTML =
            "<span>🎉정답을 맞추셨습니다!🎉<br>게임을 새로 시작하시겠습니까?</span>";
    } else if (strikes === 0 && balls === 0) {
        ansEl.innerText = "낫싱";
    } else {
        ansEl.innerText = `${strikes} 스트라이크, ${balls} 볼`;
    }
};
