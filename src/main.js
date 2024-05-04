import checkResult from './checkResult.js';
import getRandom from './getRandom.js';
import wrongIn from './wrongIn.js';

const buttonRefresh = document.getElementById('myButton')
const checkButton = document.querySelector('input[name=check]')
const correctNum = getRandom()

checkButton.onclick = function() {
  const inputText = document.querySelector('input[name=number]').value
  const result = processInput(inputText)
  const isError = wrongIn(result)
  if(isError === 1) {
    return 0
  }
  const outList = checkResult(result,correctNum)
  if(result===correctNum)  { 
    document.getElementById('text-output-1').innerHTML = "<b>🎉정답을 맞추셨습니다.🎉</b>"
    document.getElementById('text-output-2').innerText = "게임을 새로 시작하겠습니까?"
    buttonRefresh.style.display = 'block'; 
  }  else if(outList.ball === 0 && outList.strike === 0)  {
    document.getElementById('text-output-1').innerHTML = "<b>낫싱</b>"
  }  else  {
    document.getElementById('text-output-1').innerHTML =`<b>${outList.ball} 볼 ${outList.strike} 스트라이크</b>`
  }
}

function processInput(input) {
  const number = parseInt(input, 10);
  return number;
}

buttonRefresh.onclick =function() {
  location.href = location.href
}


