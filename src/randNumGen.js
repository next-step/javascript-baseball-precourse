// 랜덤 3자리 수 생성
Math.random();
export let answer = "";
//for문은 중복 가능성이 있으니, while 문으로 작성
export const randNumGenerator = () => {
  while (answer.length < 3) {
    const randNum = Math.floor(Math.random() * 9) + 1;
    if (!answer.includes(randNum)) {
      answer += randNum;
    }
    console.log(answer);
  }
};
