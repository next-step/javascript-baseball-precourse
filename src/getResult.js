function compareNumbers(random, user) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < 3; ++i) {
    if (random[i] == user[i]) {
      strikes++;
    } else if (random.includes(user[i])) {
      balls++;
    }
  }

  return { strikes, balls };
}

export function getResult(random, user) {
  const { strikes, balls } = compareNumbers(random, user);
  const resultText = "";
  const isCorrect = false;

  if (strikes === 3) {
    resultText = "🎉정답을 맞추셨습니다🎉";
    isCorrect = true;
  } else if (strikes === 0) {
    resultText = `${balls}볼`;
  } else if (balls === 0) {
    resultText = `${strikes}스트라이크`;
  } else {
    resultText = `${balls}볼 ${strikes}스트라이크`;
  }

  return { resultText, isCorrect };
}
