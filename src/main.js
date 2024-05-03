const set = []; // 랜덤 난수 담을 배열
let input = document.getElementById('input').value;

while (set.length < 3) {
  const rand = Math.floor(Math.random() * 9) + 1;
  if (!set.includes(rand)) {
    set.push(rand);
  }
}
console.log(set);

function check() {
  console.log(input);
}