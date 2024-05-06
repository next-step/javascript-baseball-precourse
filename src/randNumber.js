export default function generateRandomNumber(restart = false) {
      // 기존의 resultNum이 localStorage에 있는지 확인
      let resultNum = localStorage.getItem("resultNum");

      // 게임 재시작이 아닌 경우와 resultNum이 이미 있는 경우 그대로 반환
      if (!restart && resultNum) {
            return resultNum;
      }

      // 새로운 정답 생성
      resultNum = generateUniqueNumber();
      localStorage.setItem("resultNum", resultNum);
      console.log(resultNum);
      return resultNum;
}

function generateUniqueNumber() {
      const answerArr = [];

      // 중복되지 않는 3자리 숫자 생성
      while (answerArr.length < 3) {
            const num = Math.floor(Math.random() * 9) + 1;
            if (!answerArr.includes(num)) {
                  answerArr.push(num);
            }
      }

      return answerArr.join('');
}