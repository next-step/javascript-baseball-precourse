//랜덤숫자 
function RandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const n = Math.floor(Math.random() * 9) + 1;
      if (!numbers.includes(n)) {
        numbers.push(n);
      }
    }
    return numbers.join(""); // 숫자 배열을 문자열로 반환
  }