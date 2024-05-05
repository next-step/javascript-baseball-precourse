const rightAnswerEl = document.querySelector('.result-view .__box.--right-answer');
const wrongAnswerEl = document.querySelector('.result-view .__box.--wrong-answer');

const rightView = () => {
    rightAnswerEl.style.display = "block";
    wrongAnswerEl.style.display = "none";
}
const wrongView = result => {
    if(result.strike==0 && result.ball==0)
        wrongAnswerEl.innerText = '낫싱';
    else
        wrongAnswerEl.innerHTML =
            `${result.ball>0 ? result.ball+'볼 ':''} ${result.strike>0 ? result.strike+'스트라이크':''}`;
        
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