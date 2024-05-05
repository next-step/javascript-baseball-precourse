export default function  generateRandomNumber() {
      //1부터 9까지 서로 다른 수로 이루어진 3자리의 수
      let answerArr = [];
      while (answerArr.length < 3) {
            //1~9까지의 숫자가 출력되어야 하므로
            let num = Math.floor(Math.random() * 9) + 1;
            //anserArr에 없으면,(중복이 아니면)
            if (!answerArr.includes(num)) {
                  //배열에 넣어준다.
                  answerArr.push(num);
            }
      }
      return answerArr.join('');
}