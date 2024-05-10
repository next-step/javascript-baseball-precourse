// 스트라이크 및 볼 계산 
export function counting (index, score, i){
  if (index === -1) {return;} //일치하는 정답요소가 없다면 탈출
  if (index === i) {score.strike += 1;} //같은 위치에 있다면 스트라이크 추가
  else {score.ball += 1;} //아니라면 볼 추가    
}