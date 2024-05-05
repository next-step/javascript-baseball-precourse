export const computerNumber = () => {
  let computerArray = [];
  let number1, number2, number3;
  while(true){
    number1 = Math.floor(Math.random() * 9) + 1;
    number2 = Math.floor(Math.random() * 9) + 1;
    number3 = Math.floor(Math.random() * 9) + 1;
    if(number1 !== number2 && number2 !== number3 && number1 !== number3) break;
  }
  computerArray.push(number1.toString(), number2.toString(), number3.toString());
  return computerArray;
}

