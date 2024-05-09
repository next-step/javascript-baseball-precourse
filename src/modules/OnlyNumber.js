export const OnlyNumber = (event) => {
    const key = event.key;

    // 입력된 키가 숫자인지, 백스페이스 또는 엔터인지 확인합니다.
    if (/\d/.test(key) || key === "Backspace" || key === "Enter") {
        const inputEl = document.querySelector("input");
        const value = inputEl.value;

        // 현재 입력된 값과 이전 값이 같으면 입력을 막고 경고창을 표시합니다.
        if (value.length > 0 && value[value.length - 1] === key) {
            event.preventDefault();
            alert("중복된 값을 입력할 수 없습니다.");
            return false;
        }
        return true;
    } else {
        event.preventDefault();
        alert("숫자만 입력 가능합니다.");
        return false;
    }
};
