export default function gameResult(result, input){
  let strike = 0;
  let ball = 0;

  for (let i=0; i<3; i++){
    if(result[i] === input[i]){
      strike ++;
    }
    else if(result.indexOf(input[i])>-1){
      ball++;
    }
    
  }
  console.log('스트라이크',strike)
  console.log('볼',ball)
  return [strike, ball]
}
