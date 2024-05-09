import { makeRandom, checkNumber, getResult, showResult } from "../modules/modules";

const resultBoard = document.querySelector('.result');
const successBoard = document.querySelector('.success');
successBoard.style.display = "none";

//컴퓨터 랜덤 수 생성
const computer = makeRandom();
console.log(computer);
 
//입력수 검사
document.getElementById('submitBtn').addEventListener('click', function() {
    const userNum = document.getElementById('input').value;
    
    if(checkNumber(userNum)){
        const score = getResult(computer, userNum);
        const result = showResult(score);
    
        if(score[0] != 3){
            document.getElementById('score').innerHTML += `<div>${userNum} : ${result}</div>`;
        } else {
            resultBoard.style.display = 'none';
            successBoard.style.display = "block";
        }
    }
    
})


