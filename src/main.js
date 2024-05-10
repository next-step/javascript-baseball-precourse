import { checkNumber } from "./modules/checkNumber";
import { finishGame } from "./modules/finishGame";
import { getResult } from "./modules/getResult";
import { makeRandom } from "./modules/makeRandom";
import { showResult } from "./modules/showResult";

const resultBoard = document.querySelector(".result");
const successBoard = document.querySelector(".success");
const finishBoard = document.querySelector(".finishGame");
const inputEl = document.getElementById("input");


successBoard.style.display = "none";
finishBoard.style.display = "none";

//컴퓨터 랜덤 수 생성
const computer = makeRandom();
console.log(computer);
 
//입력 수 검사
inputEl.addEventListener('input', e => checkNumber(e, inputEl));

//숫자 제출
document.getElementById("submitBtn").addEventListener("click", function() {
    
        if(inputEl.value.length == 3){
            const score = getResult(computer, inputEl.value);
            const result = showResult(score);
            
            if(score[0] != 3){
                document.getElementById("score").innerHTML += `<div>${inputEl.value} : ${result}</div>`;
            } else {
                resultBoard.style.display = "none";
                successBoard.style.display = "block";
            }
        } else {
            alert("세자리 숫자를 입력해주세요.");
        }
    
})


//프로그램 완전히 종료
document.getElementById("endBtn").addEventListener("click", function() {
    finishGame();
});


