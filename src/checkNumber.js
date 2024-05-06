export default function checkNumber(userInput) {
      const errorMessageElement = document.getElementById("error-message");

      errorMessageElement.textContent = "";

      // 입력이 3자리 숫자인지 확인
      if (!/^\d{3}$/.test(userInput)) {
            showError("3자리 수로 입력해주세요");
            return false;
      }

      // 입력에 중복된 숫자가 있는지 확인
      if (new Set(userInput).size !== 3) {
            showError("중복 없이 입력해주세요");
            return false;
      }

      return true;
}

function showError(message) {
      const errorMessageElement = document.getElementById("error-message");
      errorMessageElement.textContent = message;
}