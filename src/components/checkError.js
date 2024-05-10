export default function checkError(value) {
    // 입력 받은 값이 숫자가 아닌 경우
    if (!value || isNaN(value)) {
        alert("숫자만 입력해야 합니다.\n다시 입력해주세요.");
        return false;
    }

    // 입력 받은 숫자가 3자리가 아닌 경우
    if (value.length !== 3) {
        alert("3자리 수의 숫자만 입력해야 합니다.\n다시 입력해주세요.");
        return false;
    }

    // 입력 받은 값에 중복된 숫자가 있을 경우
    let digits = value.split('');
    let uniqueDigits = [...new Set(digits)];
    if (uniqueDigits.length !== digits.length) {
        alert("중복된 숫자 없이 입력해야 합니다.\n다시 입력해주세요.");
        return false;
    }
    return true;
}

