import ckNum from './check_result.js';
import random from './getRandom.js';
import retry from './wrong_in.js';

const buttonRefresh = document.getElementById('myButton');
const checkButton = document.querySelector('input[name=check]');
const correctNum = random()
console.log(correctNum)

checkButton.onclick = function() {
  const inputText = document.querySelector('input[name=number]').value;
  
  const result = processInput(inputText);

  const isError = retry(result)

  if(isError===1)
  {
    return 0
  }
  
  const outList = ckNum(result,correctNum)

  console.log(outList)
  
  if(result===correctNum)
  { 
    // 결과를 'text-output' 요소에 출력
    document.getElementById('text-output-1').innerHTML = "<b>🎉정답을 맞추셨습니다.🎉</b>";
    document.getElementById('text-output-2').innerText = "게임을 새로 시작하겠습니까?";
    buttonRefresh.style.display = 'block'; // 정답일 경우 myButton을 보이게 합니다.
  }
  else if(outList.ball ===0 && outList.strike ===0) //몇개 맞췄는지 보여주자.
  {
    document.getElementById('text-output-1').innerHTML = "<b>낫싱</b>"
  }
  else
  {
    document.getElementById('text-output-1').innerHTML =`<b>${outList.ball} 볼 ${outList.strike} 스트라이크</b>`
  }

}

function processInput(input) {

  const number = parseInt(input, 10);
  return number;

}

buttonRefresh.onclick =function() {
  location.href = location.href;
}


