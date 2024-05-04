const set = []; // 랜덤 난수 담을 배열

while (set.length < 3) {
  const rand = Math.floor(Math.random() * 9) + 1;
  if (!set.includes(rand)) {
    set.push(rand);
  }
}
console.log(set);

const checkButton = document.getElementById('check');
checkButton.addEventListener('click', check);

function check() {
  let input = document.getElementById('input').value;
  let inputArr = input.toString().split('').map(Number);
  console.log(input);
  console.log(inputArr);

  if (checkValid(inputArr)) {
    console.log("유효한 입력")
  }
}

function checkValid(inputArr) {
  // 입력 숫자가 3개 맞는지 검사
  if (inputArr.length !== 3) {
    alert("숫자를 3개 입력해주세요");
    return false;
  }

  // 중복 숫자 검사
  let inputSet = new Set(inputArr);
  if(inputSet.size !== 3) {
    alert("1부터 9까지의 숫자를 중복 없이 3개 입력해주세요");
    return false;
  }

  return true;
}