//스트라이크 및 볼 출력
import { displayLogText } from "./displayLogText.js";

export function displayScore(value, score) {
  if (score.strike === 0 && score.ball === 0){ //0스트라이크 0볼일 때
    displayLogText('Nothing(낫싱)'); //낫띵 출력
  } else { //낫싱이 아니라면
    displayLogText(`${value}: ${score.strike} 스트라이크 ${score.ball} 볼`); //스트라이크, 볼 출력
  }
}