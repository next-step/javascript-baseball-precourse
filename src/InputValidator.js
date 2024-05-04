export default class InputValidator {
    static validateLength(userInput) {
        console.log(/^\d{3}$/.test(userInput));
        return /^\d{3}$/.test(userInput);
    }

    static validateDuplicates(userInput) {
        console.log(new Set(userInput).size === userInput.length);
        return new Set(userInput).size === userInput.length;
    }

    static validateInput(userInput) {
        if (!this.validateLength(userInput)) {
            alert("세 자리 숫자를 입력해주세요!");
            return false;
        }
        if (!this.validateDuplicates(userInput)) {
            alert("중복 없이 입력해주세요!");
            return false;
        }
        return true;
    }
}