const set = []; // 랜덤 난수 담을 배열

while (set.length < 3) {
  const rand = Math.floor(Math.random() * 10) + 1;
  if (!set.includes(rand)) {
    set.push(rand);
  }
}
console.log(set);
