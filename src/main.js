import getRandom from "../src/getRandom.js";

// 시스템상에서 랜덤으로 중복되지않는 3자리 숫자를 만들어내는 코드
let result = getRandom()

// 콘솔창에서 정답 확인 가능
result = result.join('')
console.log('정답:',result)