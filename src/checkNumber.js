export default function checkNumber(userInput) {
      const errorMessageElement = document.getElementById("error-message");

      errorMessageElement.textContent = "";

      // 입력이 3자리 숫자인지 확인
      if (!/^\d{3}$/.test(userInput)) {
            // 입력이 3자리가 아니면, 오류 메시지 표시
            errorMessageElement.textContent = "3자리 수로 입력해주세요";
            return false;
      }

      // 입력에 중복된 숫자가 있는지 확인
      if (new Set(userInput).size !== 3) {
            // 중복된 숫자가 있으면, 오류 메시지 표시
            errorMessageElement.textContent = "중복 없이 입력해주세요";
            return false;
      }

      return true;
}
