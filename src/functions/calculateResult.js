export default function calculateResult(randomNumber, userInput) {
  const randomDigits = randomNumber;
  const userDigits = userInput.split("").map(Number);

  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < randomDigits.length; i++) {
    if (randomDigits[i] === userDigits[i]) {
      strikes++;
    } else if (randomDigits.includes(userDigits[i])) {
      balls++;
    }
  }

  return { strikes, balls };
}
