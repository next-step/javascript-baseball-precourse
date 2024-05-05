import getRandom from "../src/getRandom.js";
import getResult from "../src/getResult.js";

// 시스템상에서 랜덤으로 중복되지않는 3자리 숫자를 만들어내는 코드
let result = getRandom()

// 콘솔창에서 정답 확인 가능
result = result.join('')
console.log('정답:',result)

// 사용자 입력을 받는 코드
let input
let count = 0
let resultArr= []

document.querySelector('#input_btn').addEventListener('click', function() {
  input = document.getElementById('input_num').value
  console.log(input)
  const Inputset = new Set(input);

  // 잘못된 입력에 대한 오류 처리
  if (Inputset.size != 3) {
    alert('잘못 입력된 값');
    document.getElementById('input_num').value = '';
    return -1;
  }
  // 제대로 입력 됐다면, 게임 시작
    game(input);
  });

function game(input){
  // 문자열로 정답과 입력 값을 비교
  input = input.toString()
  // 정답과 입력값이 같다면 정답 코드를 출력하고 끝냄
  if(result === input){
    count +=1
    document.querySelector('.incorrect_nothing').style.display = 'none';
    document.querySelector('.incorrect').style.display = 'none';
    document.querySelector('.correct').style.display = 'block';
    return;
  }
  else{ // 정답과 틀리다면 힌트 함수를 실행하여 힌트 출력
    resultArr=getResult(result,input)
    count +=1
    try_num1.textContent = count;
    try_num2.textContent = count;
  }

  // 힌크 결과를 출력하는 조건문

  if(resultArr[0] === 0 && resultArr[1] === 0){
    document.querySelector('.incorrect').style.display = 'none';
    document.querySelector('.incorrect_nothing').style.display = 'block';

  }else{

    strike.textContent = resultArr[0];
    ball.textContent = resultArr[1];
    
    document.getElementById('input_num').value = '';
    document.querySelector('.incorrect_nothing').style.display = 'none';
    document.querySelector('.incorrect').style.display = 'block';
  }
}

// 재시작 버튼을 누른다면 게임을 처음부터 다시 시작
document.getElementById('restart').addEventListener('click', function() {
  location.reload();
});