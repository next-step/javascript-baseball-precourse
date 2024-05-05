export default function result(userInput, targetNumber) {
      // 결과를 계산
      const { strikes, balls } = calculateScore(userInput, targetNumber);

      // 결과를 화면에 표시
      showResult(strikes, balls);
}

function calculateScore(userInput, targetNumber) {
      let strikes = 0;
      let balls = 0;

      for (let i = 0; i < 3; i++) {
            if (userInput[i] === targetNumber[i]) strikes++;
            else if (targetNumber.includes(userInput[i])) balls++;
      }

      return { strikes, balls };
}

function showResult(strikes, balls) {
      const resultMessage = document.getElementById("result-message");
      if (strikes === 3) {
            // 스트라이크가 3개인 경우 정답 메시지를 표시
            resultMessage.textContent = "🎉 축하합니다! 정답을 맞추셨습니다! 🎉";
      } else if (strikes > 0 || balls > 0) {
            // 스트라이크나 볼이 있는 경우 해당 개수를 표시
            let message = "";
            if (balls > 0) message += ` ${balls} 볼`;
            if (strikes > 0) message += `${strikes} 스트라이크`;
            resultMessage.textContent = message;
      } else {
            // 스트라이크와 볼이 모두 없는 경우 낫싱 메시지를 표시
            resultMessage.textContent = "낫싱";
      }
}