export function checkIsValidate(userNumbers) {
  const isSolo = userNumbers.every((num, index) => userNumbers.indexOf(num) === index);
  return userNumbers.length === 3 && isSolo;
}

export function compareNumbers(userNumbers, computerNumbers) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; i++) {
    if (userNumbers[i] === computerNumbers[i]) {
      strikes++;
    } else if (computerNumbers.includes(userNumbers[i])) {
      balls++;
    }
  }

  console.log('strikes:', strikes, 'balls:', balls);
  return { strikes, balls };
}
