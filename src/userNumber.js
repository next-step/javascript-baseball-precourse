export const userNumber = (userInputNumber) => {
  let userNum = userInputNumber.toString().split('');
  if (userNum.length !== 3 || isNaN(userNum[0]) || isNaN(userNum[1]) || isNaN(userNum[2])){
    alert('세자리 숫자를 입력해주세요.');
    return null;
  } else if (userNum[0] === userNum[1] || userNum[1] === userNum[2] || userNum[0] === userNum[2]) 
  {
    alert('중복된 숫자가 있어요.');
    return null;
  }
  return userNum;
}