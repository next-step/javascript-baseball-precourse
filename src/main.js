import { generateNumbers } from "./generateNumber.js"; //번호 생성 함수 호출
import { counting } from "./counting.js";

const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');
const $restartButton = document.querySelector('#restartButton');
const $restart = document.querySelector('#restart');

let answer = generateNumbers(); //정답 생성 
console.log(answer); //콘솔에 정답 출력

let tries = []; //시도한 수들 
function checkInput(input) {
  if (input.length !== 3) { //3자리 숫자가 아니라면
    return alert('3자리 숫자를 입력해 주세요.');
  }
  if (new Set(input).size !== 3) { //중복된 수가 들어갔다면 
    return alert('중복되지 않게 입력해주세요');
  }
  if (tries.includes(input)) { //이미 시도했던 값이라면
    return alert('이미 시도한 값입니다');
  }

  return true;
}

$form.addEventListener('submit', (event) => {
  event.preventDefault(); //페이지 새로고침 방지 
  const value = $input.value; //입력값 할당
  $input.value = ''; //입력창 초기화
  const valid = checkInput(value); //입력값이 유효한지 확인
  if (!valid) return; //유효하지 않다면 중단 후 종료(return)
  if (answer.join('') === value) { //문자열 결합 및 정답 확인
    displayResult('🎉정답을 맞추셨습니다!🎉'); //정답이 맞다면 출력
    document.getElementById('restart').style.display = 'block'; //restart버튼이 보이게
    $input.disabled = true; //정답을 맞추면 입력창 비활성화 
    return;
  }

  let score = {strike: 0, ball: 0}; //스트라이크, 볼 개수 초기화

  for (let i = 0; i < answer.length; i++) { //정답의 길이만큼 반복
    const index = value.indexOf(answer[i]); //입력값에 정답요소가 있는지 확인, 없으면 -1반환
    counting(index, score, i);
  }
  
  if (score.strike === 0 && score.ball === 0){ //0스트라이크 0볼일 때
    displayResult('Nothing(낫싱)'); //낫띵 출력
  } else { //낫싱이 아니라면
    displayResult(`${value}: ${score.strike} 스트라이크 ${score.ball} 볼`); //스트라이크, 볼 출력
  }
  tries.push(value); //시도한 값들을 tries배열에 추가한다 
});

function displayResult(result) {
  $logs.textContent = result; // 이전 결과를 삭제하고 새로운 결과로 대체
}

function restartGame() {
 answer = generateNumbers(); //새로운 수를 answer에 할당
 tries = []; //시도했던 기록 초기화
 $logs.textContent = ''; //입력창 초기화
 $restart.style.display='none'; //재시작 버튼 숨기기
  $input.disabled = false; //비활성화된 입력창 다시 활성화
  console.log(answer); //콘솔에 다시 정답출력
}

$restartButton.addEventListener('click', restartGame); //재시작 버튼 클릭 시 restartGame호출