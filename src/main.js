import game from "./game";
import getResultView from "./getResultView";
import { initView } from "./getResultView";

// get input
const inputBtnEl = document.querySelector('.get-input .__form button');
const inputEl = document.querySelector('.get-input .__form input');
inputBtnEl.addEventListener('click', evt => {
    evt.preventDefault();
    const inputVal = inputEl.value;
    try{
        let result = game.getResult(inputVal);
        getResultView(result);
        inputEl.value = '';
    } catch(error){
        if(error!=="inValid input") throw error;
        alert('1부터9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요');
    }
});

// init game
const initGameBtn = document.querySelector('.result-view .__box.--right-answer button');
initGameBtn.addEventListener('click', () => {
    game.init();
    initView();
});