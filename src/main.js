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
}