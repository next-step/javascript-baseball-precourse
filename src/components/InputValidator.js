export function validateInput(input) {
    // 입력값이 숫자가 아닌 경우 에러
    if (!/^\d+$/.test(input)) {
        alert("입력값은 숫자만 입력해야 합니다.");
        return false;
    }

    // 입력값이 3자리가 아닌 경우 에러
    if (input.length !== 3) {
        alert("입력값은 3자리여야 합니다.");
        return false;
    }

    // 입력값이 중복된 숫자를 포함하는 경우 에러
    if (new Set(input).size !== input.length) {
        alert("입력값은 중복된 숫자를 포함해서는 안됩니다.");
        return false;
    }

    // 모든 유효성 검사를 통과한 경우 true 반환
    return true;
}
