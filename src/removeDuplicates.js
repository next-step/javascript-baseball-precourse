//중복 제거 함수 
export function removeDuplicates(input) { 
  let result = '';

  for (let i = 0; i < input.length; i++) {
    //현재 숫자가 이전 숫자와 중복되는지 확인
    if (i === 0 || input[i] !== input[i - 1] && input[i] !== input[i - 2]) {
        //중복되지 않으면 결과에 추가
        result += input[i];
    } else {
        //중복되면 중단
        break;
    }
  }
  return result;
}