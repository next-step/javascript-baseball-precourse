export default function generateRandomNumber() {
  let digits = [];

  while (digits.length < 3) {
    let randomNumber = Math.floor(Math.random() * 9) + 1;

    if (!digits.includes(randomNumber)) {
      digits.push(randomNumber);
    }
  }

  return digits;
}
