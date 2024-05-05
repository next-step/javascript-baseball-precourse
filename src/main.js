import getRandom from "../src/getRandom.js";

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