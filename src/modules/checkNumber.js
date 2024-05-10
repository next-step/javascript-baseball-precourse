
function checkNumber(e, inputEl) {
    let content = inputEl.value;
    let lastValue = e.data;

    
    if( isNaN(lastValue) ){
        alert("숫자를 입력해 주세요.");
        inputEl.value = content.slice(0, -1);
        return;
    }
    else if( content.length > 3 ){
        alert("세자리 수를 입력해 주세요.");
        inputEl.value = content.slice(0, -1);
        return;
    }
    else if( content.slice(0, -1).includes(lastValue) ){
        alert("중복되지 않는 수를 입력해 주세요.");
        inputEl.value = content.slice(0, -1);
        return;
    }
    else if( lastValue == 0 ){
        alert("1~9까지의 수를 입력해 주세요.");
        inputEl.value = content.slice(0, -1);
        return;
    }

    return true;  
}

export { checkNumber };