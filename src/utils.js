export function generateNumber() {
    let answer = '';
    while (answer.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!answer.includes(randomNumber)) {
            answer += randomNumber;
        }
    }
    return answer;
}

export function isValidInput(inputValue) {
    if (inputValue.length !== 3) {
        alert("세 자리 수를 입력해야 합니다.");
        return false;
    }
    if (!/^[1-9]{3}$/.test(inputValue)) {
        alert("1부터 9까지의 숫자 세 개를 입력해야 합니다.");
        return false;
    }
    if (new Set(inputValue).size !== 3) {  
        alert("각 숫자는 중복되지 않아야 합니다.");
        return false;
    }
    return true;
}

export function computeStrikeAndBall(userNumber, computerNumber) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i += 1) {
        if (userNumber[i] === computerNumber[i]) {
            strike += 1;
        }
        else if (computerNumber.indexOf(userNumber[i]) !== -1) {
            ball += 1;
        }
    }
    return { strike, ball };
}