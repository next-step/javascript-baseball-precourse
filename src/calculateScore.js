//총 스트라이크 및 볼 수 합산계산 
import { counting } from "./counting.js";
import { answer } from "./main.js";

export function calculateScore(value) {
  let score = {strike: 0, ball: 0}; //스트라이크, 볼 개수 초기화
  for (let i = 0; i < answer.length; i++) { //정답의 길이만큼 반복
    const index = value.indexOf(answer[i]); //입력값에 정답요소가 있는지 확인, 없으면 -1반환
    counting(index, score, i);
  }
  return score;
}