import game from "./game";

// get input
const inputBtnEl = document.querySelector('.get-input .__form button');
const inputEl = document.querySelector('.get-input .__form input');
inputBtnEl.addEventListener('click', evt => {
    evt.preventDefault();
    const inputVal = inputEl.value;
    try{
        let result = game.getResult(inputVal);
        console.log(result); // TODO result에 따른 판단하기
        inputEl.value = '';
    } catch(error){
        if(error!=="inValid input") throw error;
        alert('1부터9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요');
    }
});