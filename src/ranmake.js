//랜덤 숫자 생성 -> 숫자생성 후 3자리 숫자로 반환

export default function ranmakenum() {
  var number = [];
  var randomnum;
  while (number.length < 3) {
    var random = Math.floor(Math.random() * 9) + 1;
    if (!number.includes(random)) {
      number.push(random);
    }
  }

  randomnum = number[0] * 100 + number[1] * 10 + number[2];

  return randomnum;
}
