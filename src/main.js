import cknum from './check_result.js';
import random from './getRandom.js';

const Button_refresh = document.getElementById('myButton');
const checkButton = document.querySelector('input[name=check]');
const correct_num = random()
console.log(correct_num)

// 버튼 클릭 이벤트 핸들러 추가
checkButton.onclick = function() {
  // 텍스트 입력 값 가져오기
  const inputText = document.querySelector('input[name=number]').value;
  
  const result = processInput(inputText);
  
  const out_list = cknum(result,correct_num)

  console.log(out_list)
  
  if(result===correct_num)
  { 
    // 결과를 'text-output' 요소에 출력
    document.getElementById('text-output-1').innerHTML = "<b>🎉정답을 맞추셨습니다.🎉</b>";
    document.getElementById('text-output-2').innerText = "게임을 새로 시작하겠습니까?";
    myButton.style.display = 'block'; // 정답일 경우 myButton을 보이게 합니다.
  }
  else if(out_list.ball ===0 && out_list.strike ===0) //몇개 맞췄는지 보여주자.
  {
    document.getElementById('text-output-1').innerHTML = "낫싱"
  }
  else
  {
    document.getElementById('text-output-1').innerHTML =`${out_list.ball} 볼 ${out_list.strike} 스트라이크`
  }

  // 추가적인 결과를 다른 요소에 출력하려면, 다른 id를 가진 요소를 찾아 값을 설정합니다.
  // 예: document.getElementById('text-output2').innerText = "추가 정보";
}


// 입력 값을 처리하는 함수 예시
function processInput(input) {

  const number = parseInt(input, 10);
  return number;

}

Button_refresh.onclick =function() {
  location.href = location.href;
}





  //필요한것 = random + 숫자야구 로직 자체