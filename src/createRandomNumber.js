export default function createRandomNumber() {
  const numbers = []; //숫자를 담을 배열 생성
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNumber)) {
      //해당 숫자가 없으면
      numbers.push(randomNumber); //추가해준다
    }
  }
  return numbers;
}
