export function validateInput(inputValue) {
    if (inputValue.length !== 3) {
        alert("숫자 3개를 입력하세요..");
        return false;
    }
    if (!/^[1-9]{3}$/.test(inputValue)) {
        alert("1~9까지의 숫자를 입력하세요.");
        return false;
    }
    if (new Set(inputValue).size !== 3) {  
        alert("중복되지 않은 숫자를 입력하세요.");
        return false;
    }
    return true;
}
