const rightAnswerEl = document.querySelector('.result-view .__box.--right-answer');
const wrongAnswerEl = document.querySelector('.result-view .__box.--wrong-answer');

const rightView = () => {
    rightAnswerEl.style.display = "block";
    wrongAnswerEl.style.display = "none";
}
const resultStrikeEl = wrongAnswerEl.querySelector('#div--result-strike');
const resultBallEl = wrongAnswerEl.querySelector('#div--result-ball');
const wrongView = result => {
    resultStrikeEl.innerText = result.strike +'개';
    resultBallEl.innerText = result.ball  + '개';
    rightAnswerEl.style.display = "none";
    wrongAnswerEl.style.display = "block";
}
const initView = () => {
    rightAnswerEl.style.display = "none";
    wrongAnswerEl.style.display = "none";
}

const getResultView = result => {
    if(result.strike==3) rightView();
    else wrongView(result);
}

export default getResultView;
export {initView};