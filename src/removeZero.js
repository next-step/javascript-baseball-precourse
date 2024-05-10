//0 제거 함수 
export function removeZero(input){
  const zeroIndex=input.indexOf('0');
  let newValue;
  if(zeroIndex !== -1) {
    newValue=input.substring(0, zeroIndex);
  }
  return newValue;
}