const numbers = Array(9).fill().map((item, index) => index + 1);
export let random = [];

export const createRandomNum = () => {
  random.length = 0;
  for(var i=0; i<3; i++) {
    const num = Math.floor(Math.random() * numbers.length);
    const newArr = numbers.splice(num, 1);
    const val = newArr[0];
    random.push(String(val));
  }
  console.log(random);
}