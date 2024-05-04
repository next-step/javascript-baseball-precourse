export default class InputValidator {
    static validateLength(userInput) {
        return /^\d{3}$/.test(userInput);
    }

    static validateDuplicates(userInput) {
        return new Set(userInput).size === userInput.length;
    }
    static validateInput(userInput) {
        if (!this.validateLength(userInput)) {
            alert("잘못된 입력입니다. 세 자리 숫자(1~9)를 입력해주세요!");
            return false;
        }
        else if (!this.validateDuplicates(userInput)) {
            alert("잘못된 입력입니다. 중복 없이 입력해주세요!");
            return false;
        }
        return true;
    }
}