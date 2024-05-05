export function generateNumbers(){
  let numbers = []; //숫자를 담을 배열
  for (let n = 1; n <= 9; n++) {
    numbers.push(n); //1~9까지의 숫자 배열을 생성
}

  let answer = []; //정답을 담을 배열 
  for (let n = 0; n <= 2; n++) { //3번 반복
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]); //배열의 길이에 따른 범위 내에서 난수 생성
    numbers.splice(index, 1); //중복 방지를 위해 numbers에서 제거
  }

  return answer; //정답 반환
}
